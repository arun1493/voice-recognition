import { v4 as uuidv4 } from "uuid";
import * as grpcLibrary from "@grpc/grpc-js";

function createMsSukiAsrDialogMetadata(metadata: any) {
  const { idToken, organizationId, userId } = metadata;
  const msSukiAsrMetadata = new grpcLibrary.Metadata();
  msSukiAsrMetadata.add("jwt_token", idToken);
  msSukiAsrMetadata.add("suki_organization_id", organizationId);
  msSukiAsrMetadata.add("suki_request_id", uuidv4());
  msSukiAsrMetadata.add("suki_user_agent", "desktop");
  msSukiAsrMetadata.add("suki_user_id", userId);
  msSukiAsrMetadata.add("suki_role", "USER");

  return msSukiAsrMetadata;
}

export { createMsSukiAsrDialogMetadata };
