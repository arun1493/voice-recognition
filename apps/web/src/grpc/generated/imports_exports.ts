import type * as grpc from "@grpc/grpc-js";
import type { EnumTypeDefinition, MessageTypeDefinition } from "@grpc/proto-loader";

import type {
  ImportsExportsClient as _suki_pb_imports_exports_ImportsExportsClient,
  ImportsExportsDefinition as _suki_pb_imports_exports_ImportsExportsDefinition
} from "./suki/pb/imports_exports/ImportsExports";

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new (...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  google: {
    protobuf: {
      Timestamp: MessageTypeDefinition;
    };
  };
  suki: {
    pb: {
      imports_exports: {
        GetJobsRequest: MessageTypeDefinition;
        GetJobsResponse: MessageTypeDefinition;
        ImportJobDetails: MessageTypeDefinition;
        ImportScheduleJobRequest: MessageTypeDefinition;
        ImportScheduleJobResponse: MessageTypeDefinition;
        ImportsExports: SubtypeConstructor<typeof grpc.Client, _suki_pb_imports_exports_ImportsExportsClient> & {
          service: _suki_pb_imports_exports_ImportsExportsDefinition;
        };
        Job: MessageTypeDefinition;
        JobStatus: EnumTypeDefinition;
        JobStatusRequest: MessageTypeDefinition;
        JobStatusResponse: MessageTypeDefinition;
        JobType: EnumTypeDefinition;
      };
    };
  };
}
