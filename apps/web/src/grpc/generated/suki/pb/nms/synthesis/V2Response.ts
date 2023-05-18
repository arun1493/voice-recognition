// Original file: node_modules/protobufs/src/suki/pb/nms/synthesis/synthesizer.proto

import type {
  Chunk as _suki_pb_nms_Chunk,
  Chunk__Output as _suki_pb_nms_Chunk__Output
} from "../../../../suki/pb/nms/Chunk";
import type {
  Note as _suki_pb_nms_Note,
  Note__Output as _suki_pb_nms_Note__Output
} from "../../../../suki/pb/nms/Note";

export interface V2Response {
  chunk?: _suki_pb_nms_Chunk | null;
  note?: _suki_pb_nms_Note | null;
  v2response?: "chunk" | "note";
}

export interface V2Response__Output {
  chunk?: _suki_pb_nms_Chunk__Output | null;
  note?: _suki_pb_nms_Note__Output | null;
  v2response: "chunk" | "note";
}
