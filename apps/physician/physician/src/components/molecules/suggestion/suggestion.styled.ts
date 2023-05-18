import styled from "styled-components";
import { Button, flexCenter, flexCenterBetween, flexCenterStart, mediaScreenWidth, Text } from "@suki-web/suki-ui";

const StyledSuggestionContainer = styled.div`
  border-radius: 8px;
  padding: 16px;
  color: ${({ theme }) => theme.components.suggestion.color};
  background: ${({ theme }) => theme.components.suggestion.background};
  position: relative;
`;

const StyledHeader = styled.div`
  ${flexCenterBetween};
  margin-bottom: 10px;
`;

const StyledFlexStart = styled.div`
  ${flexCenterStart};
`;

const StyledTitle = styled(Text)`
  margin-left: 8px;
  line-height: 18px;
`;

const StyledInsertButton = styled(Button)`
  color: ${({ theme }) => theme.components.suggestion.insertButtonColor};
  background: transparent;
  border: none;
  height: initial;
  width: initial;
`;

const StyledRejectButton = styled(Button)`
  ${flexCenter};
  width: 28px;
  height: 28px;
  background: ${({ theme }) => theme.components.fabButton.backgroundColor};
  box-shadow: ${({ theme }) => theme.components.fabButton.boxShadow};
  user-select: none;

  border: none;
  position: absolute;
  top: -4%;
  right: -2%;
  overflow: hidden;
  z-index: 10;

  &:not([disabled]):active {
    background: ${({ theme }) => theme.components.fabButton.activeBackgroundColor};
  }
`;

export { StyledFlexStart, StyledHeader, StyledInsertButton, StyledRejectButton, StyledSuggestionContainer, StyledTitle };
