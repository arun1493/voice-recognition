import {
  flexCenterAround,
  flexCenterBetween,
  gradient,
  mediaScreenWidth,
  scrollOnHover,
  styledCenterContent
} from "@suki-web/suki-ui";
import styled from "styled-components";
import { HEADER_HEIGHT } from "../../constants";

interface TabsProps {
  active?: boolean;
}

const StyledPatientsPage = styled.div`
  width: 100%;
  height: calc(100% - 4px);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-color: ${({ theme }) => theme.pages.patients.backgroundColor};
  margin-top: 2px;
  z-index: 1;
`;

const StyledSection = styled.section<{ isCardsVisible?: boolean }>`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.pages.patients.sectionBackgroundColor};
  border-top: 1px solid ${({ theme }) => theme.pages.patients.border};
  border-left: 1px solid ${({ theme }) => theme.pages.patients.border};
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  @media (min-width: ${mediaScreenWidth.xxs}) {
    width: 484px;
    height: 100%;
    position: relative;
    ${({ isCardsVisible, theme }) =>
      isCardsVisible && `box-shadow: 5px 0 5px -5px ${theme.pages.note.card.shadowColor}`};
  }

  @media (min-width: ${mediaScreenWidth.sm}) {
    width: 524px;
  }
`;

const StyledTabsHeader = styled.div`
  background-color: ${({ theme }) => theme.pages.patients.sectionBackgroundColor};
  width: 100%;
  height: 64px;
  z-index: 1;
  ${flexCenterAround};
  flex-direction: column;
`;

const StyledTabs = styled.div`
  background-color: ${({ theme }) => theme.pages.patients.backgroundColor};
  width: 312px;
  height: 40px;
  position: relative;
  display: flex;
  justify-content: left;
  align-items: center;
  border-radius: 48px;
`;

const StyledTab = styled.div<TabsProps>`
  width: 156px;
  font-size: 16px;
  padding: 20px 0;
  cursor: pointer;
  border: 0;
  outline: 0;
  z-index: 10;
  position: relative;

  p {
    text-align: center;
    color: ${({ active, theme }) =>
      active ? theme.pages.patients.tabs.activeStateColor : theme.pages.patients.tabs.defaultColor};
  }
`;

const StyledTabsSlider = styled.div<{ width: number; index: number }>`
  width: ${({ width }) => width + "px"};
  height: 100%;
  position: absolute;
  right: ${({ width }) => width + "px"};
  background-color: ${({ theme }) => theme.pages.patients.backgroundActiveColor};
  border-radius: 48px;
  transition: 0.4s;
  transform: ${({ width, index }) => `translateX(${width * index}px)`};
`;

const StyledListContainer = styled.div<{ hasScrollBar: boolean }>`
  padding: 0 8px;
  height: 100%;
  ${({ hasScrollBar }) => (hasScrollBar ? `${scrollOnHover}` : "overflow: auto")};

  @media (min-width: ${mediaScreenWidth.xs}) {
    padding: 0 16px;
  }
`;

const StyledListHeader = styled.div`
  padding: 0 28px;
  min-height: 56px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  ${flexCenterBetween};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};

  p:last-child {
    color: ${({ theme }) => theme.pages.patients.activeColor};
  }

  @media (min-width: ${mediaScreenWidth.xs}) {
    padding: 0 36px;
  }
`;

const StyledGradient = styled.div`
  ${gradient};
`;

const StyledCenterContent = styled.div`
  ${styledCenterContent}
`;

const StyledZeroStateText = styled.p`
  color: ${({ theme }) => theme.pages.patients.zeroState.textColor};
  cursor: default;
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  font-size: 18px;
  line-height: 24px;
  margin: 28vh 84px 0;
  text-align: center;
`;

const StyledPatientsHeader = styled.div<{ isEpic: boolean }>`
  height: ${({ isEpic }) => (isEpic ? "64px" : "132px")};
`;

const StyledEmptyPlaceHolder = styled.div`
  height: 80px;
  width: 100%;
`;

const StyledPatientProfileWrapper = styled.div<{ isCardsVisible: boolean }>`
  position: relative;
  display: flex;
  height: calc(100vh - ${HEADER_HEIGHT}px);

  transition: all 1s ease-in-out;
  left: ${({ isCardsVisible }) => (isCardsVisible ? "-100%" : 0)};
  width: ${({ isCardsVisible }) => (isCardsVisible ? "200%" : "100%")};

  @media (min-width: ${mediaScreenWidth.xxs}) {
    left: ${({ isCardsVisible }) => (isCardsVisible ? "-48%" : 0)};
  }

  @media (min-width: ${mediaScreenWidth.xs}) {
    left: ${({ isCardsVisible }) => (isCardsVisible ? "-44%" : 0)};
  }

  @media (min-width: ${mediaScreenWidth.sm}) {
    left: 0;
    width: auto;
  }
`;

export {
  StyledCenterContent,
  StyledEmptyPlaceHolder,
  StyledGradient,
  StyledListContainer,
  StyledListHeader,
  StyledPatientsHeader,
  StyledPatientsPage,
  StyledPatientProfileWrapper,
  StyledSection,
  StyledTab,
  StyledTabs,
  StyledTabsHeader,
  StyledTabsSlider,
  StyledZeroStateText
};
