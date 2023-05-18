import type * as grpc from "@grpc/grpc-js";
import type { EnumTypeDefinition, MessageTypeDefinition } from "@grpc/proto-loader";

import type {
  NoteRecommendationServiceClient as _suki_pb_note_recommendation_NoteRecommendationServiceClient,
  NoteRecommendationServiceDefinition as _suki_pb_note_recommendation_NoteRecommendationServiceDefinition
} from "./suki/pb/note_recommendation/NoteRecommendationService";

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new (...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  google: {
    protobuf: {
      Timestamp: MessageTypeDefinition;
    };
  };
  suki: {
    pb: {
      note_recommendation: {
        ActionType: EnumTypeDefinition;
        CreateRequest: MessageTypeDefinition;
        CreateResponse: MessageTypeDefinition;
        GetRequest: MessageTypeDefinition;
        GetResponse: MessageTypeDefinition;
        NoteRecommendation: MessageTypeDefinition;
        NoteRecommendationService: SubtypeConstructor<
          typeof grpc.Client,
          _suki_pb_note_recommendation_NoteRecommendationServiceClient
        > & { service: _suki_pb_note_recommendation_NoteRecommendationServiceDefinition };
        NoteRecommendationType: EnumTypeDefinition;
        UpdateRequest: MessageTypeDefinition;
        UpdateResponse: MessageTypeDefinition;
      };
    };
  };
}
