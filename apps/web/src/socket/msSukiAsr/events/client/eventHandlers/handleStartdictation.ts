import { AUDIO_ENCODING_TYPE, AUDIO_SAMPLE_RATE_HERTZ } from "@suki-web/suki-business";

import { MsSukiAsrReceiveEventTypes } from "../../eventTypes";
import { getCurrentProtobufTimeStamp } from "apps/web/src/helpers";

function handleStartDictation(payload: any, { socket, getMsSukiAsrDialog }: any) {
  const protobufTimeStamp = getCurrentProtobufTimeStamp();
  const msSukiAsrDialog = getMsSukiAsrDialog();

  msSukiAsrDialog?.write({
    audio_encoding: {
      type: AUDIO_ENCODING_TYPE,
      sample_rate_hertz: AUDIO_SAMPLE_RATE_HERTZ
    },
    request_time: protobufTimeStamp
  });

  msSukiAsrDialog?.write({
    action_request: { type: MsSukiAsrReceiveEventTypes.START_DICTATION },
    request_time: protobufTimeStamp
  });
}

export { handleStartDictation };
