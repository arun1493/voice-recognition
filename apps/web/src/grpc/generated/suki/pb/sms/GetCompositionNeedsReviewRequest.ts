// Original file: node_modules/protobufs/src/suki/pb/sms/sms.proto

import type {
  Timestamp as _google_protobuf_Timestamp,
  Timestamp__Output as _google_protobuf_Timestamp__Output
} from "../../../google/protobuf/Timestamp";

export interface GetCompositionNeedsReviewRequest {
  organization_id?: string;
  include_metadata?: boolean;
  include_sections?: boolean;
  request_sent_time?: _google_protobuf_Timestamp | null;
}

export interface GetCompositionNeedsReviewRequest__Output {
  organization_id: string;
  include_metadata: boolean;
  include_sections: boolean;
  request_sent_time: _google_protobuf_Timestamp__Output | null;
}
