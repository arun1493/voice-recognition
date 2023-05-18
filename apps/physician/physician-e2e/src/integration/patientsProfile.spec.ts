import { getAgent, getSukiLogo } from "../support/app.po";

describe("Patients profile page", () => {
  beforeEach(() => {
    cy.login("eshei+cypress@suki.ai", "Cypress123!");
    cy.visit("/patients/profile/7");
  });

  it("should have a correct url", () => {
    cy.url().should("include", "/patients/profile");
  });

  it("should verify is logo in the screen", () => {
    getSukiLogo().should("exist");
  });

  it("should verify is Agent in the screen", () => {
    getAgent().should("exist");
  });

  it("should have Profile Minimal component", () => {
    cy.get("[data-cy=profile-minimal]").should("exist");
  });

  it("should have back icon", () => {
    cy.get("[data-cy=patient-profile-back-icon]").should("exist");
  });

  it("should have today's notes, prior notes and no start progress button", () => {
    cy.get("[data-cy=patient-profile-todays-notes]").should("exist");
    cy.get("[data-cy=patient-profile-prior-notes]").should("exist");
    cy.get("[data-cy=patient-profile-start-progress-btn]").should("not.exist");
  });
});
