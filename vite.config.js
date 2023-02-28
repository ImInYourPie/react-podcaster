import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "src") },
      {
        find: "@components",
        replacement: path.resolve(__dirname, "src/components"),
      },
      { find: "@context", replacement: path.resolve(__dirname, "src/context") },
      {
        find: "@features",
        replacement: path.resolve(__dirname, "src/features"),
      },
      { find: "@hooks", replacement: path.resolve(__dirname, "src/hooks") },
      { find: "@layouts", replacement: path.resolve(__dirname, "src/layouts") },
      { find: "@libs", replacement: path.resolve(__dirname, "src/libs") },
      { find: "@pages", replacement: path.resolve(__dirname, "src/pages") },
      {
        find: "@services",
        replacement: path.resolve(__dirname, "src/services"),
      },
      { find: "@utils", replacement: path.resolve(__dirname, "src/utils") },
    ],
  },
});
