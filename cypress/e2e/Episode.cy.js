import fetch from "cross-fetch";

describe("Episode", () => {
  let podcastId;
  let episodeId;

  before(async () => {
    const response = await fetch(
      "https://itunes.apple.com/us/rss/toppodcasts/limit=10/genre=1310/json"
    );
    const data = await response.json();

    podcastId = data.feed.entry[0].id.attributes["im:id"];

    episodeId = 1;
  });

  beforeEach(async () => {
    cy.visit(`/podcast/${podcastId}/episode/${episodeId}`);
  });

  it("displays the title of the episode", () => {
    cy.get("#episode-title").should("exist");
  });

  it("displays the description of the episode", () => {
    cy.get("#episode-description").should("exist");
  });

  it("displays the audio player", () => {
    cy.get("#player").should("exist");
  });

  it("displays the left section with podcast information", () => {
    cy.get("#aside").should("exist");
    cy.get("#aside-podcast-title").should("exist");
  });

  it("click on one podcast title on the left bar redirects to podcast details view", () => {
    cy.get("#aside-podcast-title").first().click();
    cy.url().should("eq", Cypress.config().baseUrl + "/podcast/" + podcastId);
  });

  it("click on one podcast author on the left bar redirects to podcast details view", () => {
    cy.get("#aside-podcast-author").first().click();
    cy.url().should("eq", Cypress.config().baseUrl + "/podcast/" + podcastId);
  });

  it("click on the app brand redirects to home", () => {
    cy.get("#brand").first().click();
    cy.url().should("eq", Cypress.config().baseUrl + "/");
  });
});
