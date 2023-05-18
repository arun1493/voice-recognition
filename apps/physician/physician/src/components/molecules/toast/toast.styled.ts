import styled from "styled-components";
import { Header, mediaScreenWidth, Text, ThemeProvider } from "@suki-web/suki-ui";

import { TOAST_TYPES } from "../../../constants";
import { TOAST_TRANSITION_DURATION } from "./constants";
import { ToastTypes, TypeProps } from "./ToastContainer";
import { StyledBodyProps, StyledButtonProps } from "./Toast";

const getToastBackground = ({ theme, type }: { theme: ThemeProvider; type: ToastTypes }) => {
  switch (type) {
    case TOAST_TYPES.CONFIRMATION:
      return theme.components.toast.confirmation.backgroundColor;
    case TOAST_TYPES.ERROR:
      return theme.components.toast.error.backgroundColor;
    case TOAST_TYPES.SECONDARY_CONFIRMATION:
      return theme.components.toast.secondaryConfirmation.backgroundColor;
    case TOAST_TYPES.SEVERE:
      return theme.components.toast.severe.backgroundColor;
    case TOAST_TYPES.TIP:
      return theme.components.toast.tip.backgroundColor;
    default:
      return theme.components.toast.info.backgroundColor;
  }
};

const StyledContainer = styled.div<TypeProps>`
  position: relative;
  top: -200px;
  transition: all ${TOAST_TRANSITION_DURATION}ms ease-in-out;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${getToastBackground};
  width: 620px;
  min-height: 80px;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 6px 10px 0 rgba(0, 0, 0, 0.14);
  box-sizing: border-box;
  z-index: 9999;

  h6,
  p {
    color: ${({ type, theme }) => type === TOAST_TYPES.CONFIRMATION && theme.components.toast.confirmation.color};
  }

  @media (max-width: ${mediaScreenWidth.sm}) {
    width: 520px;
    min-height: 72px;
    padding: 16px;
  }

  @media (max-width: ${mediaScreenWidth.xs}) {
    width: 344px;
    min-height: 64px;
  }
`;

const StyledContent = styled.div`
  display: flex;
  align-items: center;
`;

const StyledToast = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledTitle = styled(Header)`
  font-size: 16px;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  line-height: 20px;

  @media (min-width: ${mediaScreenWidth.xs}) {
    font-size: 18px;
    line-height: 24px;
  }
`;

const StyledBody = styled(Text)<StyledBodyProps>`
  margin-top: ${({ hasTitle }) => (hasTitle ? "8px" : 0)};
  font-size: ${({ hasTitle }) => (hasTitle ? "14px" : "16px")};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  line-height: 20px;

  @media (min-width: ${mediaScreenWidth.xs}) {
    font-size: 16px;
    line-height: 24px;
  }
`;

const StyledCloseButton = styled.button<StyledButtonProps>`
  position: relative;
  width: 41px;
  height: 41px;
  background: transparent;
  cursor: pointer;
  border: none;

  &:before,
  &:after {
    position: absolute;
    left: 20px;
    top: 10px;
    content: " ";
    height: 22px;
    width: 2px;
    background-color: ${({ theme, toastType }) =>
      toastType === TOAST_TYPES.CONFIRMATION ? theme.components.toast.confirmation.color : "rgba(60, 60, 67, 0.6)"};
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }
`;

const StyledToastsContainer = styled.div`
  position: fixed;
  top: 16px;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 9999;

  ${StyledContainer} + ${StyledContainer} {
    margin-top: 16px;
  }

  @media (max-width: ${mediaScreenWidth.xs}) {
    top: 8px;

    ${StyledContainer} + ${StyledContainer} {
      margin-top: 8px;
    }
  }
`;

export {
  StyledBody,
  StyledCloseButton,
  StyledContainer,
  StyledContent,
  StyledTitle,
  StyledToast,
  StyledToastsContainer,
  TOAST_TRANSITION_DURATION
};
