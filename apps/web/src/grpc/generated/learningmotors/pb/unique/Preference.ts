// Original file: node_modules/protobufs/src/learningmotors/pb/unique/unique.proto

import type {
  EnumPreference as _learningmotors_pb_unique_EnumPreference,
  EnumPreference__Output as _learningmotors_pb_unique_EnumPreference__Output
} from "../../../learningmotors/pb/unique/EnumPreference";
import type {
  StringPreference as _learningmotors_pb_unique_StringPreference,
  StringPreference__Output as _learningmotors_pb_unique_StringPreference__Output
} from "../../../learningmotors/pb/unique/StringPreference";

export interface Preference {
  id?: string;
  name?: string;
  enum_preference?: _learningmotors_pb_unique_EnumPreference | null;
  string_preference?: _learningmotors_pb_unique_StringPreference | null;
  value?: "enum_preference" | "string_preference";
}

export interface Preference__Output {
  id: string;
  name: string;
  enum_preference?: _learningmotors_pb_unique_EnumPreference__Output | null;
  string_preference?: _learningmotors_pb_unique_StringPreference__Output | null;
  value: "enum_preference" | "string_preference";
}
