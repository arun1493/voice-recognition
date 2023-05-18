const getSeeAnExample = () => cy.get("[data-cy=help-page-see-an-example]").should("be.visible");

export { getSeeAnExample };
