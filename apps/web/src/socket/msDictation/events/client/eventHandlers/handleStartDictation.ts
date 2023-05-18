import { AUDIO_ENCODING_TYPE, AUDIO_SAMPLE_RATE_HERTZ } from "@suki-web/suki-business";

import { MsDictationReceiveEventTypes } from "../../eventTypes";
import { getCurrentProtobufTimeStamp } from "../../../../../helpers";

function handleStartDictation(payload: any, { socket, getMsDictationDialog }: any) {
  const protobufTimeStamp = getCurrentProtobufTimeStamp();
  const msDictationDialog = getMsDictationDialog();

  msDictationDialog?.write({
    audio_encoding: {
      type: AUDIO_ENCODING_TYPE,
      sample_rate_hertz: AUDIO_SAMPLE_RATE_HERTZ
    },
    request_time: protobufTimeStamp
  });

  msDictationDialog?.write({
    action_request: { type: MsDictationReceiveEventTypes.START_DICTATION },
    request_time: protobufTimeStamp
  });
}

export { handleStartDictation };
