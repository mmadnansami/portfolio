// Vercel-only Vite config. Does NOT use @lovable.dev/vite-tanstack-config
// (which is Cloudflare-Workers-locked). This config targets Vercel's
// serverless runtime via TanStack Start's built-in Vercel preset.
//
// Vercel runs:   vite build --config vite.config.vercel.ts
// Output dir:    .vercel/output   (Vercel Build Output API v3)
import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import path from "node:path";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "@tanstack/react-router", "@tanstack/react-start"],
  },
  define: {
    // Expose VITE_ vars for client build even if Vercel only sets non-prefixed ones.
    "import.meta.env.VITE_SUPABASE_URL": JSON.stringify(
      process.env.VITE_SUPABASE_URL ?? process.env.SUPABASE_URL ?? ""
    ),
    "import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY": JSON.stringify(
      process.env.VITE_SUPABASE_PUBLISHABLE_KEY ?? process.env.SUPABASE_PUBLISHABLE_KEY ?? ""
    ),
    "import.meta.env.VITE_SUPABASE_PROJECT_ID": JSON.stringify(
      process.env.VITE_SUPABASE_PROJECT_ID ?? process.env.SUPABASE_PROJECT_ID ?? ""
    ),
  },
  plugins: [
    tsConfigPaths({ projects: ["./tsconfig.json"] }),
    tailwindcss(),
    tanstackStart({
      customViteReactPlugin: true,
    }),
    viteReact(),
  ],
});
