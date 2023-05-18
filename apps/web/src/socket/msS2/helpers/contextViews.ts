import _isEmpty from "lodash/isEmpty";
import _includes from "lodash/includes";
import { Paths } from "@suki-web/suki-business";

import { S2Views } from "../constants";

function getViewFromContext(context: any, sectionId?: string, readOnly?: boolean): string {
  const { compositionId, location } = context;
  if (!_isEmpty(compositionId) && !_isEmpty(sectionId)) return S2Views.SECTION_TRANSCRIPT;
  if (_includes(location?.pathname, Paths.Help)) return S2Views.HELP;
  if (_includes(location?.pathname, Paths.Note)) return S2Views.NOTE;
  if (_includes(location?.pathname, Paths.PatientProfile)) return S2Views.PROFILE;
  if (_includes(location?.pathname, Paths.Schedule)) return S2Views.SCHEDULE;
  if (_includes(location?.pathname, Paths.List)) return S2Views.SCHEDULE;
  if (_includes(location?.pathname, Paths.Home)) return S2Views.WELCOME;
  if (_includes(location?.pathname, Paths.UnfinishedNotes)) return S2Views.UNFINISHED_NOTES;
  return S2Views.INVALID_VIEW;
}

export { getViewFromContext };
