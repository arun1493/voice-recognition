import type * as grpc from "@grpc/grpc-js";
import type { MessageTypeDefinition } from "@grpc/proto-loader";

import type {
  DagManagerServiceClient as _suki_pb_ssp_v1_dag_DagManagerServiceClient,
  DagManagerServiceDefinition as _suki_pb_ssp_v1_dag_DagManagerServiceDefinition
} from "./suki/pb/ssp/v1/dag/DagManagerService";

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new (...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  google: {
    protobuf: {
      Any: MessageTypeDefinition;
      Empty: MessageTypeDefinition;
      Timestamp: MessageTypeDefinition;
    };
  };
  suki: {
    pb: {
      ssp: {
        v1: {
          dag: {
            CreateRequest: MessageTypeDefinition;
            Dag: MessageTypeDefinition;
            DagManagerService: SubtypeConstructor<typeof grpc.Client, _suki_pb_ssp_v1_dag_DagManagerServiceClient> & {
              service: _suki_pb_ssp_v1_dag_DagManagerServiceDefinition;
            };
            DeleteRequest: MessageTypeDefinition;
            Edge: MessageTypeDefinition;
            End: MessageTypeDefinition;
            GetRequest: MessageTypeDefinition;
            GetResponse: MessageTypeDefinition;
            Stage: MessageTypeDefinition;
            Start: MessageTypeDefinition;
            UpdateRequest: MessageTypeDefinition;
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
