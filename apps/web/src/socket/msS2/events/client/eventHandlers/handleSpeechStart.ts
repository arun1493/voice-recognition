import _get from "lodash/get";
import _includes from "lodash/includes";
import { AUDIO_ENCODING_TYPE, AUDIO_SAMPLE_RATE_HERTZ, EMPTY_OBJECT, Paths } from "@suki-web/suki-business";

import { S2ReceiveEventTypes } from "../../eventTypes";
import { getCurrentProtobufTimeStamp } from "../../../../../helpers";
import { convertToSubSectionInfo, getViewFromContext } from "../../../helpers";

async function handleSpeechStart(
  payload: any,
  {
    socket,
    getS2Dialog,
    isGoogleAsr = false,
    isSukiAsr = false,
    getMsDictateDialog,
    startRecognitionStream,
    isMsDictateDialogInitialized = false
  }: any
): Promise<void> {
  const protobufTimeStamp = getCurrentProtobufTimeStamp();

  if (isGoogleAsr) {
    startRecognitionStream(socket);
    return;
  }

  if (isSukiAsr) {
    const sukiAsrDialog = await getMsDictateDialog();

    if (isMsDictateDialogInitialized) {
      sukiAsrDialog.write({
        action_request: { type: "START_DICTATION" },
        request_time: protobufTimeStamp
      });
    }

    sukiAsrDialog.write({
      audio_encoding: {
        type: AUDIO_ENCODING_TYPE,
        sample_rate_hertz: AUDIO_SAMPLE_RATE_HERTZ
      },
      request_time: protobufTimeStamp
    });

    return;
  }

  const s2Dialog = await getS2Dialog();
  // If s2 connection is not present, return
  if (!s2Dialog) {
    return;
  }

  // Send AUDIO_START event to ms-s2 to enable audio processing
  s2Dialog.write({
    event: S2ReceiveEventTypes.AUDIO_START,
    request_time: protobufTimeStamp
  });

  // Set audio configurations like encodingType and sampleRate
  const { data = EMPTY_OBJECT, context = EMPTY_OBJECT } = payload;
  const { audioStreamId } = data;
  s2Dialog.write({
    audio_info: {
      encoding: {
        type: AUDIO_ENCODING_TYPE,
        sample_rate_hertz: AUDIO_SAMPLE_RATE_HERTZ
      },
      audio_stream_id: audioStreamId,
      audio_collection_start_time: protobufTimeStamp
    },
    request_time: protobufTimeStamp
  });

  const { location } = context;
  const { compositionId, patientId, noteTypeId, problemBasedSections, sectionId } = context;

  if (!_includes(location?.pathname, Paths.Note)) {
    const contextView = getViewFromContext(context);

    s2Dialog.write({
      ui_context: {
        composition_id: compositionId,
        notetype_id: noteTypeId,
        organization_id: socket?.data?.organizationId,
        patient_id: patientId,
        section_id: sectionId,
        session_id: socket?.data?.sessionToken,
        subsections: convertToSubSectionInfo(problemBasedSections),
        ui_context_time: protobufTimeStamp,
        user_agent: socket?.data?.userAgent,
        user_id: socket?.data?.userId,
        view: contextView
      },
      request_time: protobufTimeStamp
    });
  } else {
    const contextView = getViewFromContext(context, sectionId);

    s2Dialog.write({
      ui_context: {
        composition_id: compositionId,
        organization_id: socket?.data?.organizationId,
        patient_id: patientId,
        section_id: sectionId,
        session_id: socket?.data?.sessionToken,
        subsections: convertToSubSectionInfo(problemBasedSections),
        ui_context_time: protobufTimeStamp,
        user_agent: socket?.data?.userAgent,
        user_id: socket?.data?.userId,
        view: contextView
      },
      request_time: protobufTimeStamp
    });
  }
}

export default handleSpeechStart;
