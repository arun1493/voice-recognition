enum Emr {
  ALLSCRIPTS = "ALLSCRIPTS",
  ATHENA = "ATHENA",
  CERNER = "CERNER",
  ELATION = "ELATION",
  EPIC = "EPIC",
  MIRTH = "MIRTH",
  REDOX = "REDOX",
  UNKNOWN = "UNKNOWN"
}

enum SecondaryEmr {
  ATHENA_EMR = "ATHENA_EMR",
  ELATION_EMR = "ELATION_EMR",
  CERNER_EMR = "CERNER_EMR",
  EPIC_EMR = "EPIC_EMR"
}

enum EmrDestination {
  DOCUMENT = "DOCUMENT",
  DOCUMENT_NEEDS_SIGNOFF = "DOCUMENT_NEEDS_SIGNOFF",
  ENCOUNTER = "ENCOUNTER", // Open  EMR encounter
  ENCOUNTER_NEEDS_SIGNOFF = "ENCOUNTER_NEEDS_SIGNOFF",
  SUKI_ONLY = "SUKI_ONLY", // No EMR
  UNKNOWN = "UNKNOWN"
}

const DESTINATIONS_TO_SEND_NOTE = [EmrDestination.DOCUMENT, EmrDestination.ENCOUNTER];

enum EmrConnectionStatus {
  CONNECTED = "CONNECTED",
  PENDING = "PENDING",
  FAILED = "FAILED"
}

// EPIC token expiry time is 3600(1 hour) hence taking the buffer time as 5 minutes(300)
const EPIC_TOKEN_REFRESH_TIME_BUFFER = 300; // This is in seconds

// CERNER token expiry time is 600(10 minutes) hence taking the buffer time as 1 minutes(60)
const CERNER_TOKEN_REFRESH_TIME_BUFFER = 60; // This is in seconds

type Tokens = {
  accessToken?: string;
  idToken?: string;
  refreshToken?: string;
};

export {
  CERNER_TOKEN_REFRESH_TIME_BUFFER,
  DESTINATIONS_TO_SEND_NOTE,
  Emr,
  EmrConnectionStatus,
  EmrDestination,
  EPIC_TOKEN_REFRESH_TIME_BUFFER,
  SecondaryEmr,
  Tokens
};
