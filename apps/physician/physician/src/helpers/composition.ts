import { EMPTY_ARRAY } from "@suki-web/suki-business";

import { Composition, NoteSection } from "../types";
import { compositionReader, diagnosisReader, sectionReader } from "../readers";
import { EnhancedReview, OPS_STATUS, OrganizationEnhancedReview } from "../constants";

const getProblemSections = (composition: Composition) => {
  const sections = compositionReader.sections(composition) || EMPTY_ARRAY;

  return sections.filter(sectionReader.diagnosis);
};

const getSectionIcdCode = (section: NoteSection) => diagnosisReader.icdCode(sectionReader.diagnosis(section));

const getProblemSectionsWithICDCodes = (composition: Composition) => {
  const problemSections = getProblemSections(composition);
  return problemSections.filter(getSectionIcdCode);
};

const getIsAllDiagnosisHasICDCode = (composition: Composition) => {
  const problemSections = getProblemSections(composition);
  const problemSectionsWithICDCodes = getProblemSectionsWithICDCodes(composition);

  return problemSectionsWithICDCodes.length === problemSections.length;
};

const isNoteHasDictation = (composition: Composition): boolean => {
  const sections = compositionReader.sections(composition) || EMPTY_ARRAY;

  return sections.some((section: NoteSection) => {
    return sectionReader.opsStatusFlag(section) === OPS_STATUS.NEEDS_OPS_PROCESSING;
  });
};

const isEnhancedReviewEnabled = (
  organizationEnhancedReview: OrganizationEnhancedReview,
  userEnhancedReview: EnhancedReview
) => {
  if (organizationEnhancedReview === OrganizationEnhancedReview.OFF) return false;

  if (userEnhancedReview === EnhancedReview.UNKNOWN) {
    return organizationEnhancedReview === OrganizationEnhancedReview.DEFAULT_ON;
  }

  return userEnhancedReview === EnhancedReview.ON;
};

export {
  getIsAllDiagnosisHasICDCode,
  getProblemSections,
  getProblemSectionsWithICDCodes,
  getSectionIcdCode,
  isEnhancedReviewEnabled,
  isNoteHasDictation
};
