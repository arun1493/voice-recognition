import * as grpc from "@grpc/grpc-js";

import { METADATA } from "../constants";

const createMetadata = (context) => {
  const metadata = new grpc.Metadata();
  if (!context) {
    return metadata;
  }
  if (context.suki_jwt) {
    metadata.set(METADATA.SUKI_JWT, context.suki_jwt);
  }
  if (context.suki_organization_id) {
    metadata.set(METADATA.SUKI_ORGANIZATION_ID, context.suki_organization_id);
  }
  if (context.suki_role) {
    metadata.set(METADATA.SUKI_ROLE, context.suki_role);
  }
  if (context.suki_session_id) {
    metadata.set(METADATA.SUKI_SESSION_ID, context.suki_session_id);
  }
  if (context.suki_trace_id) {
    metadata.set(METADATA.SUKI_TRACE_ID, context.suki_trace_id);
  }
  if (context.suki_user_agent) {
    metadata.set(METADATA.SUKI_USER_AGENT, context.suki_user_agent);
  }
  if (context.suki_user_id) {
    metadata.set(METADATA.SUKI_USER_ID, context.suki_user_id);
  }
  if (context.suki_s2_client) {
    metadata.set(METADATA.SUKI_S2_CLIENT, context.suki_s2_client);
  }
  if (context.suki_is_emr) {
    metadata.set(METADATA.SUKI_IS_EMR, context.suki_is_emr);
  }
  if (context.suki_primary_emr) {
    metadata.set(METADATA.SUKI_PRIMARY_EMR, context.suki_primary_emr);
  }
  if (context.suki_secondary_emr) {
    metadata.set(METADATA.SUKI_SECONDARY_EMR, context.suki_secondary_emr);
  }
  return metadata;
};

export { createMetadata };
