import styled from "styled-components";

import { ModalMaskProps } from "./ModalMask";
import { flexCenter } from "../../../../helpers";

const StyledBackdrop = styled.div<ModalMaskProps>`
  ${flexCenter};
  background-color: ${({ isTransparent, theme }) => (isTransparent ? "transparent" : theme.components.modal.maskColor)};
  height: 100%;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  transition: opacity 400ms ease-in;
  visibility: visible;
  z-index: 1200;
`;

export { StyledBackdrop };
