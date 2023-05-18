import _get from "lodash/get";

import { S2ReceiveEventTypes } from "../../eventTypes";
import { getCurrentProtobufTimeStamp } from "../../../../../helpers";

async function handleSpeechEnd(
  _: any,
  { socket, getS2Dialog, getMsDictateDialog, isGoogleAsr = false, isSukiAsr = false, stopRecognitionStream }: any
): Promise<void> {
  const protobufTimeStamp = getCurrentProtobufTimeStamp();
  if (isGoogleAsr) {
    stopRecognitionStream(socket);
    return;
  }

  if (isSukiAsr) {
    const sukiAsrDialog = await getMsDictateDialog();
    sukiAsrDialog.write({
      action_request: { type: "STOP_DICTATION" },
      request_time: protobufTimeStamp
    });
    return;
  }
  const s2Dialog = await getS2Dialog();
  // If s2 connection is not present, return
  if (!s2Dialog) {
    return;
  }

  // Send AUDIO_END event to ms-s2
  s2Dialog.write({
    event: S2ReceiveEventTypes.AUDIO_END,
    request_time: protobufTimeStamp
  });
}

export default handleSpeechEnd;
