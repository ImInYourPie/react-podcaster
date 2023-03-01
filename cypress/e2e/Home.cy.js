describe("Home", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("displays the correct number of podcasts", () => {
    cy.get("#podcast-count").should("contain.text", "100 podcasts");
  });

  it("should store data on localStorage after first visit", () => {
    cy.visit("/");

    cy.window().then((win) => {
      expect(win.localStorage.length).to.eq(0);
    });

    cy.get("#podcast-list").should("exist").should("not.be.empty");

    cy.window().then((win) => {
      expect(win.localStorage.getItem("podcast-list")).to.not.eq(0);
    });
  });

  it("searches podcasts correctly", () => {
    cy.get(".podcast-name")
      .first()
      .then(($podcastName) => {
        const name = $podcastName.text().trim();

        cy.get("input[name='search']").type(name);
        cy.get("#podcast-list").should("have.length", 1);
      });
  });

  it("displays 100 podcast items correctly in podcast list", () => {
    cy.get("#podcast-list").children().should("have.length", 100);
  });
});
