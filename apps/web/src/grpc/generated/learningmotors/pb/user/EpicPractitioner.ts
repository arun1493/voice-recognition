// Original file: node_modules/protobufs/src/learningmotors/pb/user/fhiruser.proto

import type {
  Identifier as _learningmotors_pb_user_Identifier,
  Identifier__Output as _learningmotors_pb_user_Identifier__Output
} from "../../../learningmotors/pb/user/Identifier";
import type {
  Name as _learningmotors_pb_user_Name,
  Name__Output as _learningmotors_pb_user_Name__Output
} from "../../../learningmotors/pb/user/Name";

export interface EpicPractitioner {
  resource_type?: string;
  id?: string;
  identifier?: _learningmotors_pb_user_Identifier[];
  active?: string;
  name?: _learningmotors_pb_user_Name | null;
}

export interface EpicPractitioner__Output {
  resource_type: string;
  id: string;
  identifier: _learningmotors_pb_user_Identifier__Output[];
  active: string;
  name: _learningmotors_pb_user_Name__Output | null;
}
