import type * as grpc from "@grpc/grpc-js";
import type { MessageTypeDefinition } from "@grpc/proto-loader";

import type {
  ExampleServiceClient as _learningmotors_pb_ExampleServiceClient,
  ExampleServiceDefinition as _learningmotors_pb_ExampleServiceDefinition
} from "./learningmotors/pb/ExampleService";

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new (...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  learningmotors: {
    pb: {
      EchoNoScopeRequest: MessageTypeDefinition;
      EchoNoScopeResponse: MessageTypeDefinition;
      EchoRequest: MessageTypeDefinition;
      EchoResponse: MessageTypeDefinition;
      ExampleService: SubtypeConstructor<typeof grpc.Client, _learningmotors_pb_ExampleServiceClient> & {
        service: _learningmotors_pb_ExampleServiceDefinition;
      };
      scope: {
        Scope: MessageTypeDefinition;
      };
    };
  };
}
