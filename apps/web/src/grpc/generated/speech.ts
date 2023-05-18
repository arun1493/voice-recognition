import type * as grpc from "@grpc/grpc-js";
import type { EnumTypeDefinition, MessageTypeDefinition } from "@grpc/proto-loader";

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
      suki_internal: {
        suki_server: {
          SpeechConfig: MessageTypeDefinition;
          SpeechContent: MessageTypeDefinition;
          SpeechRequest: MessageTypeDefinition;
        };
      };
    };
  };
}
