// Original file: node_modules/protobufs/src/suki/pb/s2/s2.proto

// Original file: node_modules/protobufs/src/suki/pb/s2/s2.proto

export enum _suki_pb_s2_Recommendation_ActionType {
  GET = 0,
  ACCEPT = 1,
  REJECT = 2
}

export interface Recommendation {
  id?: string;
  action_type?: _suki_pb_s2_Recommendation_ActionType | keyof typeof _suki_pb_s2_Recommendation_ActionType;
  type?: string;
  section_id?: string;
  recommended_section_name?: string;
  recommended_content?: string;
}

export interface Recommendation__Output {
  id: string;
  action_type: keyof typeof _suki_pb_s2_Recommendation_ActionType;
  type: string;
  section_id: string;
  recommended_section_name: string;
  recommended_content: string;
}
