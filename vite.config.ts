import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/biuro-rach/", // <-- nazwa Twojego repo
  plugins: [react()],
});
