enum ServerErrorMessages {
  DUPLICATE_MRN = "multiple patients found with same MRN. Remove duplicates and try again",
  DUPLICATE_ROWS = "duplicate records detected. Remove duplicates and try again",
  EMPTY_FILE = "file empty",
  INVALID_LAYOUT = "incorrect file layout. Column order and data layout must match template",
  MAXIMUM_ROWS_EXCEEDED = "record count exceeds maximum allowed. Reduce total records and try again"
}

enum ScheduleImportErrors {
  DUPLICATE_MRN = "duplicateMRN",
  DUPLICATE_ROWS = "duplicateRows",
  EMPTY_FILE = "emptyFile",
  EXTENSION = "extension",
  INVALID_LAYOUT = "invalidLayout",
  MAXIMUM_ROWS_EXCEEDED = "maxRowsExceeded",
  SERVER_ERROR = "serverError"
}

export { ServerErrorMessages, ScheduleImportErrors };
