import { ScreenSize } from "@suki-web/suki-ui";
import { EMR_TOOLBAR_HEIGHT } from "../../../constants";

const SEARCH_PATIENTS_MODAL_MARGIN: Record<ScreenSize, number> = {
  xxs: 16,
  xs: 24,
  sm: 24,
  md: 72,
  lg: 80,
  xl: 88
};

const getSearchPatientsModalMargins = (screenSize: ScreenSize, isEmrPanelShown: boolean) => {
  let topMargin = 8;
  if (isEmrPanelShown) topMargin += EMR_TOOLBAR_HEIGHT;

  return `${topMargin}px ${SEARCH_PATIENTS_MODAL_MARGIN[screenSize]}px 8px`;
};

export { getSearchPatientsModalMargins };
