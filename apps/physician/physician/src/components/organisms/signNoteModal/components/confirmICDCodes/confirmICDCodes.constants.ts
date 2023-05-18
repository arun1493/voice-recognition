import { ScreenSize } from "@suki-web/suki-ui";

const buttonWidth: Record<ScreenSize, number> = {
  xxs: 240,
  xs: 248,
  sm: 328,
  lg: 328,
  md: 328,
  xl: 328
};

const modalWidth: Record<ScreenSize, number | "100vw"> = {
  xxs: "100vw",
  xs: 384,
  sm: 504,
  lg: 560,
  md: 600,
  xl: 684
};

export { buttonWidth, modalWidth };
