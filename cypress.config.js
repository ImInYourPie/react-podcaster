import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: "http://localhost:3000",
    pageLoadTimeout: 480000,
    defaultCommandTimeout: 480000,
    video: false,
    screenshots: false,
  },
});
