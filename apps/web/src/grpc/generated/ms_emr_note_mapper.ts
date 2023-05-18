import type * as grpc from "@grpc/grpc-js";
import type { MessageTypeDefinition } from "@grpc/proto-loader";

import type {
  MsEmrNoteMapperClient as _suki_pb_emr_note_mapper_MsEmrNoteMapperClient,
  MsEmrNoteMapperDefinition as _suki_pb_emr_note_mapper_MsEmrNoteMapperDefinition
} from "./suki/pb/emr/note_mapper/MsEmrNoteMapper";

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new (...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  google: {
    protobuf: {
      Empty: MessageTypeDefinition;
    };
  };
  learningmotors: {
    pb: {
      scope: {
        Scope: MessageTypeDefinition;
      };
    };
  };
  suki: {
    pb: {
      emr: {
        note_mapper: {
          CreateOrUpdateRequest: MessageTypeDefinition;
          CreateOrUpdateResponse: MessageTypeDefinition;
          CreateRequest: MessageTypeDefinition;
          CreateResponse: MessageTypeDefinition;
          DeleteRequest: MessageTypeDefinition;
          GetRequest: MessageTypeDefinition;
          GetResponse: MessageTypeDefinition;
          Mapping: MessageTypeDefinition;
          MsEmrNoteMapper: SubtypeConstructor<typeof grpc.Client, _suki_pb_emr_note_mapper_MsEmrNoteMapperClient> & {
            service: _suki_pb_emr_note_mapper_MsEmrNoteMapperDefinition;
          };
          UpdateRequest: MessageTypeDefinition;
          UpdateResponse: MessageTypeDefinition;
        };
      };
    };
  };
}
