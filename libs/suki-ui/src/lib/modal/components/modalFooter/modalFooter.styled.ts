import styled from "styled-components";

import { StyledModalFooterProps } from "./ModalFooter";

const alignment = {
  bottom: "flex-end",
  center: "center",
  top: "flex-start"
};

const StyledModalFooter = styled.div<StyledModalFooterProps>`
  border-top: ${({ hasDivider, theme }) =>
    hasDivider ? "1px solid " + theme.components.modalFooter.borderColor : "none"};
  cursor: ${({ cursor }) => cursor};
  display: flex;
  align-items: center;
  justify-content: ${({ verticalAlignment }) => alignment[verticalAlignment || "center"]};
  max-height: ${({ maxHeight }) =>
    maxHeight ? (typeof maxHeight === "number" ? `${maxHeight}px` : maxHeight) : "calc(100vh - 96px)"};
  height: ${({ height }) => `${height ?? 40}px`};
  color: ${({ theme }) => theme.components.modalFooter.color};
`;

export { StyledModalFooter };
