import _isNil from "lodash/isNil";
import { Paths, Products } from "@suki-web/suki-business";

import { Emr, Pages } from "../../constants";
import { FormData } from "../../pages/signUp/constants";
import { isTargetEmr } from "../../pages/signUp/helpers";

interface PatientProfileRouteParams {
  patientId: string;
}

interface NoteRouteParams {
  noteId: string;
}

interface RegisterSuccessRouteParams {
  sku: string;
}

interface NoteTypesRouteParams {
  noteTypeId: string;
}

interface EmrRegistrationRouteParams {
  formData: FormData;
  product: string;
}

interface ScriptsRouteParams {
  scriptId: string;
}

const createLoginPageRoute = () => {
  return Paths.Login;
};

const createRegisterRoute = () => {
  return Paths.Register;
};

const createRegisterSuccessRoute = (params?: RegisterSuccessRouteParams) => {
  if (params?.sku === Products.SUKI_X_LITE) {
    return Paths.XLiteSuccess;
  }
  return Paths.RegisterSuccess;
};

const createRootPageRoute = () => {
  return Paths.Root;
};

const createIntroPageRoute = () => {
  return Paths.IntroPage;
};

const createSchedulePageRoute = () => {
  return Paths.Schedule;
};

const createScheduleImportPageRoute = () => {
  return Paths.ScheduleImport;
};

const createAddScriptRoute = () => {
  return Paths.AddScript;
};

const createListPageRoute = () => {
  return Paths.List;
};

const createHelpPageRoute = () => {
  return Paths.Help;
};

const createForgotPasswordPageRoute = () => {
  return Paths.ForgotPassword;
};

const createHomePageRoute = () => {
  return Paths.Home;
};

const createUnfinishedNotesPageRoute = () => {
  return Paths.UnfinishedNotes;
};

const createUnSupportedDeviceOrBrowserPageRoute = () => {
  return Paths.UnSupportedDeviceOrBrowser;
};

const createAddNoteTypeRoute = () => {
  return Paths.AddNoteType;
};

const createNoteTypesPageRoute = (params?: NoteTypesRouteParams) => {
  const noteTypeId = params?.noteTypeId;
  if (!_isNil(noteTypeId)) {
    return `${Paths.NoteTypes}/${noteTypeId}`;
  }
  return Paths.NoteTypes;
};

const createEmrRegistrationRoute = (params: EmrRegistrationRouteParams) => {
  const formData = params.formData;
  const product = params.product;

  let targetEmr = Emr.UNKNOWN;
  for (const emr of Object.values(Emr)) {
    if (isTargetEmr(formData?.EMR?.value, emr)) {
      targetEmr = emr;
      break;
    }
  }

  if (targetEmr !== Emr.UNKNOWN) {
    const name = `${formData.FIRST_NAME} ${formData.LAST_NAME}`;
    return `${Paths.EmrRegistration}/${targetEmr.toLowerCase()}?name=${name}&email=${
      formData.EMAIL
    }&product=${product}`;
  }

  return Paths.Register;
};

const createScriptsPageRoute = (params?: ScriptsRouteParams) => {
  const scriptId = params?.scriptId;
  if (!_isNil(scriptId)) {
    return `${Paths.Scripts}/${scriptId}`;
  }
  return Paths.Scripts;
};

const createPatientProfilePageRoute = (params: PatientProfileRouteParams) => {
  const { patientId } = params;
  if (!_isNil(patientId)) {
    return `${Paths.PatientProfile}/${patientId}`;
  }
  return Paths.List;
};

const createNotePageRoute = (params: NoteRouteParams) => {
  const { noteId } = params;
  if (!_isNil(noteId)) {
    return `${Paths.Note}/${noteId}`;
  }
  return Paths.UnfinishedNotes;
};

const createSettingsPageRoute = () => {
  return Paths.Settings;
};

const PAGE_ROUTE_GENERATORS = {
  [Pages.AddNoteType]: createAddNoteTypeRoute,
  [Pages.AddScript]: createAddScriptRoute,
  [Pages.EmrRegistration]: createEmrRegistrationRoute,
  [Pages.ForgotPassword]: createForgotPasswordPageRoute,
  [Pages.Help]: createHelpPageRoute,
  [Pages.Home]: createHomePageRoute,
  [Pages.Intro]: createIntroPageRoute,
  [Pages.List]: createListPageRoute,
  [Pages.Login]: createLoginPageRoute,
  [Pages.Note]: createNotePageRoute,
  [Pages.NoteTypes]: createNoteTypesPageRoute,
  [Pages.PatientProfile]: createPatientProfilePageRoute,
  [Pages.Register]: createRegisterRoute,
  [Pages.RegisterSuccess]: createRegisterSuccessRoute,
  [Pages.Root]: createRootPageRoute,
  [Pages.Schedule]: createSchedulePageRoute,
  [Pages.ScheduleImport]: createScheduleImportPageRoute,
  [Pages.Scripts]: createScriptsPageRoute,
  [Pages.Settings]: createSettingsPageRoute,
  [Pages.UnfinishedNotes]: createUnfinishedNotesPageRoute,
  [Pages.UnSupportedDeviceOrBrowser]: createUnSupportedDeviceOrBrowserPageRoute
};

const getRoute = (page: Pages, params: any = {}): string => {
  const routeGenerator = PAGE_ROUTE_GENERATORS[page];
  if (routeGenerator) {
    return routeGenerator(params);
  }
  return Paths.Root;
};

export { getRoute };
