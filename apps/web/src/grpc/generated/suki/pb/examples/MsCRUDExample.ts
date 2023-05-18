// Original file: node_modules/protobufs/src/suki/pb/examples/ms_crud_example.proto

import type * as grpc from "@grpc/grpc-js";
import type { MethodDefinition } from "@grpc/proto-loader";
import type {
  CreateThingRequest as _suki_pb_examples_CreateThingRequest,
  CreateThingRequest__Output as _suki_pb_examples_CreateThingRequest__Output
} from "../../../suki/pb/examples/CreateThingRequest";
import type {
  CreateThingResponse as _suki_pb_examples_CreateThingResponse,
  CreateThingResponse__Output as _suki_pb_examples_CreateThingResponse__Output
} from "../../../suki/pb/examples/CreateThingResponse";
import type {
  DeleteThingRequest as _suki_pb_examples_DeleteThingRequest,
  DeleteThingRequest__Output as _suki_pb_examples_DeleteThingRequest__Output
} from "../../../suki/pb/examples/DeleteThingRequest";
import type {
  DeleteThingResponse as _suki_pb_examples_DeleteThingResponse,
  DeleteThingResponse__Output as _suki_pb_examples_DeleteThingResponse__Output
} from "../../../suki/pb/examples/DeleteThingResponse";
import type {
  ReadThingRequest as _suki_pb_examples_ReadThingRequest,
  ReadThingRequest__Output as _suki_pb_examples_ReadThingRequest__Output
} from "../../../suki/pb/examples/ReadThingRequest";
import type {
  ReadThingResponse as _suki_pb_examples_ReadThingResponse,
  ReadThingResponse__Output as _suki_pb_examples_ReadThingResponse__Output
} from "../../../suki/pb/examples/ReadThingResponse";
import type {
  ThingStreamRequest as _suki_pb_examples_ThingStreamRequest,
  ThingStreamRequest__Output as _suki_pb_examples_ThingStreamRequest__Output
} from "../../../suki/pb/examples/ThingStreamRequest";
import type {
  ThingStreamResponse as _suki_pb_examples_ThingStreamResponse,
  ThingStreamResponse__Output as _suki_pb_examples_ThingStreamResponse__Output
} from "../../../suki/pb/examples/ThingStreamResponse";
import type {
  UpdateOrCreateThingRequest as _suki_pb_examples_UpdateOrCreateThingRequest,
  UpdateOrCreateThingRequest__Output as _suki_pb_examples_UpdateOrCreateThingRequest__Output
} from "../../../suki/pb/examples/UpdateOrCreateThingRequest";
import type {
  UpdateOrCreateThingResponse as _suki_pb_examples_UpdateOrCreateThingResponse,
  UpdateOrCreateThingResponse__Output as _suki_pb_examples_UpdateOrCreateThingResponse__Output
} from "../../../suki/pb/examples/UpdateOrCreateThingResponse";
import type {
  UpdateThingRequest as _suki_pb_examples_UpdateThingRequest,
  UpdateThingRequest__Output as _suki_pb_examples_UpdateThingRequest__Output
} from "../../../suki/pb/examples/UpdateThingRequest";
import type {
  UpdateThingResponse as _suki_pb_examples_UpdateThingResponse,
  UpdateThingResponse__Output as _suki_pb_examples_UpdateThingResponse__Output
} from "../../../suki/pb/examples/UpdateThingResponse";

export interface MsCRUDExampleClient extends grpc.Client {
  CreateThing(
    argument: _suki_pb_examples_CreateThingRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_examples_CreateThingResponse__Output>
  ): grpc.ClientUnaryCall;
  CreateThing(
    argument: _suki_pb_examples_CreateThingRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_examples_CreateThingResponse__Output>
  ): grpc.ClientUnaryCall;
  CreateThing(
    argument: _suki_pb_examples_CreateThingRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_examples_CreateThingResponse__Output>
  ): grpc.ClientUnaryCall;
  CreateThing(
    argument: _suki_pb_examples_CreateThingRequest,
    callback: grpc.requestCallback<_suki_pb_examples_CreateThingResponse__Output>
  ): grpc.ClientUnaryCall;
  createThing(
    argument: _suki_pb_examples_CreateThingRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_examples_CreateThingResponse__Output>
  ): grpc.ClientUnaryCall;
  createThing(
    argument: _suki_pb_examples_CreateThingRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_examples_CreateThingResponse__Output>
  ): grpc.ClientUnaryCall;
  createThing(
    argument: _suki_pb_examples_CreateThingRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_examples_CreateThingResponse__Output>
  ): grpc.ClientUnaryCall;
  createThing(
    argument: _suki_pb_examples_CreateThingRequest,
    callback: grpc.requestCallback<_suki_pb_examples_CreateThingResponse__Output>
  ): grpc.ClientUnaryCall;

