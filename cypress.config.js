import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: "http://localhost:3000",
    pageLoadTimeout: 240000,
    defaultCommandTimeout: 240000,
    video: false,
    screenshots: false,
  },
});
