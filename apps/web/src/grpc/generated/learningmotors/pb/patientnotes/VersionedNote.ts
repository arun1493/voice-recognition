// Original file: node_modules/protobufs/src/learningmotors/pb/patientnotes/patientnotes.proto

import type {
  MetadataEntry as _learningmotors_pb_composer_MetadataEntry,
  MetadataEntry__Output as _learningmotors_pb_composer_MetadataEntry__Output
} from "../../../learningmotors/pb/composer/MetadataEntry";
import type {
  SectionEntries as _learningmotors_pb_patientnotes_SectionEntries,
  SectionEntries__Output as _learningmotors_pb_patientnotes_SectionEntries__Output
} from "../../../learningmotors/pb/patientnotes/SectionEntries";
import type {
  SectionS2Entries as _learningmotors_pb_composer_SectionS2Entries,
  SectionS2Entries__Output as _learningmotors_pb_composer_SectionS2Entries__Output
} from "../../../learningmotors/pb/composer/SectionS2Entries";
import type {
  Timestamp as _google_protobuf_Timestamp,
  Timestamp__Output as _google_protobuf_Timestamp__Output
} from "../../../google/protobuf/Timestamp";

export interface VersionedNote {
  id?: string;
  composition_id?: string;
  metadata_entries?: _learningmotors_pb_composer_MetadataEntry[];
  section_ids?: string[];
  sections?: { [key: string]: _learningmotors_pb_patientnotes_SectionEntries };
  user_id?: string;
  org_id?: string;
  sections_s2?: { [key: string]: _learningmotors_pb_composer_SectionS2Entries };
  composition_created_at?: _google_protobuf_Timestamp | null;
}

export interface VersionedNote__Output {
  id: string;
  composition_id: string;
  metadata_entries: _learningmotors_pb_composer_MetadataEntry__Output[];
  section_ids: string[];
  sections: { [key: string]: _learningmotors_pb_patientnotes_SectionEntries__Output };
  user_id: string;
  org_id: string;
  sections_s2: { [key: string]: _learningmotors_pb_composer_SectionS2Entries__Output };
  composition_created_at: _google_protobuf_Timestamp__Output | null;
}