  DeleteThing(
    argument: _suki_pb_examples_DeleteThingRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_examples_DeleteThingResponse__Output>
  ): grpc.ClientUnaryCall;
  DeleteThing(
    argument: _suki_pb_examples_DeleteThingRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_examples_DeleteThingResponse__Output>
  ): grpc.ClientUnaryCall;
  DeleteThing(
    argument: _suki_pb_examples_DeleteThingRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_examples_DeleteThingResponse__Output>
  ): grpc.ClientUnaryCall;
  DeleteThing(
    argument: _suki_pb_examples_DeleteThingRequest,
    callback: grpc.requestCallback<_suki_pb_examples_DeleteThingResponse__Output>
  ): grpc.ClientUnaryCall;
  deleteThing(
    argument: _suki_pb_examples_DeleteThingRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_examples_DeleteThingResponse__Output>
  ): grpc.ClientUnaryCall;
  deleteThing(
    argument: _suki_pb_examples_DeleteThingRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_examples_DeleteThingResponse__Output>
  ): grpc.ClientUnaryCall;
  deleteThing(
    argument: _suki_pb_examples_DeleteThingRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_examples_DeleteThingResponse__Output>
  ): grpc.ClientUnaryCall;
  deleteThing(
    argument: _suki_pb_examples_DeleteThingRequest,
    callback: grpc.requestCallback<_suki_pb_examples_DeleteThingResponse__Output>
  ): grpc.ClientUnaryCall;

  ReadThing(
    argument: _suki_pb_examples_ReadThingRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_examples_ReadThingResponse__Output>
  ): grpc.ClientUnaryCall;
  ReadThing(
    argument: _suki_pb_examples_ReadThingRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_examples_ReadThingResponse__Output>
  ): grpc.ClientUnaryCall;
  ReadThing(
    argument: _suki_pb_examples_ReadThingRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_examples_ReadThingResponse__Output>
  ): grpc.ClientUnaryCall;
  ReadThing(
    argument: _suki_pb_examples_ReadThingRequest,
    callback: grpc.requestCallback<_suki_pb_examples_ReadThingResponse__Output>
  ): grpc.ClientUnaryCall;
  readThing(
    argument: _suki_pb_examples_ReadThingRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_examples_ReadThingResponse__Output>
  ): grpc.ClientUnaryCall;
  readThing(
    argument: _suki_pb_examples_ReadThingRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_examples_ReadThingResponse__Output>
  ): grpc.ClientUnaryCall;
  readThing(
    argument: _suki_pb_examples_ReadThingRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_examples_ReadThingResponse__Output>
  ): grpc.ClientUnaryCall;
  readThing(
    argument: _suki_pb_examples_ReadThingRequest,
    callback: grpc.requestCallback<_suki_pb_examples_ReadThingResponse__Output>
  ): grpc.ClientUnaryCall;

  ThingStream(
    metadata: grpc.Metadata,
    options?: grpc.CallOptions
  ): grpc.ClientDuplexStream<_suki_pb_examples_ThingStreamRequest, _suki_pb_examples_ThingStreamResponse__Output>;
  ThingStream(
    options?: grpc.CallOptions
  ): grpc.ClientDuplexStream<_suki_pb_examples_ThingStreamRequest, _suki_pb_examples_ThingStreamResponse__Output>;
  thingStream(
    metadata: grpc.Metadata,
    options?: grpc.CallOptions
  ): grpc.ClientDuplexStream<_suki_pb_examples_ThingStreamRequest, _suki_pb_examples_ThingStreamResponse__Output>;
  thingStream(
    options?: grpc.CallOptions
  ): grpc.ClientDuplexStream<_suki_pb_examples_ThingStreamRequest, _suki_pb_examples_ThingStreamResponse__Output>;

  UpdateOrCreateThing(
    argument: _suki_pb_examples_UpdateOrCreateThingRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_examples_UpdateOrCreateThingResponse__Output>
  ): grpc.ClientUnaryCall;
  UpdateOrCreateThing(
    argument: _suki_pb_examples_UpdateOrCreateThingRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_examples_UpdateOrCreateThingResponse__Output>
  ): grpc.ClientUnaryCall;
  UpdateOrCreateThing(
    argument: _suki_pb_examples_UpdateOrCreateThingRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_examples_UpdateOrCreateThingResponse__Output>
  ): grpc.ClientUnaryCall;
  UpdateOrCreateThing(
    argument: _suki_pb_examples_UpdateOrCreateThingRequest,
    callback: grpc.requestCallback<_suki_pb_examples_UpdateOrCreateThingResponse__Output>
  ): grpc.ClientUnaryCall;
  updateOrCreateThing(
    argument: _suki_pb_examples_UpdateOrCreateThingRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_examples_UpdateOrCreateThingResponse__Output>
  ): grpc.ClientUnaryCall;
  updateOrCreateThing(
    argument: _suki_pb_examples_UpdateOrCreateThingRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_examples_UpdateOrCreateThingResponse__Output>
  ): grpc.ClientUnaryCall;
  updateOrCreateThing(
    argument: _suki_pb_examples_UpdateOrCreateThingRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_examples_UpdateOrCreateThingResponse__Output>
  ): grpc.ClientUnaryCall;
  updateOrCreateThing(
    argument: _suki_pb_examples_UpdateOrCreateThingRequest,
    callback: grpc.requestCallback<_suki_pb_examples_UpdateOrCreateThingResponse__Output>
  ): grpc.ClientUnaryCall;

