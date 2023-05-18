// Original file: node_modules/protobufs/src/suki/pb/note_recommendation/note_recommendation.proto

import type { ActionType as _suki_pb_note_recommendation_ActionType } from "../../../suki/pb/note_recommendation/ActionType";
import type { NoteRecommendationType as _suki_pb_note_recommendation_NoteRecommendationType } from "../../../suki/pb/note_recommendation/NoteRecommendationType";
import type {
  Timestamp as _google_protobuf_Timestamp,
  Timestamp__Output as _google_protobuf_Timestamp__Output
} from "../../../google/protobuf/Timestamp";

export interface NoteRecommendation {
  id?: string;
  organization_id?: string;
  request_id?: string;
  action_type?: _suki_pb_note_recommendation_ActionType | keyof typeof _suki_pb_note_recommendation_ActionType;
  type?:
    | _suki_pb_note_recommendation_NoteRecommendationType
    | keyof typeof _suki_pb_note_recommendation_NoteRecommendationType;
  recommended_content?: string;
  created_at?: _google_protobuf_Timestamp | null;
  updated_at?: _google_protobuf_Timestamp | null;
  note_id?: string;
  user_id?: string;
  patient_id?: string;
  section_id?: string;
}

export interface NoteRecommendation__Output {
  id: string;
  organization_id: string;
  request_id: string;
  action_type: keyof typeof _suki_pb_note_recommendation_ActionType;
  type: keyof typeof _suki_pb_note_recommendation_NoteRecommendationType;
  recommended_content: string;
  created_at: _google_protobuf_Timestamp__Output | null;
  updated_at: _google_protobuf_Timestamp__Output | null;
  note_id: string;
  user_id: string;
  patient_id: string;
  section_id: string;
}
