describe("suki-ui: Dialog component", () => {
  beforeEach(() => cy.visit("/iframe.html?id=dialog--primary"));

  it("should be able to show the dialog on button click", () => {
    cy.get("[data-cy=button]").click();
    cy.get("dialog").should("be.visible");
  });

  it("should be able to close the dialog from dialog close button", () => {
    cy.get("[data-cy=button]").click();
    cy.get("dialog > button:first-child").click();
    cy.get("dialog").should("not.be.visible");
  });
});
