// Original file: node_modules/protobufs/src/suki/pb/imports_exports/imports_exports.proto

import type * as grpc from "@grpc/grpc-js";
import type { MethodDefinition } from "@grpc/proto-loader";
import type {
  GetJobsRequest as _suki_pb_imports_exports_GetJobsRequest,
  GetJobsRequest__Output as _suki_pb_imports_exports_GetJobsRequest__Output
} from "../../../suki/pb/imports_exports/GetJobsRequest";
import type {
  GetJobsResponse as _suki_pb_imports_exports_GetJobsResponse,
  GetJobsResponse__Output as _suki_pb_imports_exports_GetJobsResponse__Output
} from "../../../suki/pb/imports_exports/GetJobsResponse";
import type {
  ImportScheduleJobRequest as _suki_pb_imports_exports_ImportScheduleJobRequest,
  ImportScheduleJobRequest__Output as _suki_pb_imports_exports_ImportScheduleJobRequest__Output
} from "../../../suki/pb/imports_exports/ImportScheduleJobRequest";
import type {
  ImportScheduleJobResponse as _suki_pb_imports_exports_ImportScheduleJobResponse,
  ImportScheduleJobResponse__Output as _suki_pb_imports_exports_ImportScheduleJobResponse__Output
} from "../../../suki/pb/imports_exports/ImportScheduleJobResponse";
import type {
  JobStatusRequest as _suki_pb_imports_exports_JobStatusRequest,
  JobStatusRequest__Output as _suki_pb_imports_exports_JobStatusRequest__Output
} from "../../../suki/pb/imports_exports/JobStatusRequest";
import type {
  JobStatusResponse as _suki_pb_imports_exports_JobStatusResponse,
  JobStatusResponse__Output as _suki_pb_imports_exports_JobStatusResponse__Output
} from "../../../suki/pb/imports_exports/JobStatusResponse";

export interface ImportsExportsClient extends grpc.Client {
  GetJobs(
    argument: _suki_pb_imports_exports_GetJobsRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_imports_exports_GetJobsResponse__Output>
  ): grpc.ClientUnaryCall;
  GetJobs(
    argument: _suki_pb_imports_exports_GetJobsRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_imports_exports_GetJobsResponse__Output>
  ): grpc.ClientUnaryCall;
  GetJobs(
    argument: _suki_pb_imports_exports_GetJobsRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_imports_exports_GetJobsResponse__Output>
  ): grpc.ClientUnaryCall;
  GetJobs(
    argument: _suki_pb_imports_exports_GetJobsRequest,
    callback: grpc.requestCallback<_suki_pb_imports_exports_GetJobsResponse__Output>
  ): grpc.ClientUnaryCall;
  getJobs(
    argument: _suki_pb_imports_exports_GetJobsRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_imports_exports_GetJobsResponse__Output>
  ): grpc.ClientUnaryCall;
  getJobs(
    argument: _suki_pb_imports_exports_GetJobsRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_imports_exports_GetJobsResponse__Output>
  ): grpc.ClientUnaryCall;
  getJobs(
    argument: _suki_pb_imports_exports_GetJobsRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_imports_exports_GetJobsResponse__Output>
  ): grpc.ClientUnaryCall;
  getJobs(
    argument: _suki_pb_imports_exports_GetJobsRequest,
    callback: grpc.requestCallback<_suki_pb_imports_exports_GetJobsResponse__Output>
  ): grpc.ClientUnaryCall;

