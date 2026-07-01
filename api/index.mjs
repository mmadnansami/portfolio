// Vercel Serverless Function entry that adapts the TanStack Start SSR
// handler (Web Fetch API) to Vercel's Node request/response objects.
import server from "../dist/server/server.js";

export const config = { runtime: "nodejs20.x" };

export default async function handler(req, res) {
  try {
    const protocol = req.headers["x-forwarded-proto"] ?? "https";
    const host = req.headers["x-forwarded-host"] ?? req.headers.host;
    const url = `${protocol}://${host}${req.url}`;

    const headers = new Headers();
    for (const [k, v] of Object.entries(req.headers)) {
      if (v == null) continue;
      if (Array.isArray(v)) for (const item of v) headers.append(k, item);
      else headers.set(k, String(v));
    }

    const method = req.method ?? "GET";
    const hasBody = method !== "GET" && method !== "HEAD";

    const request = new Request(url, {
      method,
      headers,
      body: hasBody ? req : undefined,
      duplex: hasBody ? "half" : undefined,
    });

    const response = await server.fetch(request, process.env, {});

    res.statusCode = response.status;
    response.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });

    if (!response.body) {
      res.end();
      return;
    }

    const reader = response.body.getReader();
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      res.write(Buffer.from(value));
    }
    res.end();
  } catch (err) {
    console.error("[vercel-ssr]", err);
    res.statusCode = 500;
    res.setHeader("content-type", "text/plain; charset=utf-8");
    res.end("Internal Server Error");
  }
}
