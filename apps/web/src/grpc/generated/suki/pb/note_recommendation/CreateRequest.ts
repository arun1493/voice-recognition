// Original file: node_modules/protobufs/src/suki/pb/note_recommendation/note_recommendation.proto

import type {
  NoteRecommendation as _suki_pb_note_recommendation_NoteRecommendation,
  NoteRecommendation__Output as _suki_pb_note_recommendation_NoteRecommendation__Output
} from "../../../suki/pb/note_recommendation/NoteRecommendation";

export interface CreateRequest {
  recommendations?: _suki_pb_note_recommendation_NoteRecommendation[];
}

export interface CreateRequest__Output {
  recommendations: _suki_pb_note_recommendation_NoteRecommendation__Output[];
}
