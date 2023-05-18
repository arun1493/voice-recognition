enum Actor {
  USER = "USER"
}

const APPLE_APP_DOWNLOAD_LINK = "https://apps.apple.com/us/app/suki/id1425102117";

const ANDROID_APP_DOWNLOAD_LINK = "https://play.google.com/store/apps/details?id=com.suki.suki";

const DEBOUNCE_DELAY = 200;

const EMPTY_ARRAY = Object.freeze([]);

const EMPTY_OBJECT = Object.freeze({});

const EMPTY_STRING = "";

const LOCAL_STORE = {
  APPOINTMENT_ID: "appointment-id",
  HAS_DONT_SHOW_NO_OPEN_ENCOUNTER_AGAIN: "has-dont-show-no-open-encounter-again",
  EMR_TYPE: "emr-type",
  HAS_PROBLEM_SECTION: "has-problem-section",
  IS_AMWELL_USER: "is-amwell-user",
  IS_EMR_USER: "is-emr-user",
  IS_RED_ROVER_ORG: "is-red-rover-org",
  IS_SUBMIT_NOTE_AS_PRILIMINARY: "is-submit-note-as-primary",
  LAST_URL: "last-url",
  LEGACY_REDIRECT: "legacy-redirect",
  OKTA_DATA: "okta-token-storage",
  OKTA_SESSION_TOKEN: "okta-session-token",
  OKTA_TOKEN_EXPIRED: "okta-token-expired",
  ORGANIZATION_ID: "X-Suki-Organization-Id",
  SCHEDULE_DATE: "schedule-date",
  SIGN_UP_FORM_DATA: "sign-up-form-data",
  THEME: "theme",
  THIN_CLIENT: "thin-client",
  USER_ID: "X-Suki-User-Id",
  USER_SECONDARY_EMR_TYPE: "user-secondary-emr-type"
};

const SESSION_STORE = {
  CREATE_NEW_NOTE_USING_KEYBOARD: "CREATE_NEW_NOTE_USING_KEYBOARD"
};

enum ServerResponse {
  FAILURE = "FAILURE",
  NEW = "NEW",
  SUCCESS = "SUCCESS",
  UPDATED = "UPDATED"
}

type STATE_ITEM_LOADING_STATUS_TYPE = "not loaded" | "loading" | "loaded" | "error";

const STATE_ITEM_LOADING_STATUS = {
  NOT_LOADED: "not loaded",
  LOADING: "loading",
  LOADED: "loaded",
  ERROR: "error"
};

const SUKI_ORGANIZATION_ID = "11111111-1111-1111-1111-111111111111";
const SUKI_E2E_ID = "22222222-2222-2222-2222-222222222222";

const PAGES = {
  BILLING: "Billing",
  NOTE_TYPE: "Note Types",
  SCRIPTS: "Scripts",
  SETTINGS: "Settings",
  UNFINISHED_NOTES: "Unfinished Notes"
};

const SETTINGS_MODES = {
  NOTE_TYPES: "note-types",
  SCRIPTS: "scripts"
};

const GENDER = {
  UNKNOWN: "UNKNOWN",
  MALE: "MALE",
  FEMALE: "FEMALE"
};

const OPS_STATUS = {
  INVALID: "INVALID",
  NEEDS_OPS_PROCESSING: "NEEDS_OPS_PROCESSING",
  NO_OPS_PROCESSING_REQUIRED: "NO_OPS_PROCESSING_REQUIRED",
  OPS_PROCESSED: "OPS_PROCESSED"
};

enum SubmissionModals {
  CONFIRM_CODES = "CONFIRM_CODES",
  INITIAL = "INITIAL",
  MISSING_CODES = "MISSING_CODES",
  MULTIPLE_ENCOUNTERS = "MULTIPLE_ENCOUNTERS",
  NOTE_TO_ENHANCED_REVIEW = "NOTE_TO_ENHANCED_REVIEW",
  NO_ENCOUNTER = "NO_ENCOUNTER",
  NO_ENCOUNTER_EMRCHART = "NO_ENCOUNTER_EMRCHART",
  NO_LAB_RESULTS = "NO_LAB_RESULTS",
  NO_VALID_OB_EPISODE = "NO_VALID_OB_EPISODE",
  SUBMIT = "SUBMIT",
  UNABLE_TO_REACH_EMR = "UNABLE_TO_REACH_EMR",
  UNKNOWN_PATIENT = "UNKNOWN_PATIENT"
}

enum ErrorDialogs {
  INVALID_NAME = "INVALID_NAME",
  NA = "NA",
  UNSAVED_CHANGES = "UNSAVED_CHANGES"
}

enum EnhancedReview {
  OFF = "OFF",
  ON = "ON",
  UNKNOWN = "UNKNOWN"
}

enum OrganizationEnhancedReview {
  DEFAULT_OFF = "DEFAULT_OFF",
  DEFAULT_ON = "DEFAULT_ON",
  OFF = "OFF"
}

const INDEX_NOT_FOUND = -1;
const SEARCH_RESULTS_LIMIT = 5;
const SEARCH_PATIENTS_RESULTS_LIMIT = 10;

const SCROLL_TOP = 50;

const DEFAULT_APPOINTMENT_DURATION = 30;

const NEW_SCRIPT_ID = "add-script";

enum ScriptNoteTypeErrorCode {
  INCORRECT_NAME = 3,
  DUPLICATED_NAME = 13,
  LONG_CONTENT = 11
}

const ACCEPTED_SCHEDULED_IMPORT_FILE_FORMATS = { "text/csv": ["csv"] };

const NODE_NAME_BUTTON = "BUTTON";

export {
  ACCEPTED_SCHEDULED_IMPORT_FILE_FORMATS,
  Actor,
  ANDROID_APP_DOWNLOAD_LINK,
  APPLE_APP_DOWNLOAD_LINK,
  DEBOUNCE_DELAY,
  DEFAULT_APPOINTMENT_DURATION,
  EMPTY_ARRAY,
  EMPTY_OBJECT,
  EMPTY_STRING,
  EnhancedReview,
  ErrorDialogs,
  GENDER,
  INDEX_NOT_FOUND,
  LOCAL_STORE,
  NEW_SCRIPT_ID,
  NODE_NAME_BUTTON,
  OPS_STATUS,
  OrganizationEnhancedReview,
  PAGES,
  SCROLL_TOP,
  SEARCH_PATIENTS_RESULTS_LIMIT,
  SEARCH_RESULTS_LIMIT,
  ServerResponse,
  ScriptNoteTypeErrorCode,
  SESSION_STORE,
  SETTINGS_MODES,
  STATE_ITEM_LOADING_STATUS,
  STATE_ITEM_LOADING_STATUS_TYPE,
  SubmissionModals,
  SUKI_E2E_ID,
  SUKI_ORGANIZATION_ID
};
