import _get from "lodash/get";
import { EMPTY_OBJECT } from "@suki-web/suki-business";

import { getCurrentProtobufTimeStamp } from "../../../../../helpers";
import { convertToSubSectionInfo, getViewFromContext } from "../../../helpers";

async function handleSpeechConfig(
  payload: any,
  { socket, getS2Dialog, isGoogleAsr = false, isSukiAsr = false }: any
): Promise<void> {
  if (isGoogleAsr || isSukiAsr) {
    return;
  }
  const s2Dialog = await getS2Dialog();
  // If s2 connection is not present, return
  if (!s2Dialog) {
    return;
  }

  const protobufTimeStamp = getCurrentProtobufTimeStamp();

  const { data = EMPTY_OBJECT, context = EMPTY_OBJECT } = payload;
  const { sectionId, readOnly = false } = data;
  const { compositionId, noteTypeId, patientId, problemBasedSections } = context;

  const contextView = getViewFromContext(context, sectionId, readOnly);

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
}

export default handleSpeechConfig;
