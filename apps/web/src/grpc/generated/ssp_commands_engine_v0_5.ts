import type * as grpc from "@grpc/grpc-js";
import type { MessageTypeDefinition } from "@grpc/proto-loader";

import type {
  SSPCommandsEngineClient as _suki_pb_ssp_ce_SSPCommandsEngineClient,
  SSPCommandsEngineDefinition as _suki_pb_ssp_ce_SSPCommandsEngineDefinition
} from "./suki/pb/ssp/ce/SSPCommandsEngine";

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
        ce: {
          AudioEncoding: MessageTypeDefinition;
          AudioInfo: MessageTypeDefinition;
          ClientContext: MessageTypeDefinition;
          DetectIntentResult: MessageTypeDefinition;
          DetectIntentSlot: MessageTypeDefinition;
          DetectIntentSlotValues: MessageTypeDefinition;
          Intent: MessageTypeDefinition;
          IntentContext: MessageTypeDefinition;
          IntentRequest: MessageTypeDefinition;
          IntentResponse: MessageTypeDefinition;
          PingRequest: MessageTypeDefinition;
          PingRequestAuth: MessageTypeDefinition;
          PingResponse: MessageTypeDefinition;
          PingResponseAuth: MessageTypeDefinition;
          SSPCommandsEngine: SubtypeConstructor<typeof grpc.Client, _suki_pb_ssp_ce_SSPCommandsEngineClient> & {
            service: _suki_pb_ssp_ce_SSPCommandsEngineDefinition;
          };
          Status: MessageTypeDefinition;
        };
      };
    };
  };
}
