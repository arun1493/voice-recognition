import _isEmpty from "lodash/isEmpty";
import _includes from "lodash/includes";

import { Emr } from "../../../constants/emr";

const isTargetEmr = (emr: string, targetEmr: Emr): boolean => {
  return !_isEmpty(emr) && _includes(emr.toLowerCase(), targetEmr.toLowerCase());
};

const isAthenaEmr = (emr: string): boolean => isTargetEmr(emr, Emr.ATHENA);
const isEpicEmr = (emr: string): boolean => isTargetEmr(emr, Emr.EPIC);
const isCernerEmr = (emr: string): boolean => isTargetEmr(emr, Emr.CERNER);
const isElationEmr = (emr: string): boolean => isTargetEmr(emr, Emr.ELATION);

export { isAthenaEmr, isEpicEmr, isCernerEmr, isElationEmr, isTargetEmr };
