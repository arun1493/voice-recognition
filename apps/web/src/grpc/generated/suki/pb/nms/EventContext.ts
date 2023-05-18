// Original file: node_modules/protobufs/src/suki/pb/nms/nms_event.proto

import type {
  Metadata as _learningmotors_pb_composer_Metadata,
  Metadata__Output as _learningmotors_pb_composer_Metadata__Output
} from "../../../learningmotors/pb/composer/Metadata";
import type {
  SectionS2 as _learningmotors_pb_composer_SectionS2,
  SectionS2__Output as _learningmotors_pb_composer_SectionS2__Output
} from "../../../learningmotors/pb/composer/SectionS2";
import type {
  Recommendation as _suki_pb_s2_Recommendation,
  Recommendation__Output as _suki_pb_s2_Recommendation__Output
} from "../../../suki/pb/s2/Recommendation";
import type {
  Metadata as _suki_pb_nms_Metadata,
  Metadata__Output as _suki_pb_nms_Metadata__Output
} from "../../../suki/pb/nms/Metadata";
import type {
  Chunk as _suki_pb_nms_Chunk,
  Chunk__Output as _suki_pb_nms_Chunk__Output
} from "../../../suki/pb/nms/Chunk";

export interface EventContext {
  metadata_legacy?: _learningmotors_pb_composer_Metadata | null;
  section_legacy?: _learningmotors_pb_composer_SectionS2 | null;
  note_recommendation?: _suki_pb_s2_Recommendation | null;
  metadata?: _suki_pb_nms_Metadata | null;
  chunk?: _suki_pb_nms_Chunk | null;
  note_id?: string;
  context?: "metadata_legacy" | "section_legacy" | "note_recommendation" | "metadata" | "chunk" | "note_id";
}

export interface EventContext__Output {
  metadata_legacy?: _learningmotors_pb_composer_Metadata__Output | null;
  section_legacy?: _learningmotors_pb_composer_SectionS2__Output | null;
  note_recommendation?: _suki_pb_s2_Recommendation__Output | null;
  metadata?: _suki_pb_nms_Metadata__Output | null;
  chunk?: _suki_pb_nms_Chunk__Output | null;
  note_id?: string;
  context: "metadata_legacy" | "section_legacy" | "note_recommendation" | "metadata" | "chunk" | "note_id";
}
