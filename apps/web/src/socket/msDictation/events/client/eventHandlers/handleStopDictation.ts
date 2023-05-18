import { MsDictationReceiveEventTypes } from "../../eventTypes";
import { getCurrentProtobufTimeStamp } from "../../../../../helpers";

function handleStopDictation(payload: any, { socket, getMsDictationDialog }: any) {
  const protobufTimeStamp = getCurrentProtobufTimeStamp();
  const msDictationDialog = getMsDictationDialog();

  msDictationDialog?.write({
    action_request: { type: MsDictationReceiveEventTypes.STOP_DICTATION },
    request_time: protobufTimeStamp
  });
}

export { handleStopDictation };
