import type * as grpc from "@grpc/grpc-js";
import type { MessageTypeDefinition } from "@grpc/proto-loader";

import type {
  EpicVoicePlatformServiceClient as _suki_pb_epic_voiceplatform_EpicVoicePlatformServiceClient,
  EpicVoicePlatformServiceDefinition as _suki_pb_epic_voiceplatform_EpicVoicePlatformServiceDefinition
} from "./suki/pb/epic_voiceplatform/EpicVoicePlatformService";

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new (...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  suki: {
    pb: {
      epic_voiceplatform: {
        EpicVoicePlatformService: SubtypeConstructor<
          typeof grpc.Client,
          _suki_pb_epic_voiceplatform_EpicVoicePlatformServiceClient
        > & { service: _suki_pb_epic_voiceplatform_EpicVoicePlatformServiceDefinition };
        InitializeSessionRequest: MessageTypeDefinition;
        InitializeSessionResponse: MessageTypeDefinition;
        KeepAliveSessionRequest: MessageTypeDefinition;
        KeepAliveSessionResponse: MessageTypeDefinition;
        ProcessTextRequest: MessageTypeDefinition;
        ProcessTextResponse: MessageTypeDefinition;
        TerminateSessionRequest: MessageTypeDefinition;
        TerminateSessionResponse: MessageTypeDefinition;
      };
    };
  };
}
