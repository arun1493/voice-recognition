const getNewNoteButton = () => cy.get("[data-cy=new-note-button]");
const getNoteTypesModal = () => cy.get("[data-cy=which-note-type-modal]");
const getNoteTypesItem = (i: number) => cy.get(`[data-cy=which-note-type-item-${i}]`);

export { getNewNoteButton, getNoteTypesModal, getNoteTypesItem };
