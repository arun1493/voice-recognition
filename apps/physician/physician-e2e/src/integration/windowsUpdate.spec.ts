import { getAgent, getSukiLogo } from "../support/app.po";

describe("windowsUpdate page", () => {
  beforeEach(() => cy.visit("/windows-update"));

  it("should verify elements on the screen", () => {
    getAgent().should("not.exist");
    getSukiLogo().should("exist");
    cy.get("[data-cy=windows-update-download-header]").contains("Download the");
    cy.get("[data-cy=windows-update-assistant]").contains("Suki Assistant Windows app");
    cy.get("[data-cy=windows-update-download-btn]").contains("Download");
    cy.get("[data-cy=windows-update-download-whats-new]").contains("Whatʼs new in this version?");
    cy.get("[data-cy=windows-update-version]").contains("Version:");
    cy.get("[data-cy=windows-update-date]").contains("Date:");
    cy.get("[data-cy=windows-update-release-notes]").contains("Release notes");
    cy.get("[data-cy=windows-update-you-can]").contains("With this release, you can:");
    cy.get("[data-cy=windows-update-issues]").contains("Known issues");
  });
});
