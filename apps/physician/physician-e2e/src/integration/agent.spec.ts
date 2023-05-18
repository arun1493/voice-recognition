import { getAgent } from "../support/app.po";

describe("agent routes", () => {
  it("should not display the agent on the login page", () => {
    cy.visit("/login");
    getAgent().should("not.exist");
  });

  it("should not display the agent on the register success page", () => {
    cy.login("eshei+cypress@suki.ai", "Cypress123!");
    cy.visit("/register/success");
    getAgent().should("not.exist");
  });

  it("should not display the agent on the forgot password page", () => {
    cy.login("eshei+cypress@suki.ai", "Cypress123!");
    cy.visit("/forgot-password");
    getAgent().should("not.exist");
  });

  it("should not display the agent on the windows-update page", () => {
    cy.login("eshei+cypress@suki.ai", "Cypress123!");
    cy.visit("/windows-update");
    getAgent().should("not.exist");
  });
});
