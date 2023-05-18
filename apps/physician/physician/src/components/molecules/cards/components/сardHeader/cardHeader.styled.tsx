import styled from "styled-components";
import { flexCenter, flexCenterEnd, mediaScreenWidth } from "@suki-web/suki-ui";

const StyledCardHeader = styled.div<{ hasBottomBorder: boolean; isCardsVisible: boolean }>`
  height: 64px;
  flex-direction: row;
  position: sticky;
  margin: 0 4px;
  top: 0;
  background: ${({ theme }) => theme.pages.note.card.background};
  padding: 0 20px;
  z-index: 1;
  ${flexCenterEnd};
  border-bottom: 1px solid
    ${({ hasBottomBorder, theme }) => (hasBottomBorder ? theme.pages.note.card.borderColor : "transparent")};

  @media (max-width: ${mediaScreenWidth.xs}) {
    margin-left: 0;
  }

  @media (min-width: ${mediaScreenWidth.sm}) {
    padding: 0;
  }

  @media (min-width: ${mediaScreenWidth.md}) {
    padding: 0 20px;
  }
`;

const StyledIcon = styled.div<{ shouldRotate?: boolean }>`
  svg {
    transform: ${({ shouldRotate }) => (shouldRotate ? "rotate(180deg)" : "rotate(0)")};
  }

  @media (max-width: ${mediaScreenWidth.xxs}) {
    height: 56px;
  }
`;

const StyledCardTitle = styled.div`
  text-align: center;
  width: 100%;
  min-width: 200px;
  padding: 0 56px;

  @media (max-width: ${mediaScreenWidth.xs}) {
    padding: 16px 0 24px 0;
  }
`;

const StyledCardNavigationButtons = styled.div`
  ${flexCenter};
  position: absolute;
  flex-direction: row;
  width: 60px;
`;

const StyledBackButton = styled.div<{ isCardsVisible: boolean }>`
  position: ${({ isCardsVisible }) => (isCardsVisible ? "absolute" : "relative")};
  left: 0;
`;

export { StyledBackButton, StyledCardHeader, StyledCardNavigationButtons, StyledCardTitle, StyledIcon };
