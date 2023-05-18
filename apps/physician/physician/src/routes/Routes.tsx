import store from "store2";
import { FunctionComponent } from "react";
import { Paths } from "@suki-web/suki-business";
import { LoginCallback, useOktaAuth } from "@okta/okta-react";
import { Navigate, Route, Routes as RouterRoutes } from "react-router-dom";

import {
  Appearance,
  Auth,
  BusinessAssociateAgreement,
  EmrRegistration,
  ForgotPassword,
  Help,
  Home,
  ImportSchedule,
  Login,
  Note,
  NoteTypeDetails,
  NoteTypes,
  PageNotFound,
  Password,
  Patients,
  PaymentSuccess,
  RegisterSuccess,
  ScriptDetails,
  Scripts,
  Settings,
  SignUp,
  TechnologyServicesAgreement,
  ThinClient,
  UnfinishedNotes,
  UnSupportedDeviceOrBrowser,
  WindowsDownload,
  XLiteSuccess
} from "../pages";
import { LOCAL_STORE } from "../constants";
import { SecureRoute } from "./SecureRoute";
import { withBrowserSupport } from "../hocs";

const Routes: FunctionComponent = () => {
  const { authState } = useOktaAuth() || {};
  const isAuthenticated = authState?.isAuthenticated;

  if (!authState?.isAuthenticated && window.location.pathname === Paths.ThinClient) {
    store.set(LOCAL_STORE.LAST_URL, Paths.ThinClient);
  }

  const isEmrUser = store.get(LOCAL_STORE.IS_EMR_USER);

  return (
    <RouterRoutes>
      <Route element={<Auth />} path={Paths.Authentication} />
      <Route element={<BusinessAssociateAgreement />} path={Paths.BusinessAssociateAgreement} />
      <Route element={<TechnologyServicesAgreement />} path={Paths.TechnologyServicesAgreement} />
      <Route element={<Password />} path={Paths.Password} />
      <Route element={<ForgotPassword />} path={Paths.ForgotPassword} />
      <Route element={isAuthenticated ? <Navigate replace to={Paths.Home} /> : <Login />} path={Paths.Login} />
      <Route element={<LoginCallback />} path={Paths.ImplicitCallback} />
      <Route element={<PaymentSuccess />} path={`${Paths.PaymentSuccess}/:registrationId`} />
      <Route element={<SignUp />} path={Paths.Register} />
      <Route element={<RegisterSuccess />} path={Paths.RegisterSuccess} />
      <Route element={<XLiteSuccess />} path={Paths.XLiteSuccess} />
      <Route element={<EmrRegistration />} path={`${Paths.EmrRegistration}/:targetEmr`} />
      <Route element={<UnSupportedDeviceOrBrowser />} path={Paths.UnSupportedDeviceOrBrowser} />
      <Route element={<WindowsDownload />} path={Paths.WindowsUpdate} />
      <Route element={<SecureRoute />} path="/">
        <Route element={<Help />} path={Paths.Help} />
        <Route element={<Home />} path={Paths.Home} />
        <Route element={<Note />} path={`${Paths.Note}/:noteId`} />
        <Route element={<Patients />} path={Paths.Patients}>
          <Route path=":patientId" />
        </Route>
        <Route element={<UnfinishedNotes />} path={Paths.UnfinishedNotes} />
        <Route element={<Settings />} path={Paths.Settings} />
        <Route element={<Appearance />} path={Paths.Appearance} />
        <Route element={<NoteTypes />} path={Paths.NoteTypes} />
        <Route element={<Scripts />} path={Paths.Scripts} />
        <Route element={<NoteTypeDetails />} path={Paths.AddOrUpdateNoteType} />
        <Route element={<ScriptDetails />} path={Paths.AddOrUpdateScripts} />
        <Route element={<Home />} path={Paths.Root} />
        <Route element={<ThinClient />} path={Paths.ThinClient} />
        <Route
          element={isEmrUser ? <Navigate replace to={Paths.Patients} /> : <ImportSchedule />}
          path={Paths.ScheduleImport}
        />
        <Route element={<PageNotFound />} path="*" />
      </Route>
    </RouterRoutes>
  );
};

export default withBrowserSupport(Routes);
