// Original file: node_modules/protobufs/src/suki/pb/sms/sms.proto

import type {
  Composition as _learningmotors_pb_composer_Composition,
  Composition__Output as _learningmotors_pb_composer_Composition__Output
} from "../../../learningmotors/pb/composer/Composition";
import type {
  Timestamp as _google_protobuf_Timestamp,
  Timestamp__Output as _google_protobuf_Timestamp__Output
} from "../../../google/protobuf/Timestamp";

export interface CreateCompositionRequest {
  composition?: _learningmotors_pb_composer_Composition | null;
  request_sent_time?: _google_protobuf_Timestamp | null;
}

export interface CreateCompositionRequest__Output {
  composition: _learningmotors_pb_composer_Composition__Output | null;
  request_sent_time: _google_protobuf_Timestamp__Output | null;
}
