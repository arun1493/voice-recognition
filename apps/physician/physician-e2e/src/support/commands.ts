// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Chainable<Subject> {
    checkInactiveAgent(): void;
    login(email: string, password: string): void;
  }
}
//
// -- This is a parent command --
Cypress.Commands.add("checkInactiveAgent", (): void => {
  cy.get("[data-cy=suki-agent]")
    .should("be.visible")
    .should("have.css", "filter", "grayscale(1)")
    .click()
    .should("not.have.css", "filter", "grayscale(1)")
    .click()
    .should("have.css", "filter", "grayscale(1)");
});

Cypress.Commands.add("login", (email, password) => {
  cy.visit("/login");
  cy.get("[data-cy=login-form-email]").type(email);
  cy.get("[data-cy=login-form-password]").type(password);
  cy.get("[data-cy=login-form-submit-btn]").click();
  cy.get("[data-cy=suki-logo]").should("be.visible");
  cy.get("[data-cy=suki-agent]").should("be.visible");
});
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
