import { convertToProtobufTimestamp } from "../../../../../helpers";

async function handleGetComposition(payload: any, { getS2Dialog }: any): Promise<void> {
  const s2Dialog = await getS2Dialog();
  // If s2 connection is not present, return
  if (!s2Dialog) {
    return;
  }

  const { data } = payload;

  const currentEpochTimeStampInMilliSeconds = new Date().getTime();
  const protobufTimeStamp = convertToProtobufTimestamp(currentEpochTimeStampInMilliSeconds);

  const { orgId, noteId, requestType } = data;
  s2Dialog.write({
    get_composition_or_note_request: {
      organization_id: orgId,
      id: noteId,
      request_type: requestType
    },
    request_time: protobufTimeStamp
  });
}

export default handleGetComposition;