  ImportScheduleJob(
    argument: _suki_pb_imports_exports_ImportScheduleJobRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_imports_exports_ImportScheduleJobResponse__Output>
  ): grpc.ClientUnaryCall;
  ImportScheduleJob(
    argument: _suki_pb_imports_exports_ImportScheduleJobRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_imports_exports_ImportScheduleJobResponse__Output>
  ): grpc.ClientUnaryCall;
  ImportScheduleJob(
    argument: _suki_pb_imports_exports_ImportScheduleJobRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_imports_exports_ImportScheduleJobResponse__Output>
  ): grpc.ClientUnaryCall;
  ImportScheduleJob(
    argument: _suki_pb_imports_exports_ImportScheduleJobRequest,
    callback: grpc.requestCallback<_suki_pb_imports_exports_ImportScheduleJobResponse__Output>
  ): grpc.ClientUnaryCall;
  importScheduleJob(
    argument: _suki_pb_imports_exports_ImportScheduleJobRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_imports_exports_ImportScheduleJobResponse__Output>
  ): grpc.ClientUnaryCall;
  importScheduleJob(
    argument: _suki_pb_imports_exports_ImportScheduleJobRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_imports_exports_ImportScheduleJobResponse__Output>
  ): grpc.ClientUnaryCall;
  importScheduleJob(
    argument: _suki_pb_imports_exports_ImportScheduleJobRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_imports_exports_ImportScheduleJobResponse__Output>
  ): grpc.ClientUnaryCall;
  importScheduleJob(
    argument: _suki_pb_imports_exports_ImportScheduleJobRequest,
    callback: grpc.requestCallback<_suki_pb_imports_exports_ImportScheduleJobResponse__Output>
  ): grpc.ClientUnaryCall;

  JobStatus(
    argument: _suki_pb_imports_exports_JobStatusRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_imports_exports_JobStatusResponse__Output>
  ): grpc.ClientUnaryCall;
  JobStatus(
    argument: _suki_pb_imports_exports_JobStatusRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_imports_exports_JobStatusResponse__Output>
  ): grpc.ClientUnaryCall;
  JobStatus(
    argument: _suki_pb_imports_exports_JobStatusRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_imports_exports_JobStatusResponse__Output>
  ): grpc.ClientUnaryCall;
  JobStatus(
    argument: _suki_pb_imports_exports_JobStatusRequest,
    callback: grpc.requestCallback<_suki_pb_imports_exports_JobStatusResponse__Output>
  ): grpc.ClientUnaryCall;
  jobStatus(
    argument: _suki_pb_imports_exports_JobStatusRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_imports_exports_JobStatusResponse__Output>
  ): grpc.ClientUnaryCall;
  jobStatus(
    argument: _suki_pb_imports_exports_JobStatusRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_imports_exports_JobStatusResponse__Output>
  ): grpc.ClientUnaryCall;
  jobStatus(
    argument: _suki_pb_imports_exports_JobStatusRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_imports_exports_JobStatusResponse__Output>
  ): grpc.ClientUnaryCall;
  jobStatus(
    argument: _suki_pb_imports_exports_JobStatusRequest,
    callback: grpc.requestCallback<_suki_pb_imports_exports_JobStatusResponse__Output>
  ): grpc.ClientUnaryCall;
}

export interface ImportsExportsHandlers extends grpc.UntypedServiceImplementation {
  GetJobs: grpc.handleUnaryCall<
    _suki_pb_imports_exports_GetJobsRequest__Output,
    _suki_pb_imports_exports_GetJobsResponse
  >;

  ImportScheduleJob: grpc.handleUnaryCall<
    _suki_pb_imports_exports_ImportScheduleJobRequest__Output,
    _suki_pb_imports_exports_ImportScheduleJobResponse
  >;

  JobStatus: grpc.handleUnaryCall<
    _suki_pb_imports_exports_JobStatusRequest__Output,
    _suki_pb_imports_exports_JobStatusResponse
  >;
}

export interface ImportsExportsDefinition extends grpc.ServiceDefinition {
  GetJobs: MethodDefinition<
    _suki_pb_imports_exports_GetJobsRequest,
    _suki_pb_imports_exports_GetJobsResponse,
    _suki_pb_imports_exports_GetJobsRequest__Output,
    _suki_pb_imports_exports_GetJobsResponse__Output
  >;
  ImportScheduleJob: MethodDefinition<
    _suki_pb_imports_exports_ImportScheduleJobRequest,
    _suki_pb_imports_exports_ImportScheduleJobResponse,
    _suki_pb_imports_exports_ImportScheduleJobRequest__Output,
    _suki_pb_imports_exports_ImportScheduleJobResponse__Output
  >;
  JobStatus: MethodDefinition<
    _suki_pb_imports_exports_JobStatusRequest,
    _suki_pb_imports_exports_JobStatusResponse,
    _suki_pb_imports_exports_JobStatusRequest__Output,
    _suki_pb_imports_exports_JobStatusResponse__Output
  >;
}
