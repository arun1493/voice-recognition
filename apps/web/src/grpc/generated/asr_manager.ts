import type * as grpc from "@grpc/grpc-js";
import type { EnumTypeDefinition, MessageTypeDefinition } from "@grpc/proto-loader";

import type {
  ASRManagerClient as _suki_pb_ssp_v1_asr_manager_ASRManagerClient,
  ASRManagerDefinition as _suki_pb_ssp_v1_asr_manager_ASRManagerDefinition
} from "./suki/pb/ssp/v1/asr_manager/ASRManager";

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new (...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  google: {
    protobuf: {
      Duration: MessageTypeDefinition;
      Empty: MessageTypeDefinition;
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
          asr_manager: {
            ASRManager: SubtypeConstructor<typeof grpc.Client, _suki_pb_ssp_v1_asr_manager_ASRManagerClient> & {
              service: _suki_pb_ssp_v1_asr_manager_ASRManagerDefinition;
            };
            GetStatusRequest: MessageTypeDefinition;
            GetStatusResponse: MessageTypeDefinition;
            ProcessingState: MessageTypeDefinition;
            StartSpeechRequest: MessageTypeDefinition;
            State: EnumTypeDefinition;
          };
        };
      };
    };
  };
}
