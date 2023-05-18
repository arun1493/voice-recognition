import type * as grpc from "@grpc/grpc-js";
import type { EnumTypeDefinition, MessageTypeDefinition } from "@grpc/proto-loader";

import type {
  CommandsEngineDemoClient as _suki_pb_ssp_ce_CommandsEngineDemoClient,
  CommandsEngineDemoDefinition as _suki_pb_ssp_ce_CommandsEngineDemoDefinition
} from "./suki/pb/ssp/ce/CommandsEngineDemo";

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new (...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  google: {
    protobuf: {
      Any: MessageTypeDefinition;
      ListValue: MessageTypeDefinition;
      NullValue: EnumTypeDefinition;
      Struct: MessageTypeDefinition;
      Timestamp: MessageTypeDefinition;
      Value: MessageTypeDefinition;
    };
  };
  suki: {
    pb: {
      ssp: {
        ce: {
          AudioEncoding: MessageTypeDefinition;
          AudioInfo: MessageTypeDefinition;
          ClientContext: MessageTypeDefinition;
          CommandsEngineDemo: SubtypeConstructor<typeof grpc.Client, _suki_pb_ssp_ce_CommandsEngineDemoClient> & {
            service: _suki_pb_ssp_ce_CommandsEngineDemoDefinition;
          };
          DetechIntentSlotValues: MessageTypeDefinition;
          DetectIntentResult: MessageTypeDefinition;
          DetectIntentSlot: MessageTypeDefinition;
          Intent: MessageTypeDefinition;
          IntentContext: MessageTypeDefinition;
          IntentRequest: MessageTypeDefinition;
          IntentResponse: MessageTypeDefinition;
          PingRequest: MessageTypeDefinition;
          PingRequestAuth: MessageTypeDefinition;
          PingResponse: MessageTypeDefinition;
          PingResponseAuth: MessageTypeDefinition;
          Status: MessageTypeDefinition;
        };
      };
    };
  };
}
