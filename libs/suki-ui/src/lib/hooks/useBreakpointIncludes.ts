import { useMemo } from "react";

import { ScreenSize } from "../constants";
import { useBreakpoint } from "./useBreakpoint";

function useBreakpointIncludes(...breakpoints: ScreenSize[]): boolean {
  const breakpoint = useBreakpoint();
  return useMemo(() => breakpoints.includes(breakpoint), [breakpoint, breakpoints]);
}

export { useBreakpointIncludes };
