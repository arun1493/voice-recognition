// Original file: node_modules/protobufs/src/learningmotors/pb/sectionsservice.proto

import type * as grpc from "@grpc/grpc-js";
import type { MethodDefinition } from "@grpc/proto-loader";
import type {
  CreateSectionRequest as _learningmotors_pb_CreateSectionRequest,
  CreateSectionRequest__Output as _learningmotors_pb_CreateSectionRequest__Output
} from "../../learningmotors/pb/CreateSectionRequest";
import type {
  CreateSectionResponse as _learningmotors_pb_CreateSectionResponse,
  CreateSectionResponse__Output as _learningmotors_pb_CreateSectionResponse__Output
} from "../../learningmotors/pb/CreateSectionResponse";
import type {
  DeleteSectionRequest as _learningmotors_pb_DeleteSectionRequest,
  DeleteSectionRequest__Output as _learningmotors_pb_DeleteSectionRequest__Output
} from "../../learningmotors/pb/DeleteSectionRequest";
import type {
  Empty as _google_protobuf_Empty,
  Empty__Output as _google_protobuf_Empty__Output
} from "../../google/protobuf/Empty";
import type {
  GetSectionsRequest as _learningmotors_pb_GetSectionsRequest,
  GetSectionsRequest__Output as _learningmotors_pb_GetSectionsRequest__Output
} from "../../learningmotors/pb/GetSectionsRequest";
import type {
  GetSectionsResponse as _learningmotors_pb_GetSectionsResponse,
  GetSectionsResponse__Output as _learningmotors_pb_GetSectionsResponse__Output
} from "../../learningmotors/pb/GetSectionsResponse";
import type {
  UpdateSectionRequest as _learningmotors_pb_UpdateSectionRequest,
  UpdateSectionRequest__Output as _learningmotors_pb_UpdateSectionRequest__Output
} from "../../learningmotors/pb/UpdateSectionRequest";
import type {
  UpdateSectionResponse as _learningmotors_pb_UpdateSectionResponse,
  UpdateSectionResponse__Output as _learningmotors_pb_UpdateSectionResponse__Output
} from "../../learningmotors/pb/UpdateSectionResponse";

export interface SectionServiceClient extends grpc.Client {
  CreateSection(
    argument: _learningmotors_pb_CreateSectionRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_CreateSectionResponse__Output>
  ): grpc.ClientUnaryCall;
  CreateSection(
    argument: _learningmotors_pb_CreateSectionRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_CreateSectionResponse__Output>
  ): grpc.ClientUnaryCall;
  CreateSection(
    argument: _learningmotors_pb_CreateSectionRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_CreateSectionResponse__Output>
  ): grpc.ClientUnaryCall;
  CreateSection(
    argument: _learningmotors_pb_CreateSectionRequest,
    callback: grpc.requestCallback<_learningmotors_pb_CreateSectionResponse__Output>
  ): grpc.ClientUnaryCall;
  createSection(
    argument: _learningmotors_pb_CreateSectionRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_CreateSectionResponse__Output>
  ): grpc.ClientUnaryCall;
  createSection(
    argument: _learningmotors_pb_CreateSectionRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_CreateSectionResponse__Output>
  ): grpc.ClientUnaryCall;
  createSection(
    argument: _learningmotors_pb_CreateSectionRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_CreateSectionResponse__Output>
  ): grpc.ClientUnaryCall;
  createSection(
    argument: _learningmotors_pb_CreateSectionRequest,
    callback: grpc.requestCallback<_learningmotors_pb_CreateSectionResponse__Output>
  ): grpc.ClientUnaryCall;

