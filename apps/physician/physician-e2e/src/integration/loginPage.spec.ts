import { getEmailLoginFormInput, getPasswordLoginFormInput } from "../support/loginPage.po";

describe("login page", () => {
  beforeEach(() => cy.visit("/login"));

  it("should be able to login with a valid email and password by pressing enter", () => {
    getEmailLoginFormInput().type("eshei+cypress@suki.ai");
    getPasswordLoginFormInput().type("Cypress123!{enter}");
    cy.url().should("contain", "home");
  });

  it("should not be able to login with an invalid email, with no '@' sign, and valid password by pressing enter", () => {
    getEmailLoginFormInput().type("eshei+cypress.com");
    getPasswordLoginFormInput().type("Cypress123!{enter}");
    cy.url().should("not.contain", "home");
  });

  it("should not be able to login with an invalid email, with no '.', and valid password by pressing enter", () => {
    getEmailLoginFormInput().type("eshei+cypress@sukicom");
    getPasswordLoginFormInput().type("Cypress123!{enter}");
    cy.url().should("not.contain", "home");
  });

  it("should not be able to login with an valid email and invalid password by pressing enter", () => {
    getEmailLoginFormInput().type("eshei+cypress@suki.ai");
    getPasswordLoginFormInput().type("Cypress{enter}");
    cy.url().should("not.contain", "home");
  });
});
