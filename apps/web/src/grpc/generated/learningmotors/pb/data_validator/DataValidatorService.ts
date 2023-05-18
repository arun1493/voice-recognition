// Original file: node_modules/protobufs/src/learningmotors/pb/data_validator/data_validator.proto

import type * as grpc from "@grpc/grpc-js";
import type { MethodDefinition } from "@grpc/proto-loader";
import type {
  CreateDataRequest as _learningmotors_pb_data_validator_CreateDataRequest,
  CreateDataRequest__Output as _learningmotors_pb_data_validator_CreateDataRequest__Output
} from "../../../learningmotors/pb/data_validator/CreateDataRequest";
import type {
  CreateDataResponse as _learningmotors_pb_data_validator_CreateDataResponse,
  CreateDataResponse__Output as _learningmotors_pb_data_validator_CreateDataResponse__Output
} from "../../../learningmotors/pb/data_validator/CreateDataResponse";
import type {
  ExportAllRequest as _suki_pb_ml_ExportAllRequest,
  ExportAllRequest__Output as _suki_pb_ml_ExportAllRequest__Output
} from "../../../suki/pb/ml/ExportAllRequest";
import type {
  ExportAllResponse as _suki_pb_ml_ExportAllResponse,
  ExportAllResponse__Output as _suki_pb_ml_ExportAllResponse__Output
} from "../../../suki/pb/ml/ExportAllResponse";
import type {
  GetDataRequest as _learningmotors_pb_data_validator_GetDataRequest,
  GetDataRequest__Output as _learningmotors_pb_data_validator_GetDataRequest__Output
} from "../../../learningmotors/pb/data_validator/GetDataRequest";
import type {
  GetDataResponse as _learningmotors_pb_data_validator_GetDataResponse,
  GetDataResponse__Output as _learningmotors_pb_data_validator_GetDataResponse__Output
} from "../../../learningmotors/pb/data_validator/GetDataResponse";
import type {
  GetValidatedDataFileRequest as _learningmotors_pb_data_validator_GetValidatedDataFileRequest,
  GetValidatedDataFileRequest__Output as _learningmotors_pb_data_validator_GetValidatedDataFileRequest__Output
} from "../../../learningmotors/pb/data_validator/GetValidatedDataFileRequest";
import type {
  GetValidatedDataFileResponse as _learningmotors_pb_data_validator_GetValidatedDataFileResponse,
  GetValidatedDataFileResponse__Output as _learningmotors_pb_data_validator_GetValidatedDataFileResponse__Output
} from "../../../learningmotors/pb/data_validator/GetValidatedDataFileResponse";
import type {
  UpdateDataRequest as _learningmotors_pb_data_validator_UpdateDataRequest,
  UpdateDataRequest__Output as _learningmotors_pb_data_validator_UpdateDataRequest__Output
} from "../../../learningmotors/pb/data_validator/UpdateDataRequest";
import type {
  UpdateDataResponse as _learningmotors_pb_data_validator_UpdateDataResponse,
  UpdateDataResponse__Output as _learningmotors_pb_data_validator_UpdateDataResponse__Output
} from "../../../learningmotors/pb/data_validator/UpdateDataResponse";

export interface DataValidatorServiceClient extends grpc.Client {
  CreateData(
    argument: _learningmotors_pb_data_validator_CreateDataRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_data_validator_CreateDataResponse__Output>
  ): grpc.ClientUnaryCall;
  CreateData(
    argument: _learningmotors_pb_data_validator_CreateDataRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_data_validator_CreateDataResponse__Output>
  ): grpc.ClientUnaryCall;
  CreateData(
    argument: _learningmotors_pb_data_validator_CreateDataRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_data_validator_CreateDataResponse__Output>
  ): grpc.ClientUnaryCall;
  CreateData(
    argument: _learningmotors_pb_data_validator_CreateDataRequest,
    callback: grpc.requestCallback<_learningmotors_pb_data_validator_CreateDataResponse__Output>
  ): grpc.ClientUnaryCall;
  createData(
    argument: _learningmotors_pb_data_validator_CreateDataRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_data_validator_CreateDataResponse__Output>
  ): grpc.ClientUnaryCall;
  createData(
    argument: _learningmotors_pb_data_validator_CreateDataRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_data_validator_CreateDataResponse__Output>
  ): grpc.ClientUnaryCall;
  createData(
    argument: _learningmotors_pb_data_validator_CreateDataRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_data_validator_CreateDataResponse__Output>
  ): grpc.ClientUnaryCall;
  createData(
    argument: _learningmotors_pb_data_validator_CreateDataRequest,
    callback: grpc.requestCallback<_learningmotors_pb_data_validator_CreateDataResponse__Output>
  ): grpc.ClientUnaryCall;

