import styled from "styled-components";

import { StyleModalContentProps } from ".";
import { scrollOnHover } from "../../../../helpers/styles";

const StyledModalContent = styled.div<StyleModalContentProps>`
  border-top: 1px solid
    ${({ hasTopBorder, theme }) => (hasTopBorder ? theme.components.modal.borderColor : "transparent")};
  height: ${({ height }) => (typeof height === "number" ? `${height}px` : height)};
  max-height: ${({ maxHeight }) =>
    maxHeight ? (typeof maxHeight === "number" ? `${maxHeight}px` : maxHeight) : "calc(100vh - 96px)"};
  ${scrollOnHover};
  padding: ${({ hasPadding }) => (hasPadding ? "0 24px" : "0")};
  transition: all 1s ease-in-out;
`;

export { StyledModalContent };
