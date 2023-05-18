// Original file: node_modules/protobufs/src/suki/pb/s2/s2.proto

import type {
  Notetypes as _suki_pb_s2_Notetypes,
  Notetypes__Output as _suki_pb_s2_Notetypes__Output
} from "../../../suki/pb/s2/Notetypes";

export interface CompositionCreatedResponse {
  composition_id?: string;
  notetypes?: _suki_pb_s2_Notetypes[];
}

export interface CompositionCreatedResponse__Output {
  composition_id: string;
  notetypes: _suki_pb_s2_Notetypes__Output[];
}
