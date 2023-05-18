import { convertToProtobufTimestamp } from "../../../../../helpers";

async function handleCursorPosition(payload: any, { getS2Dialog }: any): Promise<void> {
  const s2Dialog = await getS2Dialog();
  // If s2 connection is not present, return
  if (!s2Dialog) {
    return;
  }

  const currentEpochTimeStampInMilliSeconds = new Date().getTime();
  const protobufTimeStamp = convertToProtobufTimestamp(currentEpochTimeStampInMilliSeconds);

  const { data } = payload;
  const { cursorLength, cursorPosition, sectionId } = data;

  s2Dialog.write({
    cursor_position: {
      cursor_position_index: cursorPosition,
      cursor_position_endIndex: cursorPosition + cursorLength,
      section_id: sectionId
    },
    request_time: protobufTimeStamp
  });
}

export default handleCursorPosition;
