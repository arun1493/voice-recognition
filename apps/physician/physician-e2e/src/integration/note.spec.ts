import { getControlMenu, getFirstNoteSection, getPatientInformation } from "../support/note.po";
import { getNewNoteButton, getNoteTypesItem, getNoteTypesModal } from "../support/newNoteButton.po";

describe("Note page", () => {
  beforeEach(() => {
    cy.login("eshei+cypress@suki.ai", "Cypress123!");
    cy.request("http://localhost:3001/auth/me?email=eshei%2Bcypress%40suki.ai");
    getNewNoteButton().click();
    getNoteTypesModal().should("exist");
    getNoteTypesItem(0).click();
  });

  it("should have a correct url", () => {
    cy.url().should("contain", "note");
  });

  it("should have right position and focus", () => {
    getControlMenu().should("exist").should("be.visible");
    getPatientInformation().should("exist").should("be.visible");

    getFirstNoteSection().should("exist");
    getFirstNoteSection().find("div").should("have.focus");
  });
});
