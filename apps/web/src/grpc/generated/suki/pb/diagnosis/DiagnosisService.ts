// Original file: node_modules/protobufs/src/suki/pb/diagnosis/diagnosis.proto

import type * as grpc from "@grpc/grpc-js";
import type { MethodDefinition } from "@grpc/proto-loader";
import type {
  GetHCCSuggestionsRequest as _suki_pb_diagnosis_GetHCCSuggestionsRequest,
  GetHCCSuggestionsRequest__Output as _suki_pb_diagnosis_GetHCCSuggestionsRequest__Output
} from "../../../suki/pb/diagnosis/GetHCCSuggestionsRequest";
import type {
  GetHCCSuggestionsResponse as _suki_pb_diagnosis_GetHCCSuggestionsResponse,
  GetHCCSuggestionsResponse__Output as _suki_pb_diagnosis_GetHCCSuggestionsResponse__Output
} from "../../../suki/pb/diagnosis/GetHCCSuggestionsResponse";
import type {
  LookupEDGRequest as _suki_pb_diagnosis_LookupEDGRequest,
  LookupEDGRequest__Output as _suki_pb_diagnosis_LookupEDGRequest__Output
} from "../../../suki/pb/diagnosis/LookupEDGRequest";
import type {
  LookupEDGResponse as _suki_pb_diagnosis_LookupEDGResponse,
  LookupEDGResponse__Output as _suki_pb_diagnosis_LookupEDGResponse__Output
} from "../../../suki/pb/diagnosis/LookupEDGResponse";
import type {
  SearchMLRequest as _suki_pb_diagnosis_SearchMLRequest,
  SearchMLRequest__Output as _suki_pb_diagnosis_SearchMLRequest__Output
} from "../../../suki/pb/diagnosis/SearchMLRequest";
import type {
  SearchMLResponse as _suki_pb_diagnosis_SearchMLResponse,
  SearchMLResponse__Output as _suki_pb_diagnosis_SearchMLResponse__Output
} from "../../../suki/pb/diagnosis/SearchMLResponse";

export interface DiagnosisServiceClient extends grpc.Client {
  GetHCCSuggestions(
    argument: _suki_pb_diagnosis_GetHCCSuggestionsRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_diagnosis_GetHCCSuggestionsResponse__Output>
  ): grpc.ClientUnaryCall;
  GetHCCSuggestions(
    argument: _suki_pb_diagnosis_GetHCCSuggestionsRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_diagnosis_GetHCCSuggestionsResponse__Output>
  ): grpc.ClientUnaryCall;
  GetHCCSuggestions(
    argument: _suki_pb_diagnosis_GetHCCSuggestionsRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_diagnosis_GetHCCSuggestionsResponse__Output>
  ): grpc.ClientUnaryCall;
  GetHCCSuggestions(
    argument: _suki_pb_diagnosis_GetHCCSuggestionsRequest,
    callback: grpc.requestCallback<_suki_pb_diagnosis_GetHCCSuggestionsResponse__Output>
  ): grpc.ClientUnaryCall;
  getHccSuggestions(
    argument: _suki_pb_diagnosis_GetHCCSuggestionsRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_diagnosis_GetHCCSuggestionsResponse__Output>
  ): grpc.ClientUnaryCall;
  getHccSuggestions(
    argument: _suki_pb_diagnosis_GetHCCSuggestionsRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_diagnosis_GetHCCSuggestionsResponse__Output>
  ): grpc.ClientUnaryCall;
  getHccSuggestions(
    argument: _suki_pb_diagnosis_GetHCCSuggestionsRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_diagnosis_GetHCCSuggestionsResponse__Output>
  ): grpc.ClientUnaryCall;
  getHccSuggestions(
    argument: _suki_pb_diagnosis_GetHCCSuggestionsRequest,
    callback: grpc.requestCallback<_suki_pb_diagnosis_GetHCCSuggestionsResponse__Output>
  ): grpc.ClientUnaryCall;

