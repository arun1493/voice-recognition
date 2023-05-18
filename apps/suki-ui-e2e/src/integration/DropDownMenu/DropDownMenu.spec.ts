describe("suki-ui: DropDownMenu component", () => {
  beforeEach(() => cy.visit("/iframe.html?id=dropdownmenu--primary"));

  it("should render the component", () => {
    cy.get("[data-cy=drop-down-menu-list-item]").should("be.visible");
  });

  it("should render the correct text", () => {
    cy.get("[data-cy=drop-down-menu-list-item]").should("have.text", "Primary");
  });

  it("should render the correct text after being clicked", () => {
    cy.get("[data-cy=drop-down-menu-list-item]").click();
    cy.get("[data-cy=drop-down-text-container]").should("have.text", "You have clicked the drop down menu list item!");
  });
});
