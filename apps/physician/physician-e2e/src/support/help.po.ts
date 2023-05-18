const getHelpPage = () => cy.get("[data-cy=help-page]");
const getHelpList = () => cy.get("[data-cy=help-page-list]");

export { getHelpList, getHelpPage };
