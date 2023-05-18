import styled, { css } from "styled-components";

import { mediaScreenWidth } from "../constants";
import { flexCenter, flexCenterEnd, zoomIn, zoomOut } from "../../helpers";

const show = zoomIn;
const hide = zoomOut;

const StyledDialog = styled.dialog`
  background-color: ${({ theme }) => theme.components.modal.backgroundColor.primary};
  border: none;
  box-sizing: border-box;
  border-radius: ${({ theme }) => theme.components.modal.borderRadius};
  box-shadow: ${({ theme }) => theme.components.modal.boxShadow};
  color: ${({ theme }) => theme.components.modal.color};
  width: 344px;
  max-width: 100%;

  &[open] {
    animation: ${show} 400ms ease normal;
  }

  &.hide {
    animation: ${hide} 400ms ease normal;
  }

  ::backdrop {
    background-color: ${({ theme }) => theme.components.modal.backgroundColor.backdrop};
  }

  p:nth-child(2) {
    padding-top: 16px;
  }

  @media (min-width: ${mediaScreenWidth.xs}) {
    width: 416px;
  }
`;

const DialogHeader = styled.header`
  ${flexCenter};
  text-align: center;
  margin-bottom: 24px;
  padding: 0 40px;

  @media (min-width: ${mediaScreenWidth.xs}) {
    padding: 0 24px;
  }
`;

const DialogCloseButton = styled.div`
  ${flexCenter};
  position: absolute;
  top: 0;
  right: 0;
  width: 56px;
  height: 56px;
`;

const DialogContent = styled.section<{ isIndented: boolean }>`
  ${({ isIndented }) => isIndented && "width: 276px"};

  @media (min-width: ${mediaScreenWidth.xs}) {
    ${({ isIndented }) => isIndented && "width: 336px"};
  }
`;

const DialogFooter = styled.footer<{ isLongFooter?: boolean }>`
  width: 100%;
  box-sizing: border-box;
  margin-top: 24px;
  
  ${({ isLongFooter }) =>
    isLongFooter
      ? css`
          ${flexCenter};
          flex-direction: column;
          button:last-child {
            margin-top: 16px;
          }
        `
      : css`
          ${flexCenterEnd};
          button:last-child {
            margin-left: 16px;
          }
        `};

  @media (min-width: ${mediaScreenWidth.xs}) {
    margin-top: 32px;
    ${flexCenterEnd};
    flex-direction: row;
    button:last-child {
      margin: 0 0 0 16px;
    }
  }
}
`;

export { DialogCloseButton, DialogContent, DialogFooter, DialogHeader, StyledDialog };
