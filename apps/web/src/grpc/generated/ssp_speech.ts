import type * as grpc from "@grpc/grpc-js";
import type { EnumTypeDefinition, MessageTypeDefinition } from "@grpc/proto-loader";

import type {
  SspSpeechClient as _suki_pb_ssp_v1_SspSpeechClient,
  SspSpeechDefinition as _suki_pb_ssp_v1_SspSpeechDefinition
} from "./suki/pb/ssp/v1/SspSpeech";

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
        v1: {
          ASR: EnumTypeDefinition;
          AudioConfig: MessageTypeDefinition;
          AudioEncoding: EnumTypeDefinition;
          ChangeSpeechConfigRequest: MessageTypeDefinition;
          ChangeSpeechConfigResponse: MessageTypeDefinition;
          CommandResult: MessageTypeDefinition;
          CustomData: MessageTypeDefinition;
          ErrorSignals: EnumTypeDefinition;
          IntentResult: MessageTypeDefinition;
          ModelConfig: MessageTypeDefinition;
          PhraseBias: MessageTypeDefinition;
          PhraseTolerance: MessageTypeDefinition;
          PingRequest: MessageTypeDefinition;
          PongReply: MessageTypeDefinition;
          RecognizeCommandRequest: MessageTypeDefinition;
          RecognizeCommandResponse: MessageTypeDefinition;
          RequestSignals: EnumTypeDefinition;
          ResponseSignals: EnumTypeDefinition;
          Slot: MessageTypeDefinition;
          SpeechAdaptation: MessageTypeDefinition;
          SpeechConfig: MessageTypeDefinition;
          SpeechContent: MessageTypeDefinition;
          SpeechResult: MessageTypeDefinition;
          SpeechStartRequest: MessageTypeDefinition;
          SpeechStartResponse: MessageTypeDefinition;
          SpeechStartResult: MessageTypeDefinition;
          SspSpeech: SubtypeConstructor<typeof grpc.Client, _suki_pb_ssp_v1_SspSpeechClient> & {
            service: _suki_pb_ssp_v1_SspSpeechDefinition;
          };
          StreamingRecognizeCommandRequest: MessageTypeDefinition;
          StreamingRecognizeCommandResponse: MessageTypeDefinition;
          StreamingRecognizeDictationRequest: MessageTypeDefinition;
          StreamingRecognizeDictationResponse: MessageTypeDefinition;
          TranscriptResult: MessageTypeDefinition;
          TranscriptionConfig: MessageTypeDefinition;
          WordMetadata: MessageTypeDefinition;
        };
      };
    };
  };
}
