import { getCurrentProtobufTimeStamp } from "../../../../../helpers";

function handleSpeechTransfer(payload: any, { socket, incrementPacketCount, getMsDictationDialog }: any) {
  const packetNumber = incrementPacketCount();
  const { data } = payload;
  const protobufTimeStamp = getCurrentProtobufTimeStamp();
  const msDictationDialog = getMsDictationDialog();
  msDictationDialog?.write({
    audio_data: data,
    packet_id: packetNumber,
    request_time: protobufTimeStamp
  });
  return;
}

export { handleSpeechTransfer };
