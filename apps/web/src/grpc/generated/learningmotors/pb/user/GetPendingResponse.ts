// Original file: node_modules/protobufs/src/learningmotors/pb/user/user.proto

import type {
  PendingUser as _learningmotors_pb_user_PendingUser,
  PendingUser__Output as _learningmotors_pb_user_PendingUser__Output
} from "../../../learningmotors/pb/user/PendingUser";

export interface GetPendingResponse {
  pending_users?: _learningmotors_pb_user_PendingUser[];
}

export interface GetPendingResponse__Output {
  pending_users: _learningmotors_pb_user_PendingUser__Output[];
}
