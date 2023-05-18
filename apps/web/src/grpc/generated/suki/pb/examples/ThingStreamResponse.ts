// Original file: node_modules/protobufs/src/suki/pb/examples/ms_crud_example.proto

import type {
  CreateThingResponse as _suki_pb_examples_CreateThingResponse,
  CreateThingResponse__Output as _suki_pb_examples_CreateThingResponse__Output
} from "../../../suki/pb/examples/CreateThingResponse";
import type {
  ReadThingResponse as _suki_pb_examples_ReadThingResponse,
  ReadThingResponse__Output as _suki_pb_examples_ReadThingResponse__Output
} from "../../../suki/pb/examples/ReadThingResponse";
import type {
  UpdateThingResponse as _suki_pb_examples_UpdateThingResponse,
  UpdateThingResponse__Output as _suki_pb_examples_UpdateThingResponse__Output
} from "../../../suki/pb/examples/UpdateThingResponse";
import type {
  UpdateOrCreateThingResponse as _suki_pb_examples_UpdateOrCreateThingResponse,
  UpdateOrCreateThingResponse__Output as _suki_pb_examples_UpdateOrCreateThingResponse__Output
} from "../../../suki/pb/examples/UpdateOrCreateThingResponse";
import type {
  DeleteThingResponse as _suki_pb_examples_DeleteThingResponse,
  DeleteThingResponse__Output as _suki_pb_examples_DeleteThingResponse__Output
} from "../../../suki/pb/examples/DeleteThingResponse";

export interface ThingStreamResponse {
  create?: _suki_pb_examples_CreateThingResponse | null;
  read?: _suki_pb_examples_ReadThingResponse | null;
  update?: _suki_pb_examples_UpdateThingResponse | null;
  update_or_create?: _suki_pb_examples_UpdateOrCreateThingResponse | null;
  delete?: _suki_pb_examples_DeleteThingResponse | null;
  request?: "create" | "read" | "update" | "update_or_create" | "delete";
}

export interface ThingStreamResponse__Output {
  create?: _suki_pb_examples_CreateThingResponse__Output | null;
  read?: _suki_pb_examples_ReadThingResponse__Output | null;
  update?: _suki_pb_examples_UpdateThingResponse__Output | null;
  update_or_create?: _suki_pb_examples_UpdateOrCreateThingResponse__Output | null;
  delete?: _suki_pb_examples_DeleteThingResponse__Output | null;
  request: "create" | "read" | "update" | "update_or_create" | "delete";
}
