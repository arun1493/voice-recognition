import { getSukiLogo } from "../support/app.po";
import { getHeaderBackButton, getLoader } from "../support/app.po";
import { getHamburgerMenu, getMainMenuItem } from "../support/mainMenu.po";

describe("Unfinished notes", () => {
  beforeEach(() => {
    cy.login("eshei+cypress@suki.ai", "Cypress123!");
    getHamburgerMenu().click();
    getMainMenuItem(1).click();
  });

  it("should have a correct url", () => {
    cy.url().should("include", "/unfinished-notes");
  });

  it("should verify is logo in the screen", () => {
    getSukiLogo().should("exist");
  });

  it("should have back button", () => {
    getHeaderBackButton().should("exist");
  });

  it("should return back home", () => {
    getHeaderBackButton().click();
    cy.url().should("include", "/home");
  });

  it("should have loader", () => {
    getLoader().should("exist");
  });
});
