import _isEmpty from "lodash/isEmpty";

import { Diagnosis } from "../types";
import { diagnosisReader } from "../readers";

const getDiagnosisText = (diagnosis: Diagnosis) => {
  const problemLabel = diagnosisReader.problemLabel(diagnosis);
  const icdDescription = diagnosisReader.icdDescription(diagnosis);

  return problemLabel || icdDescription;
};

// generic code has more then one related EDG code, if only one it is the specific code
const isCodeGeneric = (edgCodes: Array<string>): boolean => {
  if (_isEmpty(edgCodes)) return false;

  const hasMultipleEDGCodes = edgCodes.length > 1;
  return hasMultipleEDGCodes;
};

export { getDiagnosisText, isCodeGeneric };
