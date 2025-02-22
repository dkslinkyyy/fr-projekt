import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  preview: {
    allowedHosts: ["fr-projekt-production.up.railway.app"],
  },
  server: {
    host: "0.0.0.0",
    port: Number(process.env.PORT) || 4173,
  },
  base: "./",

  plugins: [react()],
});
