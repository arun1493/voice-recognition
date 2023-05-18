describe("suki-ui: primary Button component", () => {
  before(() => cy.visit("/iframe.html?id=button--primary"));

  it("should render the primary component", () => {
    cy.get("[data-cy=button]").should("be.visible");
  });

  it("should render the correct text", () => {
    cy.get("[data-cy=button]").should("have.text", "Primary");
  });
});
describe("suki-ui: secondary Button component", () => {
  before(() => cy.visit("/iframe.html?id=button--not-primary"));

  it("should render the secondary component", () => {
    cy.get("[data-cy=button]").should("be.visible");
  });
  it("should render the correct text", () => {
    cy.get("[data-cy=button]").should("have.text", "Not Primary");
  });
});
