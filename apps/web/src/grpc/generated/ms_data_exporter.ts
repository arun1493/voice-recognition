import type * as grpc from "@grpc/grpc-js";

import type {
  MsDataExporterClient as _suki_pb_ml_MsDataExporterClient,
  MsDataExporterDefinition as _suki_pb_ml_MsDataExporterDefinition
} from "./suki/pb/ml/MsDataExporter";

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new (...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  suki: {
    pb: {
      ml: {
        MsDataExporter: SubtypeConstructor<typeof grpc.Client, _suki_pb_ml_MsDataExporterClient> & {
          service: _suki_pb_ml_MsDataExporterDefinition;
        };
      };
    };
  };
}
