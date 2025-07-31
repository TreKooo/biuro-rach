import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "//", // <-- nazwa Twojego repo
  plugins: [react()],
});