  ExportAll(
    argument: _suki_pb_ml_ExportAllRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ml_ExportAllResponse__Output>
  ): grpc.ClientUnaryCall;
  ExportAll(
    argument: _suki_pb_ml_ExportAllRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_ml_ExportAllResponse__Output>
  ): grpc.ClientUnaryCall;
  ExportAll(
    argument: _suki_pb_ml_ExportAllRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ml_ExportAllResponse__Output>
  ): grpc.ClientUnaryCall;
  ExportAll(
    argument: _suki_pb_ml_ExportAllRequest,
    callback: grpc.requestCallback<_suki_pb_ml_ExportAllResponse__Output>
  ): grpc.ClientUnaryCall;
  exportAll(
    argument: _suki_pb_ml_ExportAllRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ml_ExportAllResponse__Output>
  ): grpc.ClientUnaryCall;
  exportAll(
    argument: _suki_pb_ml_ExportAllRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_ml_ExportAllResponse__Output>
  ): grpc.ClientUnaryCall;
  exportAll(
    argument: _suki_pb_ml_ExportAllRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_ml_ExportAllResponse__Output>
  ): grpc.ClientUnaryCall;
  exportAll(
    argument: _suki_pb_ml_ExportAllRequest,
    callback: grpc.requestCallback<_suki_pb_ml_ExportAllResponse__Output>
  ): grpc.ClientUnaryCall;

  GetData(
    argument: _learningmotors_pb_data_validator_GetDataRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_data_validator_GetDataResponse__Output>
  ): grpc.ClientUnaryCall;
  GetData(
    argument: _learningmotors_pb_data_validator_GetDataRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_data_validator_GetDataResponse__Output>
  ): grpc.ClientUnaryCall;
  GetData(
    argument: _learningmotors_pb_data_validator_GetDataRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_data_validator_GetDataResponse__Output>
  ): grpc.ClientUnaryCall;
  GetData(
    argument: _learningmotors_pb_data_validator_GetDataRequest,
    callback: grpc.requestCallback<_learningmotors_pb_data_validator_GetDataResponse__Output>
  ): grpc.ClientUnaryCall;
  getData(
    argument: _learningmotors_pb_data_validator_GetDataRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_data_validator_GetDataResponse__Output>
  ): grpc.ClientUnaryCall;
  getData(
    argument: _learningmotors_pb_data_validator_GetDataRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_data_validator_GetDataResponse__Output>
  ): grpc.ClientUnaryCall;
  getData(
    argument: _learningmotors_pb_data_validator_GetDataRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_data_validator_GetDataResponse__Output>
  ): grpc.ClientUnaryCall;
  getData(
    argument: _learningmotors_pb_data_validator_GetDataRequest,
    callback: grpc.requestCallback<_learningmotors_pb_data_validator_GetDataResponse__Output>
  ): grpc.ClientUnaryCall;

  GetValidatedDataFile(
    argument: _learningmotors_pb_data_validator_GetValidatedDataFileRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_data_validator_GetValidatedDataFileResponse__Output>
  ): grpc.ClientUnaryCall;
  GetValidatedDataFile(
    argument: _learningmotors_pb_data_validator_GetValidatedDataFileRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_data_validator_GetValidatedDataFileResponse__Output>
  ): grpc.ClientUnaryCall;
  GetValidatedDataFile(
    argument: _learningmotors_pb_data_validator_GetValidatedDataFileRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_data_validator_GetValidatedDataFileResponse__Output>
  ): grpc.ClientUnaryCall;
  GetValidatedDataFile(
    argument: _learningmotors_pb_data_validator_GetValidatedDataFileRequest,
    callback: grpc.requestCallback<_learningmotors_pb_data_validator_GetValidatedDataFileResponse__Output>
  ): grpc.ClientUnaryCall;
  getValidatedDataFile(
    argument: _learningmotors_pb_data_validator_GetValidatedDataFileRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_data_validator_GetValidatedDataFileResponse__Output>
  ): grpc.ClientUnaryCall;
  getValidatedDataFile(
    argument: _learningmotors_pb_data_validator_GetValidatedDataFileRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_data_validator_GetValidatedDataFileResponse__Output>
  ): grpc.ClientUnaryCall;
  getValidatedDataFile(
    argument: _learningmotors_pb_data_validator_GetValidatedDataFileRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_data_validator_GetValidatedDataFileResponse__Output>
  ): grpc.ClientUnaryCall;
  getValidatedDataFile(
    argument: _learningmotors_pb_data_validator_GetValidatedDataFileRequest,
    callback: grpc.requestCallback<_learningmotors_pb_data_validator_GetValidatedDataFileResponse__Output>
  ): grpc.ClientUnaryCall;