  UpdateThing(
    argument: _suki_pb_examples_UpdateThingRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_examples_UpdateThingResponse__Output>
  ): grpc.ClientUnaryCall;
  UpdateThing(
    argument: _suki_pb_examples_UpdateThingRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_examples_UpdateThingResponse__Output>
  ): grpc.ClientUnaryCall;
  UpdateThing(
    argument: _suki_pb_examples_UpdateThingRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_examples_UpdateThingResponse__Output>
  ): grpc.ClientUnaryCall;
  UpdateThing(
    argument: _suki_pb_examples_UpdateThingRequest,
    callback: grpc.requestCallback<_suki_pb_examples_UpdateThingResponse__Output>
  ): grpc.ClientUnaryCall;
  updateThing(
    argument: _suki_pb_examples_UpdateThingRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_examples_UpdateThingResponse__Output>
  ): grpc.ClientUnaryCall;
  updateThing(
    argument: _suki_pb_examples_UpdateThingRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_examples_UpdateThingResponse__Output>
  ): grpc.ClientUnaryCall;
  updateThing(
    argument: _suki_pb_examples_UpdateThingRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_examples_UpdateThingResponse__Output>
  ): grpc.ClientUnaryCall;
  updateThing(
    argument: _suki_pb_examples_UpdateThingRequest,
    callback: grpc.requestCallback<_suki_pb_examples_UpdateThingResponse__Output>
  ): grpc.ClientUnaryCall;
}

export interface MsCRUDExampleHandlers extends grpc.UntypedServiceImplementation {
  CreateThing: grpc.handleUnaryCall<
    _suki_pb_examples_CreateThingRequest__Output,
    _suki_pb_examples_CreateThingResponse
  >;

  DeleteThing: grpc.handleUnaryCall<
    _suki_pb_examples_DeleteThingRequest__Output,
    _suki_pb_examples_DeleteThingResponse
  >;

  ReadThing: grpc.handleUnaryCall<_suki_pb_examples_ReadThingRequest__Output, _suki_pb_examples_ReadThingResponse>;

  ThingStream: grpc.handleBidiStreamingCall<
    _suki_pb_examples_ThingStreamRequest__Output,
    _suki_pb_examples_ThingStreamResponse
  >;

  UpdateOrCreateThing: grpc.handleUnaryCall<
    _suki_pb_examples_UpdateOrCreateThingRequest__Output,
    _suki_pb_examples_UpdateOrCreateThingResponse
  >;

  UpdateThing: grpc.handleUnaryCall<
    _suki_pb_examples_UpdateThingRequest__Output,
    _suki_pb_examples_UpdateThingResponse
  >;
}

export interface MsCRUDExampleDefinition extends grpc.ServiceDefinition {
  CreateThing: MethodDefinition<
    _suki_pb_examples_CreateThingRequest,
    _suki_pb_examples_CreateThingResponse,
    _suki_pb_examples_CreateThingRequest__Output,
    _suki_pb_examples_CreateThingResponse__Output
  >;
  DeleteThing: MethodDefinition<
    _suki_pb_examples_DeleteThingRequest,
    _suki_pb_examples_DeleteThingResponse,
    _suki_pb_examples_DeleteThingRequest__Output,
    _suki_pb_examples_DeleteThingResponse__Output
  >;
  ReadThing: MethodDefinition<
    _suki_pb_examples_ReadThingRequest,
    _suki_pb_examples_ReadThingResponse,
    _suki_pb_examples_ReadThingRequest__Output,
    _suki_pb_examples_ReadThingResponse__Output
  >;
  ThingStream: MethodDefinition<
    _suki_pb_examples_ThingStreamRequest,
    _suki_pb_examples_ThingStreamResponse,
    _suki_pb_examples_ThingStreamRequest__Output,
    _suki_pb_examples_ThingStreamResponse__Output
  >;
  UpdateOrCreateThing: MethodDefinition<
    _suki_pb_examples_UpdateOrCreateThingRequest,
    _suki_pb_examples_UpdateOrCreateThingResponse,
    _suki_pb_examples_UpdateOrCreateThingRequest__Output,
    _suki_pb_examples_UpdateOrCreateThingResponse__Output
  >;
  UpdateThing: MethodDefinition<
    _suki_pb_examples_UpdateThingRequest,
    _suki_pb_examples_UpdateThingResponse,
    _suki_pb_examples_UpdateThingRequest__Output,
    _suki_pb_examples_UpdateThingResponse__Output
  >;
}
