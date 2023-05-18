import { getNoteBackButton } from "../support/note.po";
import { getNewNoteButton, getNoteTypesItem, getNoteTypesModal } from "../support/newNoteButton.po";

describe("New Note button", () => {
  beforeEach(() => cy.login("eshei+cypress@suki.ai", "Cypress123!"));

  it("should exist on home page", () => {
    cy.visit("/home");
    getNewNoteButton().should("exist");
  });

  it("should exist on help page", () => {
    cy.visit("/help");
    getNewNoteButton().should("exist");
  });

  it("should exist on patient schedule page", () => {
    cy.visit("/patients/schedule");
    getNewNoteButton().should("exist");
  });

  it("should exist on patient list page", () => {
    cy.visit("/patients/list");
    getNewNoteButton().should("exist");
  });

  it("should exist on settings page", () => {
    cy.visit("/settings");
    getNewNoteButton().should("exist");
  });

  it("should exist on note-types settings page", () => {
    cy.visit("/settings/note-types");
    getNewNoteButton().should("exist");
  });

  it("should exist on scripts settings page", () => {
    cy.visit("/settings/scripts");
    getNewNoteButton().should("exist");
  });

  it("should exist on unfinished-notes page", () => {
    cy.visit("/unfinished-notes");
    getNewNoteButton().should("exist");
  });

  it("should not exist on garbage route", () => {
    cy.visit("/invalid");
    getNewNoteButton().should("not.exist");
  });

  it("should show the which type modal after clicking on the new note button", () => {
    getNoteTypesModal().should("not.exist");
    getNewNoteButton().click();
    setTimeout(() => {
      getNoteTypesModal().should("exist");
    }, 4000);
  });

  it("should go back in history on clicking back button of newly opened note", () => {
    cy.visit("/settings");
    getNewNoteButton().click();
    setTimeout(() => {
      getNoteTypesModal().should("exist");
      getNoteTypesItem(0).click();
      getNoteBackButton().click();
      cy.url().should("include", "/settings");
    }, 4000);
  });
});
