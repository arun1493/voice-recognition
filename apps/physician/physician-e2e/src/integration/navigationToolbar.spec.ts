import { getPatientsListDropdown, getSearchPatientsInHeader } from "../support/patientsSearch";
import { getNavigationToolbar, getNavigationToolbarSearch } from "../support/navigationToolbar.po";

describe("navigation toolbar", () => {
  beforeEach(() => {
    cy.login("eshei+cypress@suki.ai", "Cypress123!");
  });

  it("should have the correct amount of items", () => {
    const ITEM_COUNT = 3;
    getNavigationToolbar().children().should("have.length", ITEM_COUNT);
  });

  it("should show search patients modal with results", () => {
    getNavigationToolbarSearch().click();
    getSearchPatientsInHeader().should("exist");
    getSearchPatientsInHeader().type("Suna");
    getPatientsListDropdown().should("exist");
  });
});
