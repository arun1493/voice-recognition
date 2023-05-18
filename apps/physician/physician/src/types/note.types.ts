import { NoteStatus } from "@suki-web/suki-ui";
import { Specialities } from "@suki-web/suki-business";

import { Dispatch, Patient, Person } from ".";
import { SocketTransmitEvent } from "../socket";
import { CardType, NoteActionType, OPS_STATUS, SukiAgentSize } from "../constants";

type Appointment = {
  compositionId: null;
  compositionIds?: Array<string>;
  id: string;
  noteId: string;
  noteStatus?: NoteStatus;
  noteSubmissionStatus: {
    warning: string;
    finalDestination: string;
    __typename: string;
  };
  owner: {
    id: string;
  };
  ownerId?: string;
  patient: {
    id: string;
    person: Person;
    __typename: string;
  };
  patientId?: string;
  startsAt: string;
  type: string;

  __typename: string;
};

type ScriptBlock = {
  content: string;
  fields: Array<any>;
  sectionId: string;
};

type Script = {
  blocks: Array<ScriptBlock>;
  contentType: string;
  id: string;
  source: string;
  specialities: Array<any>;
  tags: Array<any>;
  type?: string;
  userId: string;
};

type CardTable = {
  name: string;
  value: string;
};

type AllergyReaction = { reaction_name: string };

type Allergy = {
  allergen_name: string;
  reactions: AllergyReaction[];
};

type Card = {
  content: Array<CardTable>;
  error?: string;
  jsonContent?: string;
  recordedDate?: any;
  type: CardType;
};

type CardsByType = Record<string, Card[]>;

type ParagraphCard = {
  content?: string;
  title?: string;
};

type Problem = {
  description: string;
  error?: string;
  note: string;
};

type CardMedicalHistoryProps = { active_problems: Array<Problem> };

type CardSurgicalHistoryProps = Array<Problem>;

type Composition = {
  createdAt?: string;
  id?: string;
  lastUserSubmitAt?: any;
  metadata?: Metadata;
  organizationId?: string;
  readOnly?: boolean;
  sections?: any;
  sectionsS2?: any;
  updated_at?: any;
  userId?: string;
};

type CreateOrUpdateNote = {
  id?: string;
  destinations: string[];
  name: string;
  sections: NoteSection[];
  source: "USER";
  userId: string;
};

type CreateOrUpdateScript = {
  blocks: NoteSection[];
  id?: string;
  name?: string;
  organizationId?: string;
  source?: string;
  tags?: any;
  userId: string;
};

type PartialDictation = {
  partialDictationComposition: boolean;
  readOnly: boolean;
};

type Metadata = {
  appointment: null | Appointment;
  clientType: string;
  createdWithS2: boolean;
  dateSignedOff: null | string;
  emrNoteType: null;
  encounterAddress: null;
  name: string;
  noteTypeId: string;
  partialDictation?: PartialDictation;
  patient?: Patient;
  pulledNoteFromEmr: boolean;
  reviewMessage: string;
  status: NoteStatus;
  submissionInformation: null | any;
  submissionStatus: null | SubmissionStatus;
  user: any;
};

type NoteSectionProps = {
  activeSectionId: string;
  agentSize: SukiAgentSize;
  compositionId: string;
  contentSelection?: any;
  isAgentActive?: boolean;
  isImportedFromEmr?: boolean;
  noteTypeId?: string;
  onAction: NoteOnAction;
  readOnly: boolean;
  sectionRef?: React.RefObject<HTMLLinkElement>;
  scriptModules?: any;
  section: NoteSection;
  sectionIndex: number;
};

type OpsStatus = keyof typeof OPS_STATUS;

type NoteSection = {
  content?: string;
  cursorPosition?: number;
  diagnosisEntry?: any;
  dictationTag?: string;
  id: string;
  name?: string;
  navigationKeywords: string[];
  opsStatusFlag?: OpsStatus;
  pbcSectionFlag: boolean;
  plainText: string;
  readOnly?: boolean;
  sectionId?: string;
  status?: string;
  subsectionIndex?: number;
  updateType?: string;
};

type SubmissionStatus = {
  finalDestination: string;
  warning: string;
};

type NoteType = {
  id: string;
  name: string;
  userId: string;
};

type Note = {
  compositionCreatedAt: string;
  compositionId?: string;
  composition: NoteOrComposition;
  contentType: string;
  destinations: Array<string>;
  emrNoteType: null | string;
  id: string;
  keywords: Array<string>;
  metadata: Metadata;
  name: string;
  noteId?: string;
  sections: Array<NoteSection>;
  source: string;
  specialties: Array<any>;
  userId: string;
};

type NoteOrComposition = Note | Composition;

type Diagnosis = {
  billable: boolean;
  hccCode: string;
  icdCode: string;
  icdDescription: string;
  problemLabel: string;
  snomedCode: string;
  snomedDescription: string;
  suggestionType: string;
};

type DiagnosisEntry = {
  diagnosis?: Diagnosis;
  detailed_display?: any;
  confirm_status?: any;
};

type PrintOrSaveNotesRequest = {
  compositionIds: Array<string>;
  patientsNotesIds: Array<string>;
};

type Suggestion = {
  diagnosis: Diagnosis;
  suggestionType: string;
};

type LookupItem = {
  children?: Diagnosis[];
  diagnosis: Diagnosis;
};

type HCCParams = {
  emrEncounterId: string;
  existingDiagnoses: any;
  patientId: string;
  specialties: Specialities | undefined;
};

type AllUnderScoreOccurances = Record<string, number[][]>;

type NoteChangeHistory = {
  sectionFrequency: Record<string, number>;
  sectionStack: string[];
};

type PrintNoteParams = {
  compositionId?: string;
  noteId?: string;
};

interface NoteActionHandler {
  payload: any;
  type: NoteActionType;
}

interface NoteActionHandlerArguments {
  dispatch: Dispatch;
  getState?: any;
  payload: any;
  transmitEvent: (event: SocketTransmitEvent) => void;
}

type NoteOnAction = (actionHandlerData: NoteActionHandler) => void;

export {
  AllUnderScoreOccurances,
  AllergyReaction,
  Allergy,
  Appointment,
  Card,
  CardMedicalHistoryProps,
  CardSurgicalHistoryProps,
  CardsByType,
  CardTable,
  Composition,
  CreateOrUpdateNote,
  CreateOrUpdateScript,
  Diagnosis,
  DiagnosisEntry,
  HCCParams,
  LookupItem,
  Metadata,
  Note,
  NoteActionHandler,
  NoteActionHandlerArguments,
  NoteChangeHistory,
  NoteOnAction,
  NoteOrComposition,
  NoteSectionProps,
  NoteSection,
  NoteType,
  ParagraphCard,
  PrintNoteParams,
  PrintOrSaveNotesRequest,
  Problem,
  Script,
  ScriptBlock,
  SubmissionStatus,
  Suggestion
};
