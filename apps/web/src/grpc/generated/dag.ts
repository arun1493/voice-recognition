import type * as grpc from "@grpc/grpc-js";
import type { MessageTypeDefinition } from "@grpc/proto-loader";

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
        v1: {
          dag: {
            Dag: MessageTypeDefinition;
            Edge: MessageTypeDefinition;
            End: MessageTypeDefinition;
            Stage: MessageTypeDefinition;
            Start: MessageTypeDefinition;
            action: {
              CacheAction: MessageTypeDefinition;
              Conclusion: MessageTypeDefinition;
              Conditional: MessageTypeDefinition;
              Hypothesis: MessageTypeDefinition;
              RPCCall: MessageTypeDefinition;
            };
          };
        };
      };
    };
  };
}
