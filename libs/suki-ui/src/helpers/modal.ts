import { ScreenSize } from "../lib/constants";
import { StyledModalProps } from "../lib/modal";

const getDefaultWidth = (breakpoint: ScreenSize) => {
  switch (breakpoint) {
    case "xxs":
      return "328px";
    case "xs":
      return "344px";
    case "sm":
    case "md":
      return "368px";
    case "lg":
    case "xl":
    default:
      return "368px";
  }
};

const getMultipleEncounterWidth = (breakpoint: ScreenSize) => {
  switch (breakpoint) {
    case "xxs":
      return "328px";
    case "xs":
      return "384px";
    case "sm":
      return "504px";
    case "md":
      return "560px";
    case "lg":
      return "600px";
    case "xl":
    default:
      return "684px";
  }
};

const getHeight = ({ height }: { height: number | string }) => {
  if (typeof height === "number") return `${height}px`;
  return height;
};

const getWidth = ({ breakpoint, width }: StyledModalProps) => {
  if (typeof width === "number") return `${width}px`;
  return width || getDefaultWidth(breakpoint);
};

export { getHeight, getMultipleEncounterWidth, getWidth };
