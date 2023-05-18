import { getAgent, getSukiLogo } from "../support/app.po";

const key = "data-cy=register-success";

describe("registerSuccess page", () => {
  beforeEach(() => cy.visit("/register/success"));

  it("should verify elements on the screen", () => {
    getAgent().should("not.exist");
    getSukiLogo().should("exist");

    cy.get(`[${key}-heading1]`).contains("Congratulations!");
    cy.get(`[${key}-heading2]`).contains(
      "Your account has been successfully created. You’re ready to start using Suki Assistant to save time on administrative tasks."
    );
    cy.get(`[${key}-heading3]`).contains("Start using Suki now on:");

    cy.get(`[${key}-section1-heading]`).contains("Mobile");
    cy.get(`[${key}-section1-description]`).contains("Use anywhere with an internet connection.");
    cy.get(`[${key}-section1-button1]`).contains("iOS");
    cy.get(`[${key}-section1-button2]`).contains("Android");

    cy.get(`[${key}-section2-heading]`).contains("Web");
    cy.get(`[${key}-section2-description]`).contains("Full Assistant experience in a larger form factor.");
    cy.get(`[${key}-section2-button]`).contains("Web");

    cy.get(`[${key}-section3-heading]`).contains("Windows");
    cy.get(`[${key}-section3-description]`).contains("Dictation in any application.");
    cy.get(`[${key}-section3-button]`).contains("Windows");

    cy.get(`[${key}-footer]`).contains(
      "The Suki name and logo are trademarks of Suki AI, Inc. All other trademarks are the property of their respective owners. © 2023 Suki AI, Inc."
    );
  });
});
