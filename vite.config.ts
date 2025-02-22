import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: Number(process.env.PORT) || 4173,
  },
  base: "/fr-projekt",

  plugins: [react()],
});
