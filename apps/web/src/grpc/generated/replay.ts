import type * as grpc from "@grpc/grpc-js";
import type { MessageTypeDefinition } from "@grpc/proto-loader";

import type {
  ReplayServiceClient as _learningmotors_pb_replay_ReplayServiceClient,
  ReplayServiceDefinition as _learningmotors_pb_replay_ReplayServiceDefinition
} from "./learningmotors/pb/replay/ReplayService";

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new (...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  learningmotors: {
    pb: {
      replay: {
        GoogleOptions: MessageTypeDefinition;
        ProcessingOptions: MessageTypeDefinition;
        RecognitionResult: MessageTypeDefinition;
        ReplayAudioRequest: MessageTypeDefinition;
        ReplayAudioResponse: MessageTypeDefinition;
        ReplayService: SubtypeConstructor<typeof grpc.Client, _learningmotors_pb_replay_ReplayServiceClient> & {
          service: _learningmotors_pb_replay_ReplayServiceDefinition;
        };
      };
      scope: {
        Scope: MessageTypeDefinition;
      };
    };
  };
}
