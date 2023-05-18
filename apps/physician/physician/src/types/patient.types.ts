import { NoteStatus } from "@suki-web/suki-ui";

type Person = {
  age?: string;
  dateOfBirth?: string;
  firstName?: string;
  gender?: string;
  id?: string;
  lastName?: string;
  middleName?: string;
  mrn?: string;
  prefix?: string;
  suffix?: string;
  __typename?: string;
};

type Patient = {
  emrId: string;
  emrIdType: string;
  fhirId: string;
  id: string;
  mrn: string;
  noteStatus?: NoteStatus;
  person: Person;
  __typename?: string;
};

type Patients = Patient[];

export { Patient, Patients, Person };
