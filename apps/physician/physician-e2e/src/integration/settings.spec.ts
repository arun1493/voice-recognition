import {
  getHeaderAddButton,
  getHeaderCloseButton,
  getNoteTypeItem,
  getScriptItem,
  getSukiLogo
} from "../support/app.po";
import { getHamburgerMenu, getMainMenuItem } from "../support/mainMenu.po";

describe("Settings", () => {
  beforeEach(() => {
    cy.login("eshei+cypress@suki.ai", "Cypress123!");
    getHamburgerMenu().click();
    getMainMenuItem(1).click();
  });

  it("should have a correct url", () => {
    cy.url().should("include", "/settings");
  });

  it("should verify is logo in the screen", () => {
    getSukiLogo().should("exist");
  });

  it("should have close button", () => {
    getHeaderCloseButton().should("exist");
  });

  it("should return back home", () => {
    getHeaderCloseButton().click();
    cy.url().should("include", "/home");
  });

  it("close button from scripts adding page should redirect to scripts page", () => {
    cy.visit("/settings/scripts");
    getHeaderAddButton().click();
    getHeaderCloseButton().click();
    cy.url().should("include", "/settings/scripts");
  });

  it("close button from note type adding page should redirect to note type page", () => {
    cy.visit("/settings/note-types");
    getHeaderAddButton().click();
    getHeaderCloseButton().click();
    cy.url().should("include", "/settings/note-types");
  });

  it("close button from scripts details page should redirect to scripts page", () => {
    cy.visit("/settings/scripts");
    getScriptItem(1).click();
    getHeaderCloseButton().click();
    cy.url().should("include", "/settings/scripts");
  });

  it("close button from note type details page should redirect to note type page", () => {
    cy.visit("/settings/note-types");
    getNoteTypeItem(1).click();
    getHeaderCloseButton().click();
    cy.url().should("include", "/settings/note-types");
  });

  it("close button from settings page should redirect to home page", () => {
    cy.visit("/settings");
    getHeaderCloseButton().click();
    cy.url().should("include", "/home");
  });
});
