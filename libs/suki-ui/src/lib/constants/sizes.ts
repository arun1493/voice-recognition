import { ScreenSize } from "./screenSize";

const screenSize: Record<ScreenSize, number> = {
  [ScreenSize.XXS]: 360,
  [ScreenSize.XS]: 576,
  [ScreenSize.SM]: 768,
  [ScreenSize.MD]: 992,
  [ScreenSize.LG]: 1200,
  [ScreenSize.XL]: 1400
};

const mediaScreenWidth: Record<ScreenSize, string> = {
  [ScreenSize.XXS]: `${screenSize.xxs}px`,
  [ScreenSize.XS]: `${screenSize.xs}px`,
  [ScreenSize.SM]: `${screenSize.sm}px`,
  [ScreenSize.MD]: `${screenSize.md}px`,
  [ScreenSize.LG]: `${screenSize.lg}px`,
  [ScreenSize.XL]: `${screenSize.xl}px`
};

const buttonSizes = {
  sm: "140px",
  md: "190px",
  lg: "248px"
};

export { buttonSizes, mediaScreenWidth, screenSize };
