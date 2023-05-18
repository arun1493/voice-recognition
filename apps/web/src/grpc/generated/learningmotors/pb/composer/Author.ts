// Original file: node_modules/protobufs/src/learningmotors/pb/composer/author.proto

import type {
  Role as _learningmotors_pb_user_Role,
  Role__Output as _learningmotors_pb_user_Role__Output
} from "../../../learningmotors/pb/user/Role";

// Original file: node_modules/protobufs/src/learningmotors/pb/composer/author.proto

export enum _learningmotors_pb_composer_Author_AuthorType {
  UNKNOWN = 0,
  MACHINE = 1,
  USER = 2
}

export interface Author {
  type?: _learningmotors_pb_composer_Author_AuthorType | keyof typeof _learningmotors_pb_composer_Author_AuthorType;
  organization_id?: string;
  user_id?: string;
  role?: _learningmotors_pb_user_Role | null;
}

export interface Author__Output {
  type: keyof typeof _learningmotors_pb_composer_Author_AuthorType;
  organization_id: string;
  user_id: string;
  role: _learningmotors_pb_user_Role__Output | null;
}
