// Original file: node_modules/protobufs/src/suki/pb/note_recommendation/note_recommendation.proto

import type { ActionType as _suki_pb_note_recommendation_ActionType } from "../../../suki/pb/note_recommendation/ActionType";

export interface GetRequest {
  note_id?: string;
  action_types?: (_suki_pb_note_recommendation_ActionType | keyof typeof _suki_pb_note_recommendation_ActionType)[];
}

export interface GetRequest__Output {
  note_id: string;
  action_types: (keyof typeof _suki_pb_note_recommendation_ActionType)[];
}
