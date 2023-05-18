import _includes from "lodash/includes";

import { ScheduleImportErrors, ServerErrorMessages } from "../constants";

const getErrorMessageType = (errorMessageFromServer: string): string => {
  if (_includes(errorMessageFromServer, ServerErrorMessages.DUPLICATE_MRN)) {
    return ScheduleImportErrors.DUPLICATE_MRN;
  }
  if (_includes(errorMessageFromServer, ServerErrorMessages.DUPLICATE_ROWS)) {
    return ScheduleImportErrors.DUPLICATE_ROWS;
  }
  if (_includes(errorMessageFromServer, ServerErrorMessages.EMPTY_FILE)) {
    return ScheduleImportErrors.EMPTY_FILE;
  }
  if (_includes(errorMessageFromServer, ServerErrorMessages.INVALID_LAYOUT)) {
    return ScheduleImportErrors.INVALID_LAYOUT;
  }
  if (_includes(errorMessageFromServer, ServerErrorMessages.MAXIMUM_ROWS_EXCEEDED)) {
    return ScheduleImportErrors.MAXIMUM_ROWS_EXCEEDED;
  }
  return ScheduleImportErrors.SERVER_ERROR;
};

export { getErrorMessageType };
