import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Ustaw base na nazwę repo!
export default defineConfig({
  base: "/biuro-rach/",
  plugins: [react()],
});
