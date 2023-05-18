import { v4 as uuidv4 } from "uuid";
import * as grpcLibrary from "@grpc/grpc-js";

function createS2DialogMetadata(metadata: any) {
  const { idToken, isEmrOrganization, organizationId, primaryEmr, secondaryEmr, sessionToken, userAgent, userId } =
    metadata;

  const s2DialogMetadata = new grpcLibrary.Metadata();
  s2DialogMetadata.add("is_emr", String(isEmrOrganization));
  s2DialogMetadata.add("jwt_token", idToken);
  s2DialogMetadata.add("suki_organization_id", organizationId);
  s2DialogMetadata.add("suki_primary_emr", primaryEmr);
  s2DialogMetadata.add("suki_request_id", uuidv4());
  s2DialogMetadata.add("suki_secondary_emr", secondaryEmr);
  s2DialogMetadata.add("suki_session_id", sessionToken);
  s2DialogMetadata.add("suki_user_agent", "web-suki");
  s2DialogMetadata.add("suki_user_id", userId);
  s2DialogMetadata.add("suki_user_role", "USER");

  return s2DialogMetadata;
}

export { createS2DialogMetadata };
