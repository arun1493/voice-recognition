import { useWindowSize } from "react-use";
import { useTheme } from "styled-components";

import { BreakpointKeysType } from "../theme";

function getNextBreakpoint(keys: string[], key: string) {
  return keys[keys.indexOf(key) + 1] as BreakpointKeysType;
}

const useThemeBreakpoint = () => {
  const theme = useTheme();
  const { keys, values } = theme.breakpoints;

  const { width: windowWidth } = useWindowSize();

  const _isUp = (width: number) => (key: BreakpointKeysType) => width >= values[key];
  const isUp = _isUp(windowWidth);

  const _isDown = (width: number) => (key: BreakpointKeysType) => width < values[key];
  const isDown = _isDown(windowWidth);

  const _isOnly = (width: number) => (key: BreakpointKeysType) =>
    _isUp(width)(key) && _isDown(width)(getNextBreakpoint(keys, key));
  const isOnly = _isOnly(windowWidth);

  const _isNot = (width: number) => (key: BreakpointKeysType) =>
    _isDown(width)(key) || _isUp(width)(getNextBreakpoint(keys, key));
  const isNot = _isNot(windowWidth);

  const _isBetween = (width: number) => (start: BreakpointKeysType, end: BreakpointKeysType) =>
    _isUp(width)(start) && _isDown(width)(end);
  const isBetween = _isBetween(windowWidth);

  return {
    isUp,
    isDown,
    isOnly,
    isNot,
    isBetween
  };
};

export { useThemeBreakpoint };

export default useThemeBreakpoint;
