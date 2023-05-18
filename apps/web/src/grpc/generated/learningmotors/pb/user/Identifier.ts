// Original file: node_modules/protobufs/src/learningmotors/pb/user/fhiruser.proto

import type {
  Type as _learningmotors_pb_user_Type,
  Type__Output as _learningmotors_pb_user_Type__Output
} from "../../../learningmotors/pb/user/Type";

export interface Identifier {
  use?: string;
  type?: _learningmotors_pb_user_Type | null;
  system?: string;
  value?: string;
}

export interface Identifier__Output {
  use: string;
  type: _learningmotors_pb_user_Type__Output | null;
  system: string;
  value: string;
}
