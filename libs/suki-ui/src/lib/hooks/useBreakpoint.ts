import { createBreakpoint } from "react-use";

import { screenSize, ScreenSize } from "../constants";

const useBreakpoint = createBreakpoint(screenSize) as unknown as () => ScreenSize;

export { useBreakpoint };
