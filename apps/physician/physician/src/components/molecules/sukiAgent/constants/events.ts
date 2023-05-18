import { ClientReceiveEventTypes } from "@suki-web/suki-business";

import {
  handleCompositionCreationInNotepad,
  handleCreateCompositionAcknowledgement,
  handleIntent,
  handleResourceExhaustedError,
  handleTurnOffAgent,
  handleTurnOnAgent
} from "../eventHandlers";

const AGENT_TURN_ON_EVENT = {
  type: ClientReceiveEventTypes.TURN_ON_AGENT,
  handler: handleTurnOnAgent
};

const AGENT_TURN_OFF_EVENT = {
  type: ClientReceiveEventTypes.TURN_OFF_AGENT,
  handler: handleTurnOffAgent
};

const INTENT_EVENT = {
  type: ClientReceiveEventTypes.INTENT,
  handler: handleIntent
};

const COMPOSITION_CREATED_IN_NOTEPAD_EVENT = {
  type: ClientReceiveEventTypes.COMPOSITION_CREATED_IN_NOTEPAD,
  handler: handleCompositionCreationInNotepad
};

const CREATE_COMPOSITION_ACKNOWLEDGEMENT_EVENT = {
  type: ClientReceiveEventTypes.CREATE_COMPOSITION_ACKNOWLEDGEMENT,
  handler: handleCreateCompositionAcknowledgement
};

const RESOURCE_EXHAUSTED_ERROR_EVENT = {
  type: ClientReceiveEventTypes.RESOURCE_EXHAUSTED_ERROR,
  handler: handleResourceExhaustedError
};

const EVENTS = [
  AGENT_TURN_OFF_EVENT,
  AGENT_TURN_ON_EVENT,
  COMPOSITION_CREATED_IN_NOTEPAD_EVENT,
  CREATE_COMPOSITION_ACKNOWLEDGEMENT_EVENT,
  INTENT_EVENT,
  RESOURCE_EXHAUSTED_ERROR_EVENT
];

export { EVENTS };
