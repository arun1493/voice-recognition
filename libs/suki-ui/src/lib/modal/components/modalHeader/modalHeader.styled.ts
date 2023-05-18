import styled from "styled-components";

import { mediaScreenWidth } from "../../../constants";
import { StyledModalHeaderProps } from "./ModalHeader";

const alignment = {
  bottom: "flex-end",
  center: "center",
  top: "flex-start"
};

const StyledModalHeader = styled.div<StyledModalHeaderProps>`
  height: ${({ height }) => `${height ?? 48}px`};
  display: flex;
  align-items: center;
  justify-content: ${({ verticalAlignment }) => alignment[verticalAlignment || "center"]};
  flex-direction: column;
  padding: 0 32px;
`;

const StyledModalTitle = styled.div<StyledModalHeaderProps>`
  cursor: default;
  font-size: 18px;
  font-stretch: normal;
  font-style: normal;
  font-weight: 600;
  letter-spacing: normal;
  line-height: 1.33;

  display: flex;
  flex-direction: column;
  align-items: ${({ verticalAlignment }) => alignment[verticalAlignment || "center"]};

  @media (min-width: ${mediaScreenWidth.xs}) {
    font-size: 24px;
  }
`;

export { StyledModalHeader, StyledModalTitle };
