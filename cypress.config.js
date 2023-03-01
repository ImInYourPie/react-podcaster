import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl:
      process.env.NODE_ENV === "dev"
        ? "http://localhost:3000"
        : "http://localhost:3001",
    pageLoadTimeout: 60000,
    defaultCommandTimeout: 60000,
    video: false,
    screenshots: false,
  },
});
