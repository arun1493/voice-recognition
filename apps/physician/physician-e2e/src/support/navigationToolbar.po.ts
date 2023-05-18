const getNavigationToolbar = () => cy.get("[data-cy=navigation-toolbar]");
const getNavigationToolbarSearch = () => cy.get("[data-cy=navigation-toolbar-search]");

export { getNavigationToolbar, getNavigationToolbarSearch };
