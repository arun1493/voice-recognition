// Original file: node_modules/protobufs/src/suki/pb/s2/s2.proto

import type {
  Intent as _learningmotors_pb_idl_Intent,
  Intent__Output as _learningmotors_pb_idl_Intent__Output
} from "../../../learningmotors/pb/idl/Intent";
import type { Error as _suki_pb_s2_Error, Error__Output as _suki_pb_s2_Error__Output } from "../../../suki/pb/s2/Error";
import type {
  SectionResponse as _suki_pb_s2_SectionResponse,
  SectionResponse__Output as _suki_pb_s2_SectionResponse__Output
} from "../../../suki/pb/s2/SectionResponse";
import type {
  ServerResponse as _suki_pb_s2_ServerResponse,
  ServerResponse__Output as _suki_pb_s2_ServerResponse__Output
} from "../../../suki/pb/s2/ServerResponse";
import type {
  ServerSubmissionResponse as _suki_pb_s2_ServerSubmissionResponse,
  ServerSubmissionResponse__Output as _suki_pb_s2_ServerSubmissionResponse__Output
} from "../../../suki/pb/s2/ServerSubmissionResponse";
import type {
  DeleteCompositionResponse as _suki_pb_s2_DeleteCompositionResponse,
  DeleteCompositionResponse__Output as _suki_pb_s2_DeleteCompositionResponse__Output
} from "../../../suki/pb/s2/DeleteCompositionResponse";
import type {
  GetCompositionOrNoteResponse as _suki_pb_s2_GetCompositionOrNoteResponse,
  GetCompositionOrNoteResponse__Output as _suki_pb_s2_GetCompositionOrNoteResponse__Output
} from "../../../suki/pb/s2/GetCompositionOrNoteResponse";
import type {
  SectionContentResponse as _suki_pb_s2_SectionContentResponse,
  SectionContentResponse__Output as _suki_pb_s2_SectionContentResponse__Output
} from "../../../suki/pb/s2/SectionContentResponse";
import type {
  RecommendationResponse as _suki_pb_s2_RecommendationResponse,
  RecommendationResponse__Output as _suki_pb_s2_RecommendationResponse__Output
} from "../../../suki/pb/s2/RecommendationResponse";

// Original file: node_modules/protobufs/src/suki/pb/s2/s2.proto

export enum _suki_pb_s2_DialogResponse_Notification {
  AUDIO_PROCESSED = 0,
  CURSOR_ACKNOWLEDGED = 1
}

export interface DialogResponse {
  intent?: _learningmotors_pb_idl_Intent | null;
  error?: _suki_pb_s2_Error | null;
  section_response?: _suki_pb_s2_SectionResponse | null;
  notification?: _suki_pb_s2_DialogResponse_Notification | keyof typeof _suki_pb_s2_DialogResponse_Notification;
  server_response?: _suki_pb_s2_ServerResponse | null;
  server_submit_composition_response?: _suki_pb_s2_ServerSubmissionResponse | null;
  delete_composition_response?: _suki_pb_s2_DeleteCompositionResponse | null;
  get_composition_or_note_response?: _suki_pb_s2_GetCompositionOrNoteResponse | null;
  section_content_response?: _suki_pb_s2_SectionContentResponse | null;
  recommendation_response?: _suki_pb_s2_RecommendationResponse | null;
  response?:
    | "intent"
    | "error"
    | "section_response"
    | "notification"
    | "server_response"
    | "server_submit_composition_response"
    | "delete_composition_response"
    | "get_composition_or_note_response"
    | "section_content_response"
    | "recommendation_response";
}

export interface DialogResponse__Output {
  intent?: _learningmotors_pb_idl_Intent__Output | null;
  error?: _suki_pb_s2_Error__Output | null;
  section_response?: _suki_pb_s2_SectionResponse__Output | null;
  notification?: keyof typeof _suki_pb_s2_DialogResponse_Notification;
  server_response?: _suki_pb_s2_ServerResponse__Output | null;
  server_submit_composition_response?: _suki_pb_s2_ServerSubmissionResponse__Output | null;
  delete_composition_response?: _suki_pb_s2_DeleteCompositionResponse__Output | null;
  get_composition_or_note_response?: _suki_pb_s2_GetCompositionOrNoteResponse__Output | null;
  section_content_response?: _suki_pb_s2_SectionContentResponse__Output | null;
  recommendation_response?: _suki_pb_s2_RecommendationResponse__Output | null;
  response:
    | "intent"
    | "error"
    | "section_response"
    | "notification"
    | "server_response"
    | "server_submit_composition_response"
    | "delete_composition_response"
    | "get_composition_or_note_response"
    | "section_content_response"
    | "recommendation_response";
}
