import type * as grpc from "@grpc/grpc-js";
import type { EnumTypeDefinition, MessageTypeDefinition } from "@grpc/proto-loader";

import type {
  EmrNoteTypesServiceClient as _learningmotors_pb_emr_notetypes_EmrNoteTypesServiceClient,
  EmrNoteTypesServiceDefinition as _learningmotors_pb_emr_notetypes_EmrNoteTypesServiceDefinition
} from "./learningmotors/pb/emr_notetypes/EmrNoteTypesService";
import type {
  EMRNoteTransformerServiceClient as _learningmotors_pb_emrnotetransformer_EMRNoteTransformerServiceClient,
  EMRNoteTransformerServiceDefinition as _learningmotors_pb_emrnotetransformer_EMRNoteTransformerServiceDefinition
} from "./learningmotors/pb/emrnotetransformer/EMRNoteTransformerService";
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
      Timestamp: MessageTypeDefinition;
    };
  };
  learningmotors: {
    pb: {
      emr: {
        EMRIdentifiers: MessageTypeDefinition;
      };
      emr_notetypes: {
        CreateOrUpdateRequest: MessageTypeDefinition;
        CreateOrUpdateResponse: MessageTypeDefinition;
        DeleteRequest: MessageTypeDefinition;
        EmrNoteType: MessageTypeDefinition;
        EmrNoteTypesService: SubtypeConstructor<
          typeof grpc.Client,
          _learningmotors_pb_emr_notetypes_EmrNoteTypesServiceClient
        > & { service: _learningmotors_pb_emr_notetypes_EmrNoteTypesServiceDefinition };
        GetDefaultNoteTypeRequest: MessageTypeDefinition;
        GetDefaultNoteTypeResponse: MessageTypeDefinition;
        GetRequest: MessageTypeDefinition;
        GetResponse: MessageTypeDefinition;
        SetDefaultNoteTypeRequest: MessageTypeDefinition;
        SpecialtyType: EnumTypeDefinition;
      };
      emrnotetransformer: {
        EMRNoteTransformerService: SubtypeConstructor<
          typeof grpc.Client,
          _learningmotors_pb_emrnotetransformer_EMRNoteTransformerServiceClient
        > & { service: _learningmotors_pb_emrnotetransformer_EMRNoteTransformerServiceDefinition };
        TransformRequest: MessageTypeDefinition;
        TransformResponse: MessageTypeDefinition;
      };
      emrtypes: {
        EMRSecondaryType: EnumTypeDefinition;
        EMRType: EnumTypeDefinition;
      };
      scope: {
        Scope: MessageTypeDefinition;
      };
    };
  };
  suki: {
    pb: {
      emr: {
        Section: MessageTypeDefinition;
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
