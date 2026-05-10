import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabaseAdmin } from "@/integrations/supabase/client.server";

const meetingSchema = z.object({
  name: z.string().min(1).max(120),
  email: z.string().email().max(200),
  phone: z.string().max(40).optional().or(z.literal("")),
  company: z.string().max(120).optional().or(z.literal("")),
  service: z.string().max(80).optional().or(z.literal("")),
  preferred_date: z.string().max(40).optional().or(z.literal("")),
  message: z.string().max(2000).optional().or(z.literal("")),
});

export const createMeeting = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => meetingSchema.parse(data))
  .handler(async ({ data }) => {
    const { error } = await supabaseAdmin.from("meetings").insert({
      name: data.name,
      email: data.email,
      phone: data.phone || null,
      company: data.company || null,
      service: data.service || null,
      preferred_date: data.preferred_date ? new Date(data.preferred_date).toISOString() : null,
      message: data.message || null,
    });
    if (error) {
      console.error("createMeeting error", error);
      return { ok: false, error: "Could not save your request. Please try again." };
    }
    return { ok: true };
  });

const contactSchema = z.object({
  name: z.string().min(1).max(120),
  email: z.string().email().max(200),
  subject: z.string().max(200).optional().or(z.literal("")),
  message: z.string().min(1).max(4000),
});

export const createContact = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    const { error } = await supabaseAdmin.from("contact_messages").insert({
      name: data.name,
      email: data.email,
      subject: data.subject || null,
      message: data.message,
    });
    if (error) {
      console.error("createContact error", error);
      return { ok: false, error: "Could not send message. Please try again." };
    }
    return { ok: true };
  });

const chatSchema = z.object({
  messages: z
    .array(
      z.object({
        role: z.enum(["user", "assistant", "system"]),
        content: z.string().max(4000),
      })
    )
    .min(1)
    .max(40),
});

const SYSTEM_PROMPT = `You are Adnan's AI Assistant on his premium business website.
Adnan Sami is a high-value solution provider offering three core services:
1. High-end cinematic creative direction
2. AI-driven business automation
3. Scalable growth strategy

Contact: adnanrihan56@gmail.com, +8801317680620.
Visitors can book a meeting at /contact.

Be concise, smart, and friendly. ALWAYS reply in the same language the user wrote in
(Bengali, English, Hindi, Arabic, Spanish, etc. — detect and match). If asked to book a meeting,
direct them to the /contact page or ask for their name, email and preferred time.`;

export const aiChat = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => chatSchema.parse(data))
  .handler(async ({ data }) => {
    const apiKey = process.env.LOVABLE_API_KEY;
    if (!apiKey) {
      return { ok: false, reply: "AI assistant is not configured yet." };
    }
    try {
      const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-3-flash-preview",
          messages: [{ role: "system", content: SYSTEM_PROMPT }, ...data.messages],
        }),
      });
      if (!res.ok) {
        const text = await res.text();
        console.error("AI gateway error", res.status, text);
        if (res.status === 429) return { ok: false, reply: "Too many requests. Please wait a moment." };
        if (res.status === 402) return { ok: false, reply: "AI credits exhausted. Please contact the site owner." };
        return { ok: false, reply: "AI service temporarily unavailable." };
      }
      const json = (await res.json()) as { choices?: Array<{ message?: { content?: string } }> };
      const reply = json.choices?.[0]?.message?.content ?? "(no reply)";
      return { ok: true, reply };
    } catch (err) {
      console.error("aiChat exception", err);
      return { ok: false, reply: "Something went wrong. Please try again." };
    }
  });