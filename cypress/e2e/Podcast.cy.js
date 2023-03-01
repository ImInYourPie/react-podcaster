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

  it("should store data on localStorage after first visit", () => {
    cy.window().then((win) => {
      expect(win.localStorage.length).to.eq(0);
    });

    cy.get("#podcast-list").should("exist").should("not.be.empty");

    cy.window().then((win) => {
      expect(win.localStorage.getItem(`podcast-${podcastId}`)).to.not.eq(0);
    });
  });

  //   it("displays the table with the episodes", () => {
  //     cy.get(".episode-table").should("exist");
  //     cy.get(".episode-table .episode-title").should(
  //       "have.length.greaterThan",
  //       0
  //     );
  //   });

  //   it("displays the left section with podcast information", () => {
  //     cy.get(".left-bar").should("exist");
  //   });

  //   it("click on one episode redirects to episode details view", () => {
  //     cy.get(".episode-title").first().click();

  //     cy.url().should("include", "/episode/");
  //   });

  //   it("click on the app 'logo' redirects to the main view", () => {
  //     cy.get(".logo").first().click();

  //     cy.url().should("eq", Cypress.config().baseUrl + "/");
  //   });
});
