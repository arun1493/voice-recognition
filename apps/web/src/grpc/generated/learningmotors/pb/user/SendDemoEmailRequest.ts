// Original file: node_modules/protobufs/src/learningmotors/pb/user/user.proto

import type {
  User as _learningmotors_pb_user_User,
  User__Output as _learningmotors_pb_user_User__Output
} from "../../../learningmotors/pb/user/User";

export interface SendDemoEmailRequest {
  user?: _learningmotors_pb_user_User | null;
  org_id?: string;
}

export interface SendDemoEmailRequest__Output {
  user: _learningmotors_pb_user_User__Output | null;
  org_id: string;
}
