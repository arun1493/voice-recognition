import { ScreenSize } from "@suki-web/suki-ui";
import { Paths } from "@suki-web/suki-business";

const HORIZONTAL_OFFSET: Record<ScreenSize, number> = {
  xxs: 0,
  xs: 0,
  sm: -164,
  md: -184,
  lg: -224,
  xl: -260
};

const HIDDEN_AGENT_ROUTES: string[] = [
  Paths.Authentication,
  Paths.BusinessAssociateAgreement,
  Paths.ForgotPassword,
  Paths.Login,
  Paths.Password,
  Paths.Payments,
  Paths.PaymentSuccess,
  Paths.Register,
  Paths.ScheduleImport,
  Paths.TechnologyServicesAgreement,
  Paths.UnSupportedDeviceOrBrowser,
  Paths.XLiteSuccess,
  Paths.WindowsUpdate
];

const DISABLED_AGENT_ROUTES: string[] = [Paths.Settings, Paths.Scripts, Paths.NoteTypes];

export { HIDDEN_AGENT_ROUTES, HORIZONTAL_OFFSET, DISABLED_AGENT_ROUTES };
