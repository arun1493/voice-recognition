import _get from "lodash/get";
import _isEmpty from "lodash/isEmpty";

import { noteActions } from "../../redux/note";
import { Dispatch, EDG, EDGData } from "../../types";

const saveEDGMappingCodes = (dispatch: Dispatch, icdCode: string, edgData: EDGData) => {
  const ICD10EDGMappings = _get(edgData, "ICD10EDGMappings");
  const edgCodes = ICD10EDGMappings.map((ICD10EDGMapping: EDG) => ICD10EDGMapping.edg);

  if (!_isEmpty(edgCodes)) {
    dispatch(noteActions.addMappingICDCode({ icd: icdCode, edgCodes }));
  }
};

export { saveEDGMappingCodes };
