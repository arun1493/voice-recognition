// Original file: node_modules/protobufs/src/learningmotors/pb/lighthouse.proto

// Original file: node_modules/protobufs/src/learningmotors/pb/lighthouse.proto

export enum _learningmotors_pb_Statistics_GraphType {
  BAR_GRAPH = 0,
  PIE_CHART = 1
}

export interface Statistics {
  type?: _learningmotors_pb_Statistics_GraphType | keyof typeof _learningmotors_pb_Statistics_GraphType;
  json_data?: string;
}

export interface Statistics__Output {
  type: keyof typeof _learningmotors_pb_Statistics_GraphType;
  json_data: string;
}
