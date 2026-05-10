import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { createMeeting, createContact } from "@/lib/contact.functions";
import { Mail, Phone, Calendar, Send, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Book a Meeting | Adnan Sami" },
      { name: "description", content: "Book a strategy call with Adnan Sami or send a message. Replies within 24 hours." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const bookFn = useServerFn(createMeeting);
  const msgFn = useServerFn(createContact);
  const [bookSent, setBookSent] = useState(false);
  const [msgSent, setMsgSent] = useState(false);
  const [loadingB, setLoadingB] = useState(false);
  const [loadingM, setLoadingM] = useState(false);

  async function handleBook(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setLoadingB(true);
    try {
      const res = await bookFn({
        data: {
          name: String(fd.get("name") ?? ""),
          email: String(fd.get("email") ?? ""),
          phone: String(fd.get("phone") ?? ""),
          company: String(fd.get("company") ?? ""),
          service: String(fd.get("service") ?? ""),
          preferred_date: String(fd.get("preferred_date") ?? ""),
          message: String(fd.get("message") ?? ""),
        },
      });
      if (res.ok) {
        setBookSent(true);
        toast.success("Booking received — Adnan will be in touch soon.");
      } else {
        toast.error(res.error ?? "Failed");
      }
    } catch {
      toast.error("Please check your inputs and try again.");
    } finally {
      setLoadingB(false);
    }
  }

  async function handleMessage(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setLoadingM(true);
    try {
      const res = await msgFn({
        data: {
          name: String(fd.get("name") ?? ""),
          email: String(fd.get("email") ?? ""),
          subject: String(fd.get("subject") ?? ""),
          message: String(fd.get("message") ?? ""),
        },
      });
      if (res.ok) {
        setMsgSent(true);
        toast.success("Message sent.");
      } else {
        toast.error(res.error ?? "Failed");
      }
    } catch {
      toast.error("Please check your inputs and try again.");
    } finally {
      setLoadingM(false);
    }
  }

  return (
    <div className="container mx-auto max-w-7xl px-4 py-16 md:py-24">
      <div className="max-w-3xl">
        <p className="text-sm uppercase tracking-widest text-primary mb-3">Contact</p>
        <h1 className="text-4xl md:text-6xl font-bold">
          Let's build something <span className="text-gradient">extraordinary.</span>
        </h1>
        <p className="mt-5 text-lg text-muted-foreground">
          Book a discovery call or send a direct message. I personally read and reply to every inquiry within 24 hours.
        </p>
      </div>

      <div className="mt-12 grid lg:grid-cols-3 gap-6">
        <aside className="glass rounded-3xl p-7 space-y-6">
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Direct</p>
            <a href="mailto:adnanrihan56@gmail.com" className="flex items-center gap-2 hover:text-primary">
              <Mail className="h-4 w-4" /> adnanrihan56@gmail.com
            </a>
            <a href="tel:+8801317680620" className="mt-2 flex items-center gap-2 hover:text-primary">
              <Phone className="h-4 w-4" /> +880 1317 680620
            </a>
          </div>
          <div className="rounded-2xl bg-hero-gradient p-5 text-primary-foreground">
            <p className="text-xs uppercase tracking-widest opacity-80 mb-1">Response time</p>
            <p className="text-2xl font-bold">&lt; 24 hours</p>
          </div>
          <p className="text-xs text-muted-foreground">
            Every booking and message is delivered to Adnan instantly.
          </p>
        </aside>

        {/* Booking */}
        <section className="lg:col-span-2 glass rounded-3xl p-7 md:p-9">
          <div className="flex items-center gap-2 mb-5">
            <Calendar className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-bold">Book a meeting</h2>
          </div>
          {bookSent ? (
            <SuccessBox text="Your meeting request is in. Adnan will follow up by email shortly." />
          ) : (
            <form onSubmit={handleBook} className="grid sm:grid-cols-2 gap-4">
              <Field label="Your name" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone (optional)" name="phone" />
              <Field label="Company (optional)" name="company" />
              <SelectField label="Service interested in" name="service" options={["Cinematic Direction", "AI Automation", "Growth Strategy", "All three"]} />
              <Field label="Preferred date / time" name="preferred_date" type="datetime-local" />
              <div className="sm:col-span-2">
                <TextArea label="Tell me about your project" name="message" rows={4} />
              </div>
              <button
                type="submit"
                disabled={loadingB}
                className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-full bg-hero-gradient px-7 py-3 text-sm font-semibold text-primary-foreground shadow-elegant disabled:opacity-60"
              >
                {loadingB ? "Sending..." : <>Request meeting <Send className="h-4 w-4" /></>}
              </button>
            </form>
          )}
        </section>

        {/* Quick message */}
        <section className="lg:col-span-3 glass rounded-3xl p-7 md:p-9">
          <h2 className="text-2xl font-bold mb-5">Or send a quick message</h2>
          {msgSent ? (
            <SuccessBox text="Message received. Talk soon." />
          ) : (
            <form onSubmit={handleMessage} className="grid sm:grid-cols-2 gap-4">
              <Field label="Your name" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <div className="sm:col-span-2">
                <Field label="Subject" name="subject" />
              </div>
              <div className="sm:col-span-2">
                <TextArea label="Message" name="message" rows={4} required />
              </div>
              <button
                type="submit"
                disabled={loadingM}
                className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-full bg-hero-gradient px-7 py-3 text-sm font-semibold text-primary-foreground shadow-elegant disabled:opacity-60"
              >
                {loadingM ? "Sending..." : <>Send message <Send className="h-4 w-4" /></>}
              </button>
            </form>
          )}
        </section>
      </div>
    </div>
  );
}

function SuccessBox({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3 rounded-2xl bg-primary/10 border border-primary/30 p-5">
      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
      <p className="text-sm">{text}</p>
    </div>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <label className="block">
      <span className="text-xs text-muted-foreground">{label}{required && " *"}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-1 w-full rounded-xl bg-input px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring border border-border"
      />
    </label>
  );
}

function TextArea({ label, name, rows = 3, required }: { label: string; name: string; rows?: number; required?: boolean }) {
  return (
    <label className="block">
      <span className="text-xs text-muted-foreground">{label}{required && " *"}</span>
      <textarea
        name={name}
        rows={rows}
        required={required}
        className="mt-1 w-full rounded-xl bg-input px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring border border-border resize-none"
      />
    </label>
  );
}

function SelectField({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <label className="block">
      <span className="text-xs text-muted-foreground">{label}</span>
      <select
        name={name}
        className="mt-1 w-full rounded-xl bg-input px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring border border-border"
        defaultValue=""
      >
        <option value="" disabled>Select...</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </label>
  );
}