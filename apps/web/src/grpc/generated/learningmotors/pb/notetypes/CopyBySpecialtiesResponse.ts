// Original file: node_modules/protobufs/src/learningmotors/pb/notetypes/notetypes.proto

export interface CopyBySpecialtiesResponse {
  count?: number;
  ids?: string[];
  default_to_new_section_ids?: { [key: string]: string };
  specialtiesNAFlag?: boolean;
}

export interface CopyBySpecialtiesResponse__Output {
  count: number;
  ids: string[];
  default_to_new_section_ids: { [key: string]: string };
  specialtiesNAFlag: boolean;
}
