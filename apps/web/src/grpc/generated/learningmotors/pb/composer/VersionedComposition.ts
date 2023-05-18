// Original file: node_modules/protobufs/src/learningmotors/pb/composer/compositions.proto

import type {
  MetadataEntry as _learningmotors_pb_composer_MetadataEntry,
  MetadataEntry__Output as _learningmotors_pb_composer_MetadataEntry__Output
} from "../../../learningmotors/pb/composer/MetadataEntry";
import type {
  SectionEntries as _learningmotors_pb_composer_SectionEntries,
  SectionEntries__Output as _learningmotors_pb_composer_SectionEntries__Output
} from "../../../learningmotors/pb/composer/SectionEntries";
import type {
  SectionS2Entries as _learningmotors_pb_composer_SectionS2Entries,
  SectionS2Entries__Output as _learningmotors_pb_composer_SectionS2Entries__Output
} from "../../../learningmotors/pb/composer/SectionS2Entries";
import type {
  CompositionUpdateEvent as _learningmotors_pb_composer_CompositionUpdateEvent,
  CompositionUpdateEvent__Output as _learningmotors_pb_composer_CompositionUpdateEvent__Output
} from "../../../learningmotors/pb/composer/CompositionUpdateEvent";

export interface VersionedComposition {
  id?: string;
  user_id?: string;
  metadata_entries?: _learningmotors_pb_composer_MetadataEntry[];
  section_ids?: string[];
  sections?: { [key: string]: _learningmotors_pb_composer_SectionEntries };
  org_id?: string;
  sections_s2?: { [key: string]: _learningmotors_pb_composer_SectionS2Entries };
  composition_update_events?: _learningmotors_pb_composer_CompositionUpdateEvent[];
}

export interface VersionedComposition__Output {
  id: string;
  user_id: string;
  metadata_entries: _learningmotors_pb_composer_MetadataEntry__Output[];
  section_ids: string[];
  sections: { [key: string]: _learningmotors_pb_composer_SectionEntries__Output };
  org_id: string;
  sections_s2: { [key: string]: _learningmotors_pb_composer_SectionS2Entries__Output };
  composition_update_events: _learningmotors_pb_composer_CompositionUpdateEvent__Output[];
}
