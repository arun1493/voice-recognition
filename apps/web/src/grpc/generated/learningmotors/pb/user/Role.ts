// Original file: node_modules/protobufs/src/learningmotors/pb/user/user.proto

// Original file: node_modules/protobufs/src/learningmotors/pb/user/user.proto

export enum _learningmotors_pb_user_Role_RoleType {
  NO_ACCESS = 0,
  USER = 1,
  SCRIBE = 2,
  ADMIN = 3
}

export interface Role {
  type?: _learningmotors_pb_user_Role_RoleType | keyof typeof _learningmotors_pb_user_Role_RoleType;
}

export interface Role__Output {
  type: keyof typeof _learningmotors_pb_user_Role_RoleType;
}
