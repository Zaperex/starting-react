import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/starting-react/", // This is the base url of the website
  plugins: [react()],
});
