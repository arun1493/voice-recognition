import _property from "lodash/property";

import { Diagnosis, DiagnosisEntry, NoteSection } from "../types";

const cursorPosition = _property<NoteSection, number>("cursorPosition");
const diagnosis = _property<NoteSection, Diagnosis>("diagnosisEntry.diagnosis");
const diagnosisEntry = _property<NoteSection, DiagnosisEntry>("diagnosisEntry");
const opsStatusFlag = _property<NoteSection, string>("opsStatusFlag");
const footerContent = _property<NoteSection, string>("footer.content");
const pbcSectionFlag = _property<NoteSection, boolean>("pbcSectionFlag");
const plainText = _property<NoteSection, string>("plainText");
const plainTextLength = _property<NoteSection, number>("plainText.length");
const sectionContent = _property<NoteSection, string>("content");
const sectionId = _property<NoteSection, string>("id");
const sectionName = _property<NoteSection, string>("name");
const subsectionIndex = _property<NoteSection, number>("subsectionIndex");
const sectionIndex = _property<NoteSection, number>("sectionIndex");
const readOnly = _property<NoteSection, boolean>("readOnly");
const dictationTag = _property<NoteSection, string>("dictationTag");

export default {
  cursorPosition,
  diagnosis,
  diagnosisEntry,
  dictationTag,
  footerContent,
  opsStatusFlag,
  pbcSectionFlag,
  plainText,
  plainTextLength,
  readOnly,
  sectionContent,
  sectionId,
  sectionIndex,
  sectionName,
  subsectionIndex
};
