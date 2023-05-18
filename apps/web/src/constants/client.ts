const CLIENTS_LIST = {
  APPOINTMENTS: "appointments",
  DIAGNOSIS: "diagnosis",
  EMR_ACCOUNTS: "emrAccounts",
  EMR_NOTES: "emrNotes",
  IMPORTS_EXPORTS: "importsExports",
  MACROS: "macros",
  NOTE_TYPES: "noteTypes",
  OKTA: "okta",
  ORGANIZATIONS: "organizations",
  PATIENT_CHARTS: "patientCharts",
  PATIENTS: "patients",
  PDF: "pdf",
  S2: "s2",
  SECTIONS: "sections",
  SMS: "sms",
  SUKI_ASR: "sukiAsr",
  USERS: "users",
  UNIQUE: "unique",
  VOICE: "voice"
};

// To add the `microservices` namespace for local env
const getClientHost = (hostname: string): string => {
  return process.env.CLOUD_ENVIRONMENT === "local" ? `${hostname}.microservices` : hostname;
};

const EDG_CODE_BASE_URL = `http://${getClientHost("ms-icd10")}:10001`;

const NOTE_FROM_QUEUE_BASE_URL = `http://${getClientHost("ms-nbp")}:10001`;

const clients = {
  users: {
    path: "learningmotors/pb/user/user_service.proto",
    host: getClientHost("ms-users"),
    port: 10001
  },
  okta: {
    path: "learningmotors/pb/okta/okta.proto",
    host: getClientHost("ms-okta"),
    port: 10001
  },
  sms: {
    path: "suki/pb/sms/sms.proto",
    host: getClientHost("ms-sms"),
    port: 10001
  },
  noteTypes: {
    path: "learningmotors/pb/notetypes/notetypes.proto",
    host: getClientHost("ms-notetypes"),
    port: 10001
  },
  patients: {
    path: "learningmotors/pb/patients/patients.proto",
    host: getClientHost("ms-patients"),
    port: 10001
  },
  appointments: {
    path: "learningmotors/pb/appointments.proto",
    host: getClientHost("ms-appointments"),
    port: 10001
  },
  emrAccounts: {
    path: "learningmotors/pb/emraccounts/emraccounts.proto",
    host: getClientHost("ms-emraccounts"),
    port: 10001
  },
  macros: {
    path: "learningmotors/pb/macros/macros.proto",
    host: getClientHost("ms-macros"),
    port: 10001
  },
  diagnosis: {
    path: "suki/pb/diagnosis/diagnosis.proto",
    host: getClientHost("ms-diagnosis"),
    port: 10001
  },
  s2: {
    path: "suki/pb/s2/s2.proto",
    host: getClientHost("ms-s2"),
    port: 9998
  },
  sections: {
    path: "learningmotors/pb/sectionsservice.proto",
    host: getClientHost("ms-sections"),
    port: 10001
  },
  organizations: {
    path: "learningmotors/pb/organization/organization_service.proto",
    host: getClientHost("ms-organizations"),
    port: 10001
  },
  patientCharts: {
    path: "suki/pb/patientcharts/patientcharts.proto",
    host: getClientHost("ms-patient-charts"),
    port: 10001
  },
  pdf: {
    path: "learningmotors/pb/pdf/pdf.proto",
    host: getClientHost("ms-pdf"),
    port: 10001
  },
  sessionStore: {
    host: getClientHost("session-store"),
    port: 6379,
    protocol: "redis"
  },
  voice: {
    path: "suki/pb/voice/ms_voice_agent.proto",
    host: getClientHost("ms-dictation"),
    port: 10001
  },
  importsExports: {
    path: "suki/pb/imports_exports/imports_exports.proto",
    host: getClientHost("ms-imports-exports"),
    port: 10001
  },
  unique: {
    path: "learningmotors/pb/unique/unique.proto",
    host: getClientHost("ms-unique"),
    port: 10001
  },
  sukiAsr: {
    path: "suki/pb/voice/ms_voice_agent.proto",
    host: getClientHost("ms-suki-asr-dictation"),
    port: 10001
  },
  emrNotes: {
    host: getClientHost("ms-emr-epic-notes"),
    path: "learningmotors/pb/emrnotes/emrnotes.proto",
    port: 10001
  }
};

export { CLIENTS_LIST, clients, EDG_CODE_BASE_URL, NOTE_FROM_QUEUE_BASE_URL };
