import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl:
      process.env.NODE_ENV === "dev"
        ? "http://localhost:3000"
        : "http://localhost:3001",
    pageLoadTimeout: 240000,
    defaultCommandTimeout: 240000,
    video: false,
    screenshots: false,
  },
});
