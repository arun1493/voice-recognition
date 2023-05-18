import styled from "styled-components";
import { mediaScreenWidth, scrollOnHover } from "@suki-web/suki-ui";

import { HEADER_HEIGHT } from "../../../constants";

const StyledCardWrapper = styled.div<{ isCardsVisible: boolean; isNotePage: boolean }>`
  width: ${({ isCardsVisible }) => (isCardsVisible ? "calc(100% - 32px)" : 0)};
  margin: 0 auto 0 0;
  box-sizing: border-box;
  border-top: 1px solid ${({ theme }) => theme.pages.note.card.borderColor};
  border-right: 1px solid ${({ theme }) => theme.pages.note.card.borderColor};
  min-height: calc(100vh - ${HEADER_HEIGHT}px);
  transition: all 1s ease-in-out;
  background: ${({ theme }) => theme.pages.note.card.background};
  overflow-x: clip;

  @media (min-width: ${mediaScreenWidth.xxs}) {
    ${({ isCardsVisible, isNotePage }) => isCardsVisible && !isNotePage && "width: 96vw"};
  }
  @media (min-width: ${mediaScreenWidth.xs}) {
    ${({ isCardsVisible }) => isCardsVisible && "width: 492px"};
  }
  @media (min-width: ${mediaScreenWidth.sm}) {
    ${({ isCardsVisible }) => isCardsVisible && "width: 328px"};
  }
  @media (min-width: ${mediaScreenWidth.md}) {
    ${({ isCardsVisible }) => isCardsVisible && "width: 368px"};
  }
  @media (min-width: ${mediaScreenWidth.lg}) {
    ${({ isCardsVisible }) => isCardsVisible && "width: 448px"};
  }
  @media (min-width: ${mediaScreenWidth.xl}) {
    ${({ isCardsVisible }) => isCardsVisible && "width: 518px"};
  }
`;

const StyledCardContent = styled.div`
  ${scrollOnHover};
  height: calc(100% - ${HEADER_HEIGHT}px);
  overflow: hidden;
  padding-top: 10px;
`;

export { StyledCardContent, StyledCardWrapper };
