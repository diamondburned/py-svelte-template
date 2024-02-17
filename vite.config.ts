import { defineConfig } from "vite";
import { sveltekit } from "@sveltejs/kit/vite";

// https://github.com/vitejs/vite/issues/7385#issuecomment-1286606298
export default defineConfig({
  clearScreen: false, // fuck Vite lol
  plugins: [sveltekit()],
  server: {
    host: true,
    port: 3000,
  },
});