  UpdateData(
    argument: _learningmotors_pb_data_validator_UpdateDataRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_data_validator_UpdateDataResponse__Output>
  ): grpc.ClientUnaryCall;
  UpdateData(
    argument: _learningmotors_pb_data_validator_UpdateDataRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_data_validator_UpdateDataResponse__Output>
  ): grpc.ClientUnaryCall;
  UpdateData(
    argument: _learningmotors_pb_data_validator_UpdateDataRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_data_validator_UpdateDataResponse__Output>
  ): grpc.ClientUnaryCall;
  UpdateData(
    argument: _learningmotors_pb_data_validator_UpdateDataRequest,
    callback: grpc.requestCallback<_learningmotors_pb_data_validator_UpdateDataResponse__Output>
  ): grpc.ClientUnaryCall;
  updateData(
    argument: _learningmotors_pb_data_validator_UpdateDataRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_data_validator_UpdateDataResponse__Output>
  ): grpc.ClientUnaryCall;
  updateData(
    argument: _learningmotors_pb_data_validator_UpdateDataRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_data_validator_UpdateDataResponse__Output>
  ): grpc.ClientUnaryCall;
  updateData(
    argument: _learningmotors_pb_data_validator_UpdateDataRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_data_validator_UpdateDataResponse__Output>
  ): grpc.ClientUnaryCall;
  updateData(
    argument: _learningmotors_pb_data_validator_UpdateDataRequest,
    callback: grpc.requestCallback<_learningmotors_pb_data_validator_UpdateDataResponse__Output>
  ): grpc.ClientUnaryCall;
}

export interface DataValidatorServiceHandlers extends grpc.UntypedServiceImplementation {
  CreateData: grpc.handleUnaryCall<
    _learningmotors_pb_data_validator_CreateDataRequest__Output,
    _learningmotors_pb_data_validator_CreateDataResponse
  >;

  ExportAll: grpc.handleUnaryCall<_suki_pb_ml_ExportAllRequest__Output, _suki_pb_ml_ExportAllResponse>;

  GetData: grpc.handleUnaryCall<
    _learningmotors_pb_data_validator_GetDataRequest__Output,
    _learningmotors_pb_data_validator_GetDataResponse
  >;

  GetValidatedDataFile: grpc.handleUnaryCall<
    _learningmotors_pb_data_validator_GetValidatedDataFileRequest__Output,
    _learningmotors_pb_data_validator_GetValidatedDataFileResponse
  >;

  UpdateData: grpc.handleUnaryCall<
    _learningmotors_pb_data_validator_UpdateDataRequest__Output,
    _learningmotors_pb_data_validator_UpdateDataResponse
  >;
}

export interface DataValidatorServiceDefinition extends grpc.ServiceDefinition {
  CreateData: MethodDefinition<
    _learningmotors_pb_data_validator_CreateDataRequest,
    _learningmotors_pb_data_validator_CreateDataResponse,
    _learningmotors_pb_data_validator_CreateDataRequest__Output,
    _learningmotors_pb_data_validator_CreateDataResponse__Output
  >;
  ExportAll: MethodDefinition<
    _suki_pb_ml_ExportAllRequest,
    _suki_pb_ml_ExportAllResponse,
    _suki_pb_ml_ExportAllRequest__Output,
    _suki_pb_ml_ExportAllResponse__Output
  >;
  GetData: MethodDefinition<
    _learningmotors_pb_data_validator_GetDataRequest,
    _learningmotors_pb_data_validator_GetDataResponse,
    _learningmotors_pb_data_validator_GetDataRequest__Output,
    _learningmotors_pb_data_validator_GetDataResponse__Output
  >;
  GetValidatedDataFile: MethodDefinition<
    _learningmotors_pb_data_validator_GetValidatedDataFileRequest,
    _learningmotors_pb_data_validator_GetValidatedDataFileResponse,
    _learningmotors_pb_data_validator_GetValidatedDataFileRequest__Output,
    _learningmotors_pb_data_validator_GetValidatedDataFileResponse__Output
  >;
  UpdateData: MethodDefinition<
    _learningmotors_pb_data_validator_UpdateDataRequest,
    _learningmotors_pb_data_validator_UpdateDataResponse,
    _learningmotors_pb_data_validator_UpdateDataRequest__Output,
    _learningmotors_pb_data_validator_UpdateDataResponse__Output
  >;
}
