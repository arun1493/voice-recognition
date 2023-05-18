import { handleDataResponse } from "./eventHandlers";
import { MsSukiAsrEmitEventTypes } from "../eventTypes";

const INTENT_RESPONSE_EVENT = {
  type: MsSukiAsrEmitEventTypes.DATA,
  handler: handleDataResponse
};

const MS_SUKI_ASR_EVENTS = [INTENT_RESPONSE_EVENT];

export { MS_SUKI_ASR_EVENTS };
