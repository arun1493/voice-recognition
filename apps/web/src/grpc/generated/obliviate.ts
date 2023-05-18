import type * as grpc from "@grpc/grpc-js";
import type { EnumTypeDefinition, MessageTypeDefinition } from "@grpc/proto-loader";

import type {
  DeletionServiceClient as _suki_pb_obliviate_DeletionServiceClient,
  DeletionServiceDefinition as _suki_pb_obliviate_DeletionServiceDefinition
} from "./suki/pb/obliviate/DeletionService";
import type {
  ObliviateServiceClient as _suki_pb_obliviate_ObliviateServiceClient,
  ObliviateServiceDefinition as _suki_pb_obliviate_ObliviateServiceDefinition
} from "./suki/pb/obliviate/ObliviateService";

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new (...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  google: {
    protobuf: {
      Empty: MessageTypeDefinition;
    };
  };
  learningmotors: {
    pb: {
      scope: {
        Scope: MessageTypeDefinition;
      };
    };
  };
  suki: {
    pb: {
      obliviate: {
        DeleteOrganizationRequest: MessageTypeDefinition;
        DeleteUserRequest: MessageTypeDefinition;
        DeletedStatus: MessageTypeDefinition;
        DeletionService: SubtypeConstructor<typeof grpc.Client, _suki_pb_obliviate_DeletionServiceClient> & {
          service: _suki_pb_obliviate_DeletionServiceDefinition;
        };
        DeletionStatus: EnumTypeDefinition;
        ObliviateDeleteResponse: MessageTypeDefinition;
        ObliviateService: SubtypeConstructor<typeof grpc.Client, _suki_pb_obliviate_ObliviateServiceClient> & {
          service: _suki_pb_obliviate_ObliviateServiceDefinition;
        };
        ServiceDataDeletionStatus: MessageTypeDefinition;
      };
    };
  };
}
