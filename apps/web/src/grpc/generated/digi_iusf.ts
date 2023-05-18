import type * as grpc from "@grpc/grpc-js";
import type { EnumTypeDefinition, MessageTypeDefinition } from "@grpc/proto-loader";

import type {
  DigiIUSFClient as _suki_pb_ssp_iusf_DigiIUSFClient,
  DigiIUSFDefinition as _suki_pb_ssp_iusf_DigiIUSFDefinition
} from "./suki/pb/ssp/iusf/DigiIUSF";

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new (...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  google: {
    protobuf: {
      Duration: MessageTypeDefinition;
      Timestamp: MessageTypeDefinition;
    };
  };
  suki: {
    pb: {
      ssp: {
        iusf: {
          DigiIUSF: SubtypeConstructor<typeof grpc.Client, _suki_pb_ssp_iusf_DigiIUSFClient> & {
            service: _suki_pb_ssp_iusf_DigiIUSFDefinition;
          };
          PingRequest: MessageTypeDefinition;
          PongReply: MessageTypeDefinition;
          RecognizeCommandRequest: MessageTypeDefinition;
          RecognizeCommandResponse: MessageTypeDefinition;
        };
        v1: {
          ASR: EnumTypeDefinition;
          AudioConfig: MessageTypeDefinition;
          AudioEncoding: EnumTypeDefinition;
          CommandResult: MessageTypeDefinition;
          CustomData: MessageTypeDefinition;
          ErrorSignals: EnumTypeDefinition;
          IntentResult: MessageTypeDefinition;
          ModelConfig: MessageTypeDefinition;
          PhraseBias: MessageTypeDefinition;
          PhraseTolerance: MessageTypeDefinition;
          RequestSignals: EnumTypeDefinition;
          ResponseSignals: EnumTypeDefinition;
          Slot: MessageTypeDefinition;
          SpeechAdaptation: MessageTypeDefinition;
          SpeechConfig: MessageTypeDefinition;
          SpeechContent: MessageTypeDefinition;
          SpeechResult: MessageTypeDefinition;
          SpeechStartResult: MessageTypeDefinition;
          TranscriptResult: MessageTypeDefinition;
          TranscriptionConfig: MessageTypeDefinition;
          WordMetadata: MessageTypeDefinition;
        };
      };
    };
  };
}
