import type * as grpc from "@grpc/grpc-js";
import type { MessageTypeDefinition } from "@grpc/proto-loader";

import type {
  EMRChartsServiceClient as _learningmotors_pb_emr_charts_EMRChartsServiceClient,
  EMRChartsServiceDefinition as _learningmotors_pb_emr_charts_EMRChartsServiceDefinition
} from "./learningmotors/pb/emr_charts/EMRChartsService";

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
      emr_charts: {
        EMRChartsService: SubtypeConstructor<
          typeof grpc.Client,
          _learningmotors_pb_emr_charts_EMRChartsServiceClient
        > & { service: _learningmotors_pb_emr_charts_EMRChartsServiceDefinition };
        RefreshChartsDataRequest: MessageTypeDefinition;
      };
      scope: {
        Scope: MessageTypeDefinition;
      };
    };
  };
}
