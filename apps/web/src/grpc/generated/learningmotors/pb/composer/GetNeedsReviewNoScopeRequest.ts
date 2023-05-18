// Original file: node_modules/protobufs/src/learningmotors/pb/composer/compositions.proto

export interface GetNeedsReviewNoScopeRequest {
  organization_ids?: string[];
  include_metadata?: boolean;
  include_sections?: boolean;
}

export interface GetNeedsReviewNoScopeRequest__Output {
  organization_ids: string[];
  include_metadata: boolean;
  include_sections: boolean;
}
