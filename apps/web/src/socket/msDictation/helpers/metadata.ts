import { v4 as uuidv4 } from "uuid";
import * as grpcLibrary from "@grpc/grpc-js";

function createMsDictationDialogMetadata(metadata: any) {
  const { idToken, organizationId, userId } = metadata;
  const msDictateMetadata = new grpcLibrary.Metadata();
  msDictateMetadata.add("jwt_token", idToken);
  msDictateMetadata.add("suki_jwt", idToken);
  msDictateMetadata.add("suki_access_jwt", idToken);
  msDictateMetadata.add("suki_organization_id", organizationId);
  msDictateMetadata.add("suki_request_id", uuidv4());
  msDictateMetadata.add("suki_user_agent", "desktop");
  msDictateMetadata.add("suki_user_id", userId);
  msDictateMetadata.add("suki_role", "USER");

  return msDictateMetadata;
}

export { createMsDictationDialogMetadata };
