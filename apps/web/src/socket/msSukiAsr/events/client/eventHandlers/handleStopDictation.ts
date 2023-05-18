import { MsSukiAsrReceiveEventTypes } from "../../eventTypes";
import { getCurrentProtobufTimeStamp } from "apps/web/src/helpers";

function handleStopDictation(payload: any, { socket, getMsSukiAsrDialog }: any) {
  const protobufTimeStamp = getCurrentProtobufTimeStamp();
  const msSukiAsrDialog = getMsSukiAsrDialog();

  msSukiAsrDialog?.write({
    action_request: { type: MsSukiAsrReceiveEventTypes.STOP_DICTATION },
    request_time: protobufTimeStamp
  });
}

export { handleStopDictation };
