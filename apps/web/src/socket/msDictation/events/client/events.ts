import { WindowsEmitEventTypes } from "@suki-web/suki-business";

import {
  handleCreateNewSession,
  handleSpeechTransfer,
  handleStartDictation,
  handleStopDictation,
  handleTerminateCurrentSession,
  handleUpdateAccessToken
} from "./eventHandlers";

const START_DICTATION_EVENT = {
  type: WindowsEmitEventTypes.START_DICTATION,
  handler: handleStartDictation
};

const STOP_DICTATION_EVENT = {
  type: WindowsEmitEventTypes.STOP_DICTATION,
  handler: handleStopDictation
};

const SPEECH_TRANSFER_EVENT = {
  type: WindowsEmitEventTypes.SPEECH_TRANSFER,
  handler: handleSpeechTransfer
};

const CREATE_SESSION_EVENT = {
  type: WindowsEmitEventTypes.CREATE_NEW_SESSION,
  handler: handleCreateNewSession
};

const TERMINATE_SESSION_EVENT = {
  type: WindowsEmitEventTypes.TERMINATE_SESSION,
  handler: handleTerminateCurrentSession
};

const UPDATE_ACCESS_TOKEN_EVENT = {
  type: WindowsEmitEventTypes.UPDATE_ACCESS_TOKEN,
  handler: handleUpdateAccessToken
};

const CLIENT_EVENTS = [
  CREATE_SESSION_EVENT,
  START_DICTATION_EVENT,
  STOP_DICTATION_EVENT,
  SPEECH_TRANSFER_EVENT,
  TERMINATE_SESSION_EVENT,
  UPDATE_ACCESS_TOKEN_EVENT
];

export { CLIENT_EVENTS };
