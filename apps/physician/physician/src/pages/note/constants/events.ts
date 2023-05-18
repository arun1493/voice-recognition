import { ClientReceiveEventTypes } from "@suki-web/suki-business";

import {
  handleAddSectionResponse,
  handleCompositionOrNoteResponse,
  handleCompositionUpdatedResponse,
  handleCopyForwardSection,
  handleInsertScriptResponse,
  handleNoteSubmissionResponse,
  handleS2ErrorsInNote,
  handleScriptChangeSection,
  handleSectionResponseType,
  handleUndo,
  handleUndoLastUpdate,
  handleUpdateSection
} from "../eventHandlers";

const COMPOSITION_OR_NOTE_RESPONSE_EVENT = {
  type: ClientReceiveEventTypes.COMPOSITION_OR_NOTE_RESPONSE,
  handler: handleCompositionOrNoteResponse
};

const COMPOSITION_UPDATED_EVENT = {
  type: ClientReceiveEventTypes.COMPOSITION_UPDATED,
  handler: handleCompositionUpdatedResponse
};

const UNDO_EVENT = {
  type: ClientReceiveEventTypes.UNDO,
  handler: handleUndo
};

const SECTION_RESPONSE_TYPE_EVENT = {
  type: ClientReceiveEventTypes.SECTION_RESPONSE_TYPE,
  handler: handleSectionResponseType
};

const INSERT_SCRIPT_RESPONSE_EVENT = {
  type: ClientReceiveEventTypes.SCRIPT_INSERT_SUCCESS,
  handler: handleInsertScriptResponse
};

const SECTION_ADD_RESPONSE_EVENT = {
  type: ClientReceiveEventTypes.SECTION_ADD_RESPONSE,
  handler: handleAddSectionResponse
};

const S2_RESPONSE_ERROR_EVENT = {
  type: ClientReceiveEventTypes.S2_ERROR,
  handler: handleS2ErrorsInNote
};

const SECTION_UPDATE_EVENT = {
  type: ClientReceiveEventTypes.SECTION_UPDATE,
  handler: handleUpdateSection
};

const SCRIPT_CHANGE_SECTION = {
  type: ClientReceiveEventTypes.SCRIPT_CHANGE_SECTION,
  handler: handleScriptChangeSection
};

const COPY_FORWARD_SECTION_EVENT = {
  type: ClientReceiveEventTypes.COPY_FORWARD_SECTION,
  handler: handleCopyForwardSection
};

const SERVER_SUBMIT_COMPOSITION_RESPONSE_EVENT = {
  type: ClientReceiveEventTypes.SERVER_SUBMIT_COMPOSITION_RESPONSE,
  handler: handleNoteSubmissionResponse
};

const UNDO_LAST_UPDATE_EVENT = {
  type: ClientReceiveEventTypes.UNDO_LAST_UPDATE,
  handler: handleUndoLastUpdate
};

const EVENTS = [
  COMPOSITION_OR_NOTE_RESPONSE_EVENT,
  COMPOSITION_UPDATED_EVENT,
  COPY_FORWARD_SECTION_EVENT,
  INSERT_SCRIPT_RESPONSE_EVENT,
  S2_RESPONSE_ERROR_EVENT,
  SCRIPT_CHANGE_SECTION,
  SECTION_ADD_RESPONSE_EVENT,
  SECTION_RESPONSE_TYPE_EVENT,
  SECTION_UPDATE_EVENT,
  SERVER_SUBMIT_COMPOSITION_RESPONSE_EVENT,
  UNDO_EVENT,
  UNDO_LAST_UPDATE_EVENT
];

export { EVENTS };
