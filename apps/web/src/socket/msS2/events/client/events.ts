import { ClientEmitEventTypes } from "@suki-web/suki-business";

import {
  handleAgentStateUpdate,
  handleChangeSection,
  handleCursorPosition,
  handleGetComposition,
  handleSpeechConfig,
  handleSpeechEnd,
  handleSpeechStart,
  handleSpeechTransfer,
  handleSubmitComposition,
  handleUserRequest
} from "./eventHandlers";

const AGENT_SPEECH_TRANSFER_EVENT = {
  type: ClientEmitEventTypes.SPEECH_TRANSFER,
  handler: handleSpeechTransfer
};

const AGENT_STATE_UPDATE_EVENT = {
  type: ClientEmitEventTypes.SET_AGENT_STATE,
  handler: handleAgentStateUpdate
};

const GET_COMPOSITION_OR_NOTE_REQUEST_EVENT = {
  type: ClientEmitEventTypes.GET_COMPOSITION_OR_NOTE_REQUEST,
  handler: handleGetComposition
};

const SUBMIT_COMPOSITION_REQUEST_EVENT = {
  type: ClientEmitEventTypes.SUBMIT_COMPOSITION_REQUEST,
  handler: handleSubmitComposition
};

const SPEECH_START_EVENT = {
  type: ClientEmitEventTypes.SPEECH_START,
  handler: handleSpeechStart
};

const SPEECH_CONFIG_EVENT = {
  type: ClientEmitEventTypes.SPEECH_CONFIG,
  handler: handleSpeechConfig
};

const SPEECH_END_EVENT = {
  type: ClientEmitEventTypes.SPEECH_END,
  handler: handleSpeechEnd
};

const USER_REQUEST_EVENT = {
  type: ClientEmitEventTypes.USER_REQUEST,
  handler: handleUserRequest
};

const CHANGE_REQUEST_EVENT = {
  type: ClientEmitEventTypes.CHANGE_SECTION,
  handler: handleChangeSection
};

const CURSOR_POSITION_EVENT = {
  type: ClientEmitEventTypes.CURSOR_POSITION,
  handler: handleCursorPosition
};

const CLIENT_EVENTS = [
  AGENT_SPEECH_TRANSFER_EVENT,
  AGENT_STATE_UPDATE_EVENT,
  CHANGE_REQUEST_EVENT,
  CURSOR_POSITION_EVENT,
  GET_COMPOSITION_OR_NOTE_REQUEST_EVENT,
  SPEECH_CONFIG_EVENT,
  SPEECH_END_EVENT,
  SPEECH_START_EVENT,
  SUBMIT_COMPOSITION_REQUEST_EVENT,
  USER_REQUEST_EVENT
];

export { CLIENT_EVENTS };
