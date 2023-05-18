import type * as grpc from "@grpc/grpc-js";
import type { MessageTypeDefinition } from "@grpc/proto-loader";

import type {
  Epic_StreamerClient as _suki_pb_epic_voiceplatform_Epic_StreamerClient,
  Epic_StreamerDefinition as _suki_pb_epic_voiceplatform_Epic_StreamerDefinition
} from "./suki/pb/epic_voiceplatform/Epic_Streamer";

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new (...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  suki: {
    pb: {
      epic_voiceplatform: {
        DetechIntentSlotValues: MessageTypeDefinition;
        DetectIntent: MessageTypeDefinition;
        DetectIntentResult: MessageTypeDefinition;
        DetectIntentSlot: MessageTypeDefinition;
        Epic_Streamer: SubtypeConstructor<typeof grpc.Client, _suki_pb_epic_voiceplatform_Epic_StreamerClient> & {
          service: _suki_pb_epic_voiceplatform_Epic_StreamerDefinition;
        };
        IntentResponse: MessageTypeDefinition;
        IntentTextRequest: MessageTypeDefinition;
        PingRequest: MessageTypeDefinition;
        PingResponse: MessageTypeDefinition;
      };
    };
  };
}
