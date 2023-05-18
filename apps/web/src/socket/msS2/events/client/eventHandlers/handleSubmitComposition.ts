import { convertToProtobufTimestamp, getDateFromString } from "../../../../../helpers";

async function handleSubmitComposition(payload: any, { getS2Dialog }: any): Promise<void> {
  const s2Dialog = await getS2Dialog();
  // If s2 connection is not present, return
  if (!s2Dialog) {
    return;
  }

  const { data } = payload;

  const currentEpochTimeStampInMilliSeconds = new Date().getTime();
  const protobufTimeStamp = convertToProtobufTimestamp(currentEpochTimeStampInMilliSeconds);

  const { actor, bypassQa, emrAccessToken, isSignedOff, noteId, organizationId, requestTime, tryAllDestinations } =
    data;
  const requestSentTime = getDateFromString(requestTime);

  s2Dialog.write({
    submit_composition_request: {
      organization_id: organizationId,
      id: noteId,
      actor: actor,
      try_all_destinations: tryAllDestinations,
      bypass_qa: bypassQa,
      is_signed_off: isSignedOff,
      emr_access_token: emrAccessToken,
      request_sent_time: requestSentTime
    },
    request_time: protobufTimeStamp
  });
}

export default handleSubmitComposition;