  LookupEDG(
    argument: _suki_pb_diagnosis_LookupEDGRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_diagnosis_LookupEDGResponse__Output>
  ): grpc.ClientUnaryCall;
  LookupEDG(
    argument: _suki_pb_diagnosis_LookupEDGRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_diagnosis_LookupEDGResponse__Output>
  ): grpc.ClientUnaryCall;
  LookupEDG(
    argument: _suki_pb_diagnosis_LookupEDGRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_diagnosis_LookupEDGResponse__Output>
  ): grpc.ClientUnaryCall;
  LookupEDG(
    argument: _suki_pb_diagnosis_LookupEDGRequest,
    callback: grpc.requestCallback<_suki_pb_diagnosis_LookupEDGResponse__Output>
  ): grpc.ClientUnaryCall;
  lookupEdg(
    argument: _suki_pb_diagnosis_LookupEDGRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_diagnosis_LookupEDGResponse__Output>
  ): grpc.ClientUnaryCall;
  lookupEdg(
    argument: _suki_pb_diagnosis_LookupEDGRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_diagnosis_LookupEDGResponse__Output>
  ): grpc.ClientUnaryCall;
  lookupEdg(
    argument: _suki_pb_diagnosis_LookupEDGRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_diagnosis_LookupEDGResponse__Output>
  ): grpc.ClientUnaryCall;
  lookupEdg(
    argument: _suki_pb_diagnosis_LookupEDGRequest,
    callback: grpc.requestCallback<_suki_pb_diagnosis_LookupEDGResponse__Output>
  ): grpc.ClientUnaryCall;

  SearchML(
    argument: _suki_pb_diagnosis_SearchMLRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_diagnosis_SearchMLResponse__Output>
  ): grpc.ClientUnaryCall;
  SearchML(
    argument: _suki_pb_diagnosis_SearchMLRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_diagnosis_SearchMLResponse__Output>
  ): grpc.ClientUnaryCall;
  SearchML(
    argument: _suki_pb_diagnosis_SearchMLRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_diagnosis_SearchMLResponse__Output>
  ): grpc.ClientUnaryCall;
  SearchML(
    argument: _suki_pb_diagnosis_SearchMLRequest,
    callback: grpc.requestCallback<_suki_pb_diagnosis_SearchMLResponse__Output>
  ): grpc.ClientUnaryCall;
  searchMl(
    argument: _suki_pb_diagnosis_SearchMLRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_diagnosis_SearchMLResponse__Output>
  ): grpc.ClientUnaryCall;
  searchMl(
    argument: _suki_pb_diagnosis_SearchMLRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_diagnosis_SearchMLResponse__Output>
  ): grpc.ClientUnaryCall;
  searchMl(
    argument: _suki_pb_diagnosis_SearchMLRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_diagnosis_SearchMLResponse__Output>
  ): grpc.ClientUnaryCall;
  searchMl(
    argument: _suki_pb_diagnosis_SearchMLRequest,
    callback: grpc.requestCallback<_suki_pb_diagnosis_SearchMLResponse__Output>
  ): grpc.ClientUnaryCall;
}

export interface DiagnosisServiceHandlers extends grpc.UntypedServiceImplementation {
  GetHCCSuggestions: grpc.handleUnaryCall<
    _suki_pb_diagnosis_GetHCCSuggestionsRequest__Output,
    _suki_pb_diagnosis_GetHCCSuggestionsResponse
  >;

  LookupEDG: grpc.handleUnaryCall<_suki_pb_diagnosis_LookupEDGRequest__Output, _suki_pb_diagnosis_LookupEDGResponse>;

  SearchML: grpc.handleUnaryCall<_suki_pb_diagnosis_SearchMLRequest__Output, _suki_pb_diagnosis_SearchMLResponse>;
}

export interface DiagnosisServiceDefinition extends grpc.ServiceDefinition {
  GetHCCSuggestions: MethodDefinition<
    _suki_pb_diagnosis_GetHCCSuggestionsRequest,
    _suki_pb_diagnosis_GetHCCSuggestionsResponse,
    _suki_pb_diagnosis_GetHCCSuggestionsRequest__Output,
    _suki_pb_diagnosis_GetHCCSuggestionsResponse__Output
  >;
  LookupEDG: MethodDefinition<
    _suki_pb_diagnosis_LookupEDGRequest,
    _suki_pb_diagnosis_LookupEDGResponse,
    _suki_pb_diagnosis_LookupEDGRequest__Output,
    _suki_pb_diagnosis_LookupEDGResponse__Output
  >;
  SearchML: MethodDefinition<
    _suki_pb_diagnosis_SearchMLRequest,
    _suki_pb_diagnosis_SearchMLResponse,
    _suki_pb_diagnosis_SearchMLRequest__Output,
    _suki_pb_diagnosis_SearchMLResponse__Output
  >;
}
