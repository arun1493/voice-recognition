import { ScreenSize } from "@suki-web/suki-ui";

const searchPatientsModalWidth: Record<ScreenSize, string> = {
  xxs: "344px",
  xs: "384px",
  sm: "508px",
  md: "508px",
  lg: "508px",
  xl: "508px"
};

const HEADER_HEIGHT = 64;

const EMR_TOOLBAR_HEIGHT = 44;

export { EMR_TOOLBAR_HEIGHT, HEADER_HEIGHT, searchPatientsModalWidth };
