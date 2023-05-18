// Original file: node_modules/protobufs/src/suki/pb/examples/ms_crud_example.proto

import type {
  Thing as _suki_pb_examples_Thing,
  Thing__Output as _suki_pb_examples_Thing__Output
} from "../../../suki/pb/examples/Thing";

export interface ReadThingResponse {
  ok?: boolean;
  things?: _suki_pb_examples_Thing[];
}

export interface ReadThingResponse__Output {
  ok: boolean;
  things: _suki_pb_examples_Thing__Output[];
}
