// Original file: node_modules/protobufs/src/suki/pb/s2/s2.proto

import type {
  SectionContentById as _suki_pb_s2_SectionContentById,
  SectionContentById__Output as _suki_pb_s2_SectionContentById__Output
} from "../../../suki/pb/s2/SectionContentById";

// Original file: node_modules/protobufs/src/suki/pb/s2/s2.proto

export enum _suki_pb_s2_SectionContentResponse_SectionContentResponseType {
  SCRIPT = 0
}

export interface SectionContentResponse {
  section_content_by_id?: _suki_pb_s2_SectionContentById[];
  response_type?:
    | _suki_pb_s2_SectionContentResponse_SectionContentResponseType
    | keyof typeof _suki_pb_s2_SectionContentResponse_SectionContentResponseType;
}

export interface SectionContentResponse__Output {
  section_content_by_id: _suki_pb_s2_SectionContentById__Output[];
  response_type: keyof typeof _suki_pb_s2_SectionContentResponse_SectionContentResponseType;
}
