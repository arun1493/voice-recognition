// Original file: node_modules/protobufs/src/learningmotors/pb/common/person.proto

import type {
  Timestamp as _google_protobuf_Timestamp,
  Timestamp__Output as _google_protobuf_Timestamp__Output
} from "../../../google/protobuf/Timestamp";

// Original file: node_modules/protobufs/src/learningmotors/pb/common/person.proto

export enum _learningmotors_pb_common_Person_Gender {
  UNKNOWN = 0,
  FEMALE = 1,
  MALE = 2
}

export interface Person {
  first_name?: string;
  middle_name?: string;
  last_name?: string;
  prefix?: string;
  gender?: _learningmotors_pb_common_Person_Gender | keyof typeof _learningmotors_pb_common_Person_Gender;
  dob?: _google_protobuf_Timestamp | null;
  suffix?: string;
}

export interface Person__Output {
  first_name: string;
  middle_name: string;
  last_name: string;
  prefix: string;
  gender: keyof typeof _learningmotors_pb_common_Person_Gender;
  dob: _google_protobuf_Timestamp__Output | null;
  suffix: string;
}
