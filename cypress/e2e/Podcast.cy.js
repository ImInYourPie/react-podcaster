import fetch from "cross-fetch";

describe("Podcast", () => {
  let podcastId;

  before(async () => {
    const response = await fetch(
      "https://itunes.apple.com/us/rss/toppodcasts/limit=10/genre=1310/json"
    );
    const data = await response.json();

    podcastId = data.feed.entry[3].id.attributes["im:id"];
  });

  beforeEach(async () => {
    cy.visit(`/podcast/${podcastId}`);
  });

  it("displays the header with the episode count", () => {
    cy.get("#header").should("exist");

    cy.get("#header").then(($header) => {
      const episodeCount = parseInt(
        $header.find("#header-count").text().trim(),
        10
      );
      expect(episodeCount).to.be.a("number").not.eq(0);
    });
  });

  it("displays aside with podcast info", () => {
    cy.get("#aside").should("exist");
  });

  it("clicking on one episode redirects to episode details view", () => {
    cy.get(".episode-title").first().click();

    cy.url().should("include", "/episode/");
  });

  it("clicking on the app 'logo' redirects to the main view", () => {
    cy.get("#brand").first().click();

    cy.url().should("eq", Cypress.config().baseUrl + "/");
  });
});
