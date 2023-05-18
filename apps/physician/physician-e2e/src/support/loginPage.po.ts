const getEmailLoginFormInput = () => cy.get("[data-cy=login-form-email]").should("be.visible");
const getPasswordLoginFormInput = () => cy.get("[data-cy=login-form-password]").should("be.visible");

export { getEmailLoginFormInput, getPasswordLoginFormInput };
