// Original file: node_modules/protobufs/src/suki/pb/examples/ms_crud_example.proto

import type {
  CreateThingRequest as _suki_pb_examples_CreateThingRequest,
  CreateThingRequest__Output as _suki_pb_examples_CreateThingRequest__Output
} from "../../../suki/pb/examples/CreateThingRequest";
import type {
  ReadThingRequest as _suki_pb_examples_ReadThingRequest,
  ReadThingRequest__Output as _suki_pb_examples_ReadThingRequest__Output
} from "../../../suki/pb/examples/ReadThingRequest";
import type {
  UpdateThingRequest as _suki_pb_examples_UpdateThingRequest,
  UpdateThingRequest__Output as _suki_pb_examples_UpdateThingRequest__Output
} from "../../../suki/pb/examples/UpdateThingRequest";
import type {
  UpdateOrCreateThingRequest as _suki_pb_examples_UpdateOrCreateThingRequest,
  UpdateOrCreateThingRequest__Output as _suki_pb_examples_UpdateOrCreateThingRequest__Output
} from "../../../suki/pb/examples/UpdateOrCreateThingRequest";
import type {
  DeleteThingRequest as _suki_pb_examples_DeleteThingRequest,
  DeleteThingRequest__Output as _suki_pb_examples_DeleteThingRequest__Output
} from "../../../suki/pb/examples/DeleteThingRequest";

export interface ThingStreamRequest {
  create?: _suki_pb_examples_CreateThingRequest | null;
  read?: _suki_pb_examples_ReadThingRequest | null;
  update?: _suki_pb_examples_UpdateThingRequest | null;
  update_or_create?: _suki_pb_examples_UpdateOrCreateThingRequest | null;
  delete?: _suki_pb_examples_DeleteThingRequest | null;
  request?: "create" | "read" | "update" | "update_or_create" | "delete";
}

export interface ThingStreamRequest__Output {
  create?: _suki_pb_examples_CreateThingRequest__Output | null;
  read?: _suki_pb_examples_ReadThingRequest__Output | null;
  update?: _suki_pb_examples_UpdateThingRequest__Output | null;
  update_or_create?: _suki_pb_examples_UpdateOrCreateThingRequest__Output | null;
  delete?: _suki_pb_examples_DeleteThingRequest__Output | null;
  request: "create" | "read" | "update" | "update_or_create" | "delete";
}
