enum NoteStatus {
  IMPORTED_FROM_EMR = "IMPORTED_FROM_EMR",

  // Composition has been created/started but not completed
  INCOMPLETE = "INCOMPLETE",

  // For non-EMR flow, doctor needs to sign-off for completion
  NEED_DOCTOR_SIGN_OFF = "NEED_DOCTOR_SIGN_OFF",

  // Composition has been submitted to the EMR
  SUBMITTED_TO_EMR = "SUBMITTED_TO_EMR",

  // User is done editing, but Scribe is not
  USER_IS_DONE = "USER_IS_DONE"
}

export { NoteStatus };
