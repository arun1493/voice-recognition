const getEmrIntegrationToolbar = () => cy.get("[data-cy=emr-connection-toolbar]");

const getReduxState = () => cy.window().its("store").invoke("getState");

export { getEmrIntegrationToolbar, getReduxState };
