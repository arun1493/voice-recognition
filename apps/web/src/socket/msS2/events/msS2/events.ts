import { S2EmitEventTypes } from "../eventTypes";
import { handleDataResponse } from "./eventHandlers";

const S2_DATA_RESPONSE_EVENT = {
  handler: handleDataResponse,
  type: S2EmitEventTypes.DATA_RESPONSE
};

const MS_S2_EVENTS = [S2_DATA_RESPONSE_EVENT];

export { MS_S2_EVENTS };
