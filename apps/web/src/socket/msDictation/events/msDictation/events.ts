import { handleDataResponse } from "./eventHandlers";
import { MsDictationEmitEventTypes } from "../eventTypes";

const INTENT_RESPONSE_EVENT = {
  type: MsDictationEmitEventTypes.DATA,
  handler: handleDataResponse
};

const MS_DICTATION_EVENTS = [INTENT_RESPONSE_EVENT];

export { MS_DICTATION_EVENTS };
