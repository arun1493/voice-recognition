import { getDoctorName, getHamburgerMenu, getLogoutItem, getMainMenu, getMainMenuItem } from "../support/mainMenu.po";

describe("hamburger menu", () => {
  beforeEach(() => {
    cy.login("eshei+cypress@suki.ai", "Cypress123!");
    getHamburgerMenu().click();
  });

  it("should show the main menu after clicking on the navigation menu icon", () => {
    getMainMenu().should("exist");
  });

  it("should disappear if the Hamburger Menu is clicked twice", () => {
    getHamburgerMenu().click();
    getMainMenu().should("not.exist");
  });

  describe("main menu", () => {
    const ITEM_COUNT = 4;
    it("should have the correct amount of items", () => {
      getMainMenu().children().should("have.length", ITEM_COUNT);
    });

    it("should show Unfinished Notes as the first menu item and redirects to unfinished notes page", () => {
      const unfinishedNotesItem = getMainMenuItem(0);
      unfinishedNotesItem.contains("Unfinished Notes");
      unfinishedNotesItem.click();
      cy.url().should("include", "/unfinished-notes");
    });

    it("should show Settings as the second menu item and redirects to settings page", () => {
      const settingsItem = getMainMenuItem(1);
      settingsItem.contains("Settings");
      settingsItem.click();
      cy.url().should("include", "/settings");
    });

    it("should show Help as the third menu item and rediects to help page", () => {
      const helpItem = getMainMenuItem(2);
      helpItem.contains("Help");
      helpItem.click();
      cy.url().should("include", "/help");
    });

    it("should show the logout item", () => {
      getLogoutItem().should("exist");
    });
  });
});
