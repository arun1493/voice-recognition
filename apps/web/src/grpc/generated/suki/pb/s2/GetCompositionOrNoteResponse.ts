// Original file: node_modules/protobufs/src/suki/pb/s2/s2.proto

import type {
  Composition as _learningmotors_pb_composer_Composition,
  Composition__Output as _learningmotors_pb_composer_Composition__Output
} from "../../../learningmotors/pb/composer/Composition";
import type {
  Note as _learningmotors_pb_patientnotes_Note,
  Note__Output as _learningmotors_pb_patientnotes_Note__Output
} from "../../../learningmotors/pb/patientnotes/Note";

export interface GetCompositionOrNoteResponse {
  composition?: _learningmotors_pb_composer_Composition | null;
  note?: _learningmotors_pb_patientnotes_Note | null;
  composition_or_note?: "composition" | "note";
}

export interface GetCompositionOrNoteResponse__Output {
  composition?: _learningmotors_pb_composer_Composition__Output | null;
  note?: _learningmotors_pb_patientnotes_Note__Output | null;
  composition_or_note: "composition" | "note";
}