  DeleteSections(
    argument: _learningmotors_pb_DeleteSectionRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  DeleteSections(
    argument: _learningmotors_pb_DeleteSectionRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  DeleteSections(
    argument: _learningmotors_pb_DeleteSectionRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  DeleteSections(
    argument: _learningmotors_pb_DeleteSectionRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  deleteSections(
    argument: _learningmotors_pb_DeleteSectionRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  deleteSections(
    argument: _learningmotors_pb_DeleteSectionRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  deleteSections(
    argument: _learningmotors_pb_DeleteSectionRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  deleteSections(
    argument: _learningmotors_pb_DeleteSectionRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;

  GetSections(
    argument: _learningmotors_pb_GetSectionsRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_GetSectionsResponse__Output>
  ): grpc.ClientUnaryCall;
  GetSections(
    argument: _learningmotors_pb_GetSectionsRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_GetSectionsResponse__Output>
  ): grpc.ClientUnaryCall;
  GetSections(
    argument: _learningmotors_pb_GetSectionsRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_GetSectionsResponse__Output>
  ): grpc.ClientUnaryCall;
  GetSections(
    argument: _learningmotors_pb_GetSectionsRequest,
    callback: grpc.requestCallback<_learningmotors_pb_GetSectionsResponse__Output>
  ): grpc.ClientUnaryCall;
  getSections(
    argument: _learningmotors_pb_GetSectionsRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_GetSectionsResponse__Output>
  ): grpc.ClientUnaryCall;
  getSections(
    argument: _learningmotors_pb_GetSectionsRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_GetSectionsResponse__Output>
  ): grpc.ClientUnaryCall;
  getSections(
    argument: _learningmotors_pb_GetSectionsRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_GetSectionsResponse__Output>
  ): grpc.ClientUnaryCall;
  getSections(
    argument: _learningmotors_pb_GetSectionsRequest,
    callback: grpc.requestCallback<_learningmotors_pb_GetSectionsResponse__Output>
  ): grpc.ClientUnaryCall;

  UpdateSection(
    argument: _learningmotors_pb_UpdateSectionRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_UpdateSectionResponse__Output>
  ): grpc.ClientUnaryCall;
  UpdateSection(
    argument: _learningmotors_pb_UpdateSectionRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_UpdateSectionResponse__Output>
  ): grpc.ClientUnaryCall;
  UpdateSection(
    argument: _learningmotors_pb_UpdateSectionRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_UpdateSectionResponse__Output>
  ): grpc.ClientUnaryCall;
  UpdateSection(
    argument: _learningmotors_pb_UpdateSectionRequest,
    callback: grpc.requestCallback<_learningmotors_pb_UpdateSectionResponse__Output>
  ): grpc.ClientUnaryCall;
  updateSection(
    argument: _learningmotors_pb_UpdateSectionRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_UpdateSectionResponse__Output>
  ): grpc.ClientUnaryCall;
  updateSection(
    argument: _learningmotors_pb_UpdateSectionRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_learningmotors_pb_UpdateSectionResponse__Output>
  ): grpc.ClientUnaryCall;
  updateSection(
    argument: _learningmotors_pb_UpdateSectionRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_learningmotors_pb_UpdateSectionResponse__Output>
  ): grpc.ClientUnaryCall;
  updateSection(
    argument: _learningmotors_pb_UpdateSectionRequest,
    callback: grpc.requestCallback<_learningmotors_pb_UpdateSectionResponse__Output>
  ): grpc.ClientUnaryCall;
}

export interface SectionServiceHandlers extends grpc.UntypedServiceImplementation {
  CreateSection: grpc.handleUnaryCall<
    _learningmotors_pb_CreateSectionRequest__Output,
    _learningmotors_pb_CreateSectionResponse
  >;

  DeleteSections: grpc.handleUnaryCall<_learningmotors_pb_DeleteSectionRequest__Output, _google_protobuf_Empty>;

  GetSections: grpc.handleUnaryCall<
    _learningmotors_pb_GetSectionsRequest__Output,
    _learningmotors_pb_GetSectionsResponse
  >;

  UpdateSection: grpc.handleUnaryCall<
    _learningmotors_pb_UpdateSectionRequest__Output,
    _learningmotors_pb_UpdateSectionResponse
  >;
}

export interface SectionServiceDefinition extends grpc.ServiceDefinition {
  CreateSection: MethodDefinition<
    _learningmotors_pb_CreateSectionRequest,
    _learningmotors_pb_CreateSectionResponse,
    _learningmotors_pb_CreateSectionRequest__Output,
    _learningmotors_pb_CreateSectionResponse__Output
  >;
  DeleteSections: MethodDefinition<
    _learningmotors_pb_DeleteSectionRequest,
    _google_protobuf_Empty,
    _learningmotors_pb_DeleteSectionRequest__Output,
    _google_protobuf_Empty__Output
  >;
  GetSections: MethodDefinition<
    _learningmotors_pb_GetSectionsRequest,
    _learningmotors_pb_GetSectionsResponse,
    _learningmotors_pb_GetSectionsRequest__Output,
    _learningmotors_pb_GetSectionsResponse__Output
  >;
  UpdateSection: MethodDefinition<
    _learningmotors_pb_UpdateSectionRequest,
    _learningmotors_pb_UpdateSectionResponse,
    _learningmotors_pb_UpdateSectionRequest__Output,
    _learningmotors_pb_UpdateSectionResponse__Output
  >;
}
