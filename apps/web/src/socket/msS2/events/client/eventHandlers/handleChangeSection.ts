import { EMPTY_OBJECT } from "@suki-web/suki-business";

import { RequestTypes } from "../requestType";
import { convertToProtobufTimestamp } from "../../../../../helpers";
import { convertToSubSectionInfo, getViewFromContext } from "../../../helpers";

async function handleChangeSection(payload: any, { socket, getS2Dialog }: any): Promise<void> {
  const s2Dialog = await getS2Dialog();
  // If s2 connection is not present, return
  if (!s2Dialog) {
    return;
  }

  const { data, context = EMPTY_OBJECT } = payload;
  const currentEpochTimeStampInMilliSeconds = new Date().getTime();
  const protobufTimeStamp = convertToProtobufTimestamp(currentEpochTimeStampInMilliSeconds);

  const { sectionId } = data;
  const { compositionId, noteTypeId, patientId, problemBasedSections } = context;

  const contextView = getViewFromContext(context, sectionId);

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

  s2Dialog.write({
    user_request: {
      request_type: RequestTypes.CHANGE_SECTION,
      section_id: sectionId
    },
    request_time: protobufTimeStamp
  });
}

export default handleChangeSection;
