import { ScreenSize } from "@suki-web/suki-ui";

const { SM, XS, XXS } = ScreenSize;

const getWidth = (breakPoint: ScreenSize) => {
  switch (breakPoint) {
    case XXS:
      return "100vw";
    case XS:
      return 484;
    case SM:
      return 664;
    default:
      return 782;
  }
};

const getHeight = (breakPoint: ScreenSize) =>
  breakPoint === XS || breakPoint === XXS ? "100vh" : "calc( 100vh - 56px )";

const getMaxHeight = (breakPoint: ScreenSize) => (breakPoint === XS || breakPoint === XXS ? "100vh" : 0);

export { getHeight, getMaxHeight, getWidth };
