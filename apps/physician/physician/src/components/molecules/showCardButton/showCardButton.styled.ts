import styled from "styled-components";
import { flexCenter, mediaScreenWidth } from "@suki-web/suki-ui";

const StyledShowCardButton = styled.button<{ isCardsVisible: boolean; readOnly: boolean }>`
  ${flexCenter};
  background: ${({ theme }) => theme.pages.note.showCardButton.background};
  border: none;
  border-radius: 50%;
  box-shadow: 0 4px 5px ${({ theme }) => theme.pages.note.showCardButton.buttonShadow},
    0 1px 10px ${({ theme }) => theme.pages.note.showCardButton.buttonShadow},
    0 2px 4px ${({ theme }) => theme.pages.note.showCardButton.buttonShadow};
  cursor: pointer;
  position: absolute;
  right: 16px;
  top: 116px;
  height: 28px;
  width: 28px;
  z-index: 9;

  svg {
    transform: ${({ isCardsVisible }) => (isCardsVisible ? "rotate(180deg)" : "rotate(0)")};
  }

  &:hover {
    background: ${({ theme }) => theme.pages.note.showCardButton.buttonHovered};
  }

  &:active {
    background: ${({ theme }) => theme.pages.note.showCardButton.buttonFocused};
  }

  @media (min-width: ${mediaScreenWidth.xxs}) {
    right: 10px;
    top: ${({ readOnly }) => (readOnly ? "140px" : "86px")};
  }

  @media (min-width: ${mediaScreenWidth.xs}) {
    right: -12px;
    top: 116px;
  }
`;

export { StyledShowCardButton };
