// Original file: node_modules/protobufs/src/suki/pb/nms/note.proto

import type {
  Metadata as _suki_pb_nms_Metadata,
  Metadata__Output as _suki_pb_nms_Metadata__Output
} from "../../../suki/pb/nms/Metadata";
import type {
  Content as _suki_pb_nms_Content,
  Content__Output as _suki_pb_nms_Content__Output
} from "../../../suki/pb/nms/Content";
import type {
  Versions as _suki_pb_nms_Versions,
  Versions__Output as _suki_pb_nms_Versions__Output
} from "../../../suki/pb/nms/Versions";
import type {
  Events as _suki_pb_nms_Events,
  Events__Output as _suki_pb_nms_Events__Output
} from "../../../suki/pb/nms/Events";

export interface Note {
  metadata?: _suki_pb_nms_Metadata | null;
  content?: _suki_pb_nms_Content | null;
  versions?: _suki_pb_nms_Versions | null;
  events?: _suki_pb_nms_Events | null;
}

export interface Note__Output {
  metadata: _suki_pb_nms_Metadata__Output | null;
  content: _suki_pb_nms_Content__Output | null;
  versions: _suki_pb_nms_Versions__Output | null;
  events: _suki_pb_nms_Events__Output | null;
}
