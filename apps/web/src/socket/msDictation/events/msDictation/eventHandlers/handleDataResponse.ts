import _isEmpty from "lodash/isEmpty";
import { ClientReceiveEventTypes, Process } from "@suki-web/suki-business";

import {
  _suki_pb_voice_DialogResponse_MaMNotification,
  DialogResponse
} from "../../../../../grpc/generated/suki/pb/voice/DialogResponse";

const isIntentResponse = (next: any, params: any) => {
  const { intent, socket } = params;
  if (!_isEmpty(intent)) {
    socket.emit(ClientReceiveEventTypes.INTENT, intent);
    return;
  }
  return next(params);
};

const isNotificationReponse = async (next: any, params: any) => {
  const { notification, socket } = params;
  if (!_isEmpty(notification)) {
    socket.emit(ClientReceiveEventTypes.NOTIFICATION, notification);
    return;
  }
  return next(params);
};

const isTransferToCursorResponse = async (next: any, params: any) => {
  const { transfer_to_cursor, socket } = params;
  if (!_isEmpty(transfer_to_cursor)) {
    socket.emit(ClientReceiveEventTypes.TRANSFER_TO_CURSOR, transfer_to_cursor);
    return;
  }
  return next(params);
};

const isActionResponse = async (next: any, params: any) => {
  const { action_response, socket } = params;
  if (!_isEmpty(action_response)) {
    socket.emit(ClientReceiveEventTypes.ACTION_RESPONSE, action_response);
    return;
  }
};

const MS_DICTATION_RESPONSE_PROCESS = new Process()
  .addHandler(isIntentResponse)
  .addHandler(isNotificationReponse)
  .addHandler(isTransferToCursorResponse)
  .addHandler(isActionResponse);

function handleDataResponse(msDictationResponse: DialogResponse, { socket, getMsDictationDialog }: any) {
  const { intent, notification, transfer_to_cursor, action_response } = msDictationResponse;
  MS_DICTATION_RESPONSE_PROCESS.run({
    action_response,
    getMsDictationDialog,
    intent,
    notification,
    socket,
    transfer_to_cursor
  });
}

export default handleDataResponse;
