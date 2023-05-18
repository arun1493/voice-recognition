import { convertToProtobufTimestamp } from "../../../../../helpers";

async function handleSpeechTransfer(
  payload: any,
  { isGoogleAsr = false, isSukiAsr = false, getS2Dialog, getMsDictateDialog, recognizeStream }: any
): Promise<void> {
  const { data } = payload;
  const currentEpochTimeStampInMilliSeconds = new Date().getTime();
  const protobufTimeStamp = convertToProtobufTimestamp(currentEpochTimeStampInMilliSeconds);

  if (isGoogleAsr) {
    const { data } = payload;
    if (recognizeStream) {
      recognizeStream.write(data);
    } else {
      console.log("ERROR");
    }
    return;
  }

  if (isSukiAsr) {
    const sukiAsrDialog = await getMsDictateDialog();
    if (!sukiAsrDialog) return;
    sukiAsrDialog.write({
      audio_data: data,
      request_time: protobufTimeStamp
    });
    return;
  }

  const s2Dialog = await getS2Dialog();
  // If s2 connection is not present, return
  if (!s2Dialog) {
    return;
  }

  try {
    s2Dialog.write({
      audio_data: data,
      request_time: protobufTimeStamp
    });
  } catch (error) {
    console.log("Error transmitting audio to ms-s2:", error);
  }
}

export default handleSpeechTransfer;
