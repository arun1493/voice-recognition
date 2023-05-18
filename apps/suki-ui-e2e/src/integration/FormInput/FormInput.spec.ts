describe("suki-ui: FormInput component", () => {
  beforeEach(() => cy.visit("/iframe.html?id=forminput--primary"));

  it("should render the component", () => {
    cy.get("[data-cy=form-input]").should("be.visible");
  });

  it("should render inputted text to the screen", () => {
    cy.get("[data-cy=form-input]").type("This is a test{enter}");
    cy.get("[data-cy=form-input-text-container]").should("have.text", "Inputted Text: This is a test");
  });
});
