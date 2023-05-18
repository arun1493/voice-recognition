import type * as grpc from "@grpc/grpc-js";
import type { MessageTypeDefinition } from "@grpc/proto-loader";

import type {
  MsCRUDExampleClient as _suki_pb_examples_MsCRUDExampleClient,
  MsCRUDExampleDefinition as _suki_pb_examples_MsCRUDExampleDefinition
} from "./suki/pb/examples/MsCRUDExample";

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new (...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  learningmotors: {
    pb: {
      scope: {
        Scope: MessageTypeDefinition;
      };
    };
  };
  suki: {
    pb: {
      examples: {
        CreateThingRequest: MessageTypeDefinition;
        CreateThingResponse: MessageTypeDefinition;
        DeleteThingRequest: MessageTypeDefinition;
        DeleteThingResponse: MessageTypeDefinition;
        MsCRUDExample: SubtypeConstructor<typeof grpc.Client, _suki_pb_examples_MsCRUDExampleClient> & {
          service: _suki_pb_examples_MsCRUDExampleDefinition;
        };
        ReadThingRequest: MessageTypeDefinition;
        ReadThingResponse: MessageTypeDefinition;
        Thing: MessageTypeDefinition;
        ThingStreamRequest: MessageTypeDefinition;
        ThingStreamResponse: MessageTypeDefinition;
        UpdateOrCreateThingRequest: MessageTypeDefinition;
        UpdateOrCreateThingResponse: MessageTypeDefinition;
        UpdateThingRequest: MessageTypeDefinition;
        UpdateThingResponse: MessageTypeDefinition;
      };
    };
  };
}
