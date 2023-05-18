import type * as grpc from "@grpc/grpc-js";
import type { MessageTypeDefinition } from "@grpc/proto-loader";

import type {
  Suki_ASR_StreamerClient as _suki_pb_ssp_asr_Suki_ASR_StreamerClient,
  Suki_ASR_StreamerDefinition as _suki_pb_ssp_asr_Suki_ASR_StreamerDefinition
} from "./suki/pb/ssp/asr/Suki_ASR_Streamer";

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new (...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  google: {
    protobuf: {
      Any: MessageTypeDefinition;
      Timestamp: MessageTypeDefinition;
    };
  };
  suki: {
    pb: {
      ssp: {
        asr: {
          AudioEncoding: MessageTypeDefinition;
          AudioInfo: MessageTypeDefinition;
          PingRequest: MessageTypeDefinition;
          PingResponse: MessageTypeDefinition;
          Status: MessageTypeDefinition;
          SukiSpeechRecognizeAlternative: MessageTypeDefinition;
          SukiSpeechRecognizeRequest: MessageTypeDefinition;
          SukiSpeechRecognizeResponse: MessageTypeDefinition;
          SukiSpeechRecognizeResult: MessageTypeDefinition;
          Suki_ASR_Streamer: SubtypeConstructor<typeof grpc.Client, _suki_pb_ssp_asr_Suki_ASR_StreamerClient> & {
            service: _suki_pb_ssp_asr_Suki_ASR_StreamerDefinition;
          };
          WordMetaData: MessageTypeDefinition;
        };
      };
    };
  };
}
