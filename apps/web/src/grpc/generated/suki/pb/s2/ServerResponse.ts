// Original file: node_modules/protobufs/src/suki/pb/s2/s2.proto

import type {
  CompositionCreatedResponse as _suki_pb_s2_CompositionCreatedResponse,
  CompositionCreatedResponse__Output as _suki_pb_s2_CompositionCreatedResponse__Output
} from "../../../suki/pb/s2/CompositionCreatedResponse";
import type {
  CompositionResponse as _suki_pb_s2_CompositionResponse,
  CompositionResponse__Output as _suki_pb_s2_CompositionResponse__Output
} from "../../../suki/pb/s2/CompositionResponse";

// Original file: node_modules/protobufs/src/suki/pb/s2/s2.proto

export enum _suki_pb_s2_ServerResponse_ResponseType {
  SUCCESS = 0,
  FAILURE = 1
}

export interface ServerResponse {
  response_type?: _suki_pb_s2_ServerResponse_ResponseType | keyof typeof _suki_pb_s2_ServerResponse_ResponseType;
  composition_created_response?: _suki_pb_s2_CompositionCreatedResponse | null;
  composition_response?: _suki_pb_s2_CompositionResponse | null;
}

export interface ServerResponse__Output {
  response_type: keyof typeof _suki_pb_s2_ServerResponse_ResponseType;
  composition_created_response: _suki_pb_s2_CompositionCreatedResponse__Output | null;
  composition_response: _suki_pb_s2_CompositionResponse__Output | null;
}
