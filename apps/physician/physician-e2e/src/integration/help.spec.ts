import { getHelpList, getHelpPage } from "../support/help.po";
import { getHeaderCloseButton, getSukiLogo } from "../support/app.po";
import { getHamburgerMenu, getMainMenuItem } from "../support/mainMenu.po";

describe("help page", () => {
  beforeEach(() => {
    cy.login("eshei+cypress@suki.ai", "Cypress123!");
    cy.visit("/help");
  });

  it("should renders the help page", () => {
    getHelpPage().should("exist");
  });

  it("should have suki badge in the screen", () => {
    getSukiLogo().should("exist");
  });

  it("should have close button", () => {
    getHeaderCloseButton().should("exist");
  });

  it("should return back in history on close button click", () => {
    cy.visit("/settings");
    getHamburgerMenu().click();
    getMainMenuItem(2).click();
    cy.url().should("include", "/help");
    getHeaderCloseButton().click();
    cy.url().should("include", "/settings");
  });

  it("should have the correct amount of help list items", () => {
    getHelpList().children().should("have.length", 4);
  });
});
