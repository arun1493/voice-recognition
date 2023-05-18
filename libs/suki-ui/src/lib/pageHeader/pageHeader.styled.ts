import styled from "styled-components";

import { flexCenter } from "../../helpers";
import { mediaScreenWidth } from "../constants";

const StyledHeaderIconButton = styled.div<{ position: "left" | "right" }>`
  position: absolute;
  top: 0;
  ${({ position }) => `${position}: 0`};
  width: 64px;
  height: 60px;
  ${flexCenter};
`;

const StyledHeaderTextButton = styled.button<{ hasBorder: boolean; right?: number }>`
  width: 124px;
  height: 40px;
  position: absolute;
  right: ${({ right }) => `${right || 20}px`};
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: center;
  background: inherit;
  border-radius: 4px;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.components.pageHeader.border};

  &:hover {
    opacity: 0.5;
  }

  ${({ hasBorder, right, theme }) =>
    !hasBorder &&
    `
      background: none;
      border: none;
      border-style: none;
      padding: 0;
      margin: 0;
      width: auto;
      right: 16px;
      cursor: pointer;
      font-weight: 600;
      line-height: 24px;
      color: ${theme.components.text.green};

      @media (min-width: ${mediaScreenWidth.xs}) {
        right: ${right || 24}px;
      }
    `};

  @media (max-width: ${mediaScreenWidth.xs}) {
    width: 40px;
    height: 40px;
    padding: 0;
    right: ${({ right }) => `${right || 20}px`};

    p {
      display: none;
    }

    &:before {
      content: "+";
      font-size: 24px;
      line-height: 1;
      letter-spacing: normal;
      text-align: center;
    }
  }
`;

export { StyledHeaderIconButton, StyledHeaderTextButton };
