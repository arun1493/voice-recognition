// Original file: node_modules/protobufs/src/suki/pb/nvoqauth/nvoqauth.proto

import type {
  NvoqInformation as _suki_pb_nvoqauth_NvoqInformation,
  NvoqInformation__Output as _suki_pb_nvoqauth_NvoqInformation__Output
} from "../../../suki/pb/nvoqauth/NvoqInformation";

export interface FetchUserPayload {
  information?: _suki_pb_nvoqauth_NvoqInformation | null;
  nvoq_endpoint?: string;
}

export interface FetchUserPayload__Output {
  information: _suki_pb_nvoqauth_NvoqInformation__Output | null;
  nvoq_endpoint: string;
}
