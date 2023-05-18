// Original file: node_modules/protobufs/src/suki/pb/audit/audit.proto

import type {
  Role as _learningmotors_pb_user_Role,
  Role__Output as _learningmotors_pb_user_Role__Output
} from "../../../learningmotors/pb/user/Role";

export interface Actor {
  actor_id?: string;
  roles?: _learningmotors_pb_user_Role[];
  organization_id?: string;
  ip_address?: string;
  user_agent?: string;
}

export interface Actor__Output {
  actor_id: string;
  roles: _learningmotors_pb_user_Role__Output[];
  organization_id: string;
  ip_address: string;
  user_agent: string;
}
