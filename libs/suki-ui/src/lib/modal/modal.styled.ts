import styled, { css, keyframes } from "styled-components";

import { getHeight, getWidth } from "../../helpers";
import { flexCenter, StyledModalProps } from "../..";

const StyledCloseButton = styled.div<{ height: number | string }>`
  height: ${getHeight};
  width: ${getHeight};
  background: 0;
  border: 0;
  color: ${({ theme }) => theme.components.modal.closeIcon.color};
  cursor: pointer;
  ${flexCenter};
  outline: 0;
  padding: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 10;
`;

const zoomIn = keyframes`
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`;

const zoomOut = keyframes`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`;

const StyledModal = styled.div<StyledModalProps>`
  background-color: ${({ theme }) => theme.components.modal.backgroundColor.primary};
  border-radius: ${({ theme }) => theme.components.modal.borderRadius};
  box-shadow: ${({ theme }) => theme.components.modal.boxShadow};
  color: ${({ theme }) => theme.components.modal.color};
  height: ${getHeight};
  max-height: ${({ maxHeight }) =>
    maxHeight ? (typeof maxHeight === "number" ? `${maxHeight}px` : maxHeight) : "calc(100vh - 16px)"};
  max-width: calc(100vw - 8px);
  width: ${getWidth};
  opacity: 1;
  position: relative;
  transition: all 1s ease-in-out;
  visibility: visible;
  overflow: visible;
  margin: ${({ margin }) => (margin ? margin : "0")};
  z-index: 1300;

  ${({ isFullscreen }) =>
    isFullscreen &&
    css`
      max-height: 100%;
      max-width: 100%;
      border-radius: 0;
    `}

  ${({ isActive, closeDuration = 800 }) =>
    isActive
      ? css`
          animation-name: ${zoomIn};
          animation-timing-function: ease;
          animation-duration: 400ms;
        `
      : css`
          animation-name: ${zoomOut};
          animation-timing-function: ease;
          animation-duration: ${closeDuration}ms;
        `};
`;

export { StyledCloseButton, StyledModal };
