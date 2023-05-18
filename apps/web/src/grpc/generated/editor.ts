import type * as grpc from "@grpc/grpc-js";
import type { MessageTypeDefinition } from "@grpc/proto-loader";

import type {
  EditorServiceClient as _suki_pb_nms_editor_EditorServiceClient,
  EditorServiceDefinition as _suki_pb_nms_editor_EditorServiceDefinition
} from "./suki/pb/nms/editor/EditorService";

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new (...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  google: {
    protobuf: {
      Empty: MessageTypeDefinition;
    };
  };
  suki: {
    pb: {
      nms: {
        editor: {
          EditorService: SubtypeConstructor<typeof grpc.Client, _suki_pb_nms_editor_EditorServiceClient> & {
            service: _suki_pb_nms_editor_EditorServiceDefinition;
          };
          StartNoteEditingRequest: MessageTypeDefinition;
        };
      };
    };
  };
}
