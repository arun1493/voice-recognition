const getControlMenu = () => cy.get("[data-cy=control-menu]");
const getFirstNoteSection = () => cy.get(`[data-cy=composition-section-index-0]`);
const getPatientInformation = () => cy.get("[data-cy=patient-information]");

const getNoteBackButton = () => cy.get("[data-cy=note-back-button]");

export { getControlMenu, getFirstNoteSection, getNoteBackButton, getPatientInformation };
