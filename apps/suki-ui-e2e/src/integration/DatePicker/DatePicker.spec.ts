describe("suki-ui: DatePicker component", () => {
  beforeEach(() => cy.visit("/iframe.html?id=datepicker--primary"));

  it("should render the component", () => {
    cy.get("[data-cy=date-picker]").should("be.visible");
  });

  it("should have a visible input field", () => {
    cy.get("[data-cy=date-picker-input-control").should("be.visible");
  });

  it("should toggle picker modal on trigger clicks", () => {
    cy.get("[data-cy=date-picker-modal]").should("not.exist");
    cy.get("[data-cy=date-picker-trigger]").click();
    cy.get("[data-cy=date-picker-modal]").should("exist");
    cy.get("[data-cy=date-picker-trigger]").click();
    cy.get("[data-cy=date-picker-modal]").should("not.exist");
  });
});
