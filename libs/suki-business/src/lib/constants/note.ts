enum CompositionOrNote {
  COMPOSITION = "composition",
  NA = "na", // placeholder for default value
  NOTE = "note"
}

enum NoteLockStatus {
  NOTE_IS_AVAILABLE = "NOTE_IS_AVAILABLE",
  NOTE_IS_BEING_EDITED = "NOTE_IS_BEING_EDITED",
  INCOMPLETE = "INCOMPLETE"
}

// Source of note creation
enum NoteSources {
  SYSTEM = "SYSTEM",
  USER = "USER"
}

export { CompositionOrNote, NoteLockStatus, NoteSources };
