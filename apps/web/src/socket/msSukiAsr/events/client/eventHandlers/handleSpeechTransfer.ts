import { getCurrentProtobufTimeStamp } from "apps/web/src/helpers";

function handleSpeechTransfer(payload: any, { socket, incrementPacketCount, getMsSukiAsrDialog }: any) {
  const packetNumber = incrementPacketCount();
  const { data } = payload;
  const protobufTimeStamp = getCurrentProtobufTimeStamp();
  const msSukiAsrDialog = getMsSukiAsrDialog();

  msSukiAsrDialog?.write({
    audio_data: data,
    packet_id: packetNumber,
    request_time: protobufTimeStamp
  });
  return;
}

export { handleSpeechTransfer };
