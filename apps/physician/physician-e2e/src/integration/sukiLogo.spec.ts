import { getSukiLogo } from "../support/app.po";
import { getHamburgerMenu, getMainMenuItem } from "../support/mainMenu.po";

describe("Suki Logo", () => {
  beforeEach(() => cy.login("eshei+cypress@suki.ai", "Cypress123!"));

  it("should redirect to home page after click on suki logo", () => {
    getHamburgerMenu().click();
    getMainMenuItem(2).click();
    getSukiLogo().click();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/home");
    });
  });
});
