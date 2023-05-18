import type * as grpc from "@grpc/grpc-js";
import type { EnumTypeDefinition, MessageTypeDefinition } from "@grpc/proto-loader";

import type {
  MsOnlineClient as _suki_pb_ml_MsOnlineClient,
  MsOnlineDefinition as _suki_pb_ml_MsOnlineDefinition
} from "./suki/pb/ml/MsOnline";

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
      ml: {
        EnsembleResults: MessageTypeDefinition;
        EnsembleType: EnumTypeDefinition;
        IeMlTrainRequest: MessageTypeDefinition;
        IeMlTrainResponse: MessageTypeDefinition;
        ModelResults: MessageTypeDefinition;
        MsOnline: SubtypeConstructor<typeof grpc.Client, _suki_pb_ml_MsOnlineClient> & {
          service: _suki_pb_ml_MsOnlineDefinition;
        };
        RetrainRequest: MessageTypeDefinition;
        RetrainResponse: MessageTypeDefinition;
        SystemResults: MessageTypeDefinition;
        SystemType: EnumTypeDefinition;
      };
    };
  };
}
