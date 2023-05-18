const getSearchPatientsInHeader = () => cy.get("[data-cy=search-patients-in-header]");
const getPatientsListDropdown = () => cy.get("[data-cy=patients-list-dropdown]");

export { getPatientsListDropdown, getSearchPatientsInHeader };
