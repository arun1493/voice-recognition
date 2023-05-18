import styled from "styled-components";
import { mediaScreenWidth } from "@suki-web/suki-ui";

import HelpListItem from "./HelpListItem";

const StyledHelpPage = styled.div`
  width: 100%;
  height: calc(100% - 2px);
  margin-top: 2px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-color: ${({ theme }) => theme.pages.help.backgroundColor};
`;

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.pages.help.sectionBackgroundColor};
  border: 1px solid ${({ theme }) => theme.pages.help.borderColor};
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  @media (min-width: ${mediaScreenWidth.xs}) {
    width: 528px;
    height: 100%;
    position: relative;
  }

  @media (min-width: ${mediaScreenWidth.sm}) {
    width: 600px;
  }
`;

const StyledHelpList = styled.ul`
  background-color: ${({ theme }) => theme.pages.help.sectionBackgroundColor};
  margin-top: 16px;
  padding: 0 16px;

  @media (min-width: ${mediaScreenWidth.xs}) {
    padding: 0 20px;
  }

  @media (min-width: ${mediaScreenWidth.md}) {
    padding: 0 28px;
  }
`;

const StyledHelpListItem = styled(HelpListItem)`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.pages.help.borderColor};
  border-radius: 12px;

  &:not(:last-child) {
    margin-bottom: 8px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.pages.help.hoveredItemBackgroundColor};
  }

  &:active {
    background-color: ${({ theme }) => theme.pages.help.activeItemBackgroundColor};
  }

  > svg {
    margin-right: 16px;
  }
`;

export { StyledHelpList, StyledHelpListItem, StyledHelpPage, StyledSection };
