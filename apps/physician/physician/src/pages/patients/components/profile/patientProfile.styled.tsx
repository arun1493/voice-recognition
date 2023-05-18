import {
  flexCenter,
  flexCenterBetween,
  flexCenterEnd,
  flexCenterStart,
  gradient,
  mediaScreenWidth,
  scrollOnHover,
  Text
} from "@suki-web/suki-ui";
import styled from "styled-components";

const StyledCenterContent = styled.div`
  ${flexCenter};
  height: 100%;
`;

const StyledPatientProfileContainer = styled.div<{ isMinimized?: boolean }>`
  height: 100%;
  width: 100%;
  background: ${({ theme }) => theme.pages.patients.sectionBackgroundColor};
  box-sizing: border-box;
  ${flexCenterStart};
  flex-direction: column;
`;

const StyledEmptyContainer = styled.div`
  color: ${({ theme }) => theme.components.patientProfile.color};
  text-align: center;
  width: 296px;

  p:last-child {
    margin-top: 20px;
  }

  svg {
    position: relative;
    top: 4px;
    right: 4px;
  }

  @media (min-width: ${mediaScreenWidth.xs}) {
    width: 336px;
  }

  @media (min-width: ${mediaScreenWidth.md}) {
    width: 424px;
  }
`;

const StyledBackIcon = styled.div`
  position: absolute;
  top: 12px;
  left: 16px;

  @media (min-width: ${mediaScreenWidth.xs}) {
    top: 20px;
    left: 28px;
  }
`;

const StyledText = styled(Text)`
  padding: 8px 0;
  margin-top: 16px;
  color: ${({ theme }) => theme.components.patientProfile.color};
`;

const StyledButton = styled.button`
  height: 52px;
  width: 328px;
  margin-bottom: 32px;
  padding: 4px 32px;
  border-radius: 50px;
  border: 1px solid ${({ theme }) => theme.components.patientProfile.button.border};
  background: ${({ theme }) => theme.components.patientProfile.button.background};
  color: ${({ theme }) => theme.components.patientProfile.button.color};
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.components.patientProfile.button.backgroundHovered};
  }

  &:active {
    background: ${({ theme }) => theme.components.patientProfile.button.backgroundActive};
  }
`;

const StyledProfileList = styled.div<{ hasScrollBar: boolean }>`
  width: 100%;
  box-sizing: border-box;
  padding: 0 16px 10px;
  ${({ hasScrollBar }) => (hasScrollBar ? `${scrollOnHover}` : "overflow: auto")};

  @media (min-width: ${mediaScreenWidth.xs}) {
    padding: 0 24px 10px;
  }

  @media (min-width: ${mediaScreenWidth.md}) {
    padding: 0 32px 10px;
  }
`;

const StyledListItem = styled.div`
  padding: 8px 0 12px 12px;
  margin-top: 8px;
  cursor: pointer;
  position: relative;
  ${flexCenterBetween};
  align-items: center;
  box-sizing: border-box;
  border-radius: 4px;

  &:after {
    content: "";
    height: 1px;
    width: calc(100% - 16px);
    background: ${({ theme }) => theme.pages.patients.weakBorder};
    position: absolute;
    bottom: -4px;
    left: 8px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.pages.patients.hoveredItemBackgroundColor};
  }

  &:active {
    background-color: ${({ theme }) => theme.pages.patients.activeItemBackgroundColor};
  }
`;

const StyledTime = styled.div`
  color: ${({ theme }) => theme.components.patientProfile.timeColor};
  min-width: 92px;
  margin-right: 12px;
  ${flexCenterEnd};
`;

const StyledGradient = styled.div`
  ${gradient};
`;

const StyledDateLabel = styled.div`
  margin-right: 8px;
`;

const StyledExtraItemInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyledEmptyPlaceHolder = styled.div`
  height: 80px;
  width: 100%;
`;

export {
  StyledBackIcon,
  StyledButton,
  StyledCenterContent,
  StyledDateLabel,
  StyledEmptyContainer,
  StyledEmptyPlaceHolder,
  StyledExtraItemInfo,
  StyledGradient,
  StyledListItem,
  StyledPatientProfileContainer,
  StyledProfileList,
  StyledText,
  StyledTime
};
