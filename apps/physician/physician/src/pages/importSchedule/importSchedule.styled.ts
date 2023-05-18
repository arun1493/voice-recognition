import styled from "styled-components";
import { flexCenter, flexCenterBetween } from "@suki-web/suki-ui";

const StyledDropZone = styled.div<{
  isDragAccept: boolean;
  isDragReject: boolean;
  isFocused: boolean;
  isDragActive: boolean;
  hasErrors: boolean;
}>`
  min-height: 300px;
  margin: 16px 0 16px 16px;
  border-radius: 2px;
  border: 2px dashed ${({ theme }) => theme.palette.secondary.lighterGray};
  border-color: ${({ isDragReject, isDragActive, hasErrors, theme }) => {
    if (isDragActive && !isDragReject) {
      return theme.palette.secondary.lighterGray;
    }
    if (isDragReject || hasErrors) {
      return theme.palette.secondary.orange;
    }
    return;
  }};
  background-color: ${({ isDragActive, isDragReject, hasErrors, theme }) => {
    if (isDragActive && !isDragReject) {
      return theme.palette.secondary.lightestGray;
    }
    if (isDragReject || hasErrors) {
      return theme.palette.secondary.lightOrange;
    }
    return theme.palette.primary.white;
  }};
  ${flexCenter}
  flex-direction: column;
  text-align: center;
  cursor: pointer;
  transition: all 0.15s ease-in-out;
  ${({ theme }) => `${theme.breakpoints.up("sm")} {
    margin: 24px 0 24px 16px;
  }`}

  ${({ theme }) => `${theme.breakpoints.up("md")} {
    margin: 32px 0 32px 16px;
  }`}
`;

const StyledDropDownContainer = styled.div`
  margin: 0 0 100px 12px;
`;

const StyledDropDownTitle = styled.div<{ isExpanded: boolean }>`
  ${flexCenterBetween}
  padding: 8px 16px;
  margin: 0 4px;
  border-radius: 8px;
  background: ${({ isExpanded, theme }) =>
    isExpanded ? theme.palette.primary.white : theme.palette.secondary.veryLightGray};
  transition: all 0.25s ease-in-out;
  cursor: pointer;
  background: ${({ theme }) => theme.palette.secondary.veryLightGray};

  &:hover {
    background: ${({ theme }) => theme.palette.secondary.lightestGray};
  }
  &:active {
    background: ${({ theme }) => theme.palette.primary.lightGreen};
  }

  svg {
    transform: ${({ isExpanded }) => (isExpanded ? "rotate(0)" : "rotate(180deg)")};
    transition: transform 0.5s ease-in-out;
  }
`;

const StyledDropDownContent = styled.div<{ isExpanded: boolean }>`
  margin: 16px 21px 0;
  max-height: ${({ isExpanded }) => (isExpanded ? "1200px" : "0")};
  opacity: ${({ isExpanded }) => (isExpanded ? "1" : "0")};
  transition: all 0.5s ease-in-out;
  overflow: hidden;
`;

const StyledUnorderedList = styled.div`
  p::before {
    content: "• ";
  }
  margin: 16px;
`;

const StyledAnnotation = styled.div`
  padding: 16px;
  border-radius: 8px;
  background: ${({ theme }) => theme.palette.secondary.lightestGray};
`;

const StyledImportScheduleContainer = styled.div`
  overflow: scroll;
  scrollbar-width: none;
  ${({ theme }) => `${theme.breakpoints.up("sm")} {
    padding: 0 8px;
  }`}

  ${({ theme }) => `${theme.breakpoints.up("md")} {

    padding: 0 32px;
  }`}

  ${({ theme }) => `${theme.breakpoints.up("xxl")} {
    padding: 0 48px;
  }`}
`;

export {
  StyledAnnotation,
  StyledDropZone,
  StyledDropDownContainer,
  StyledDropDownTitle,
  StyledDropDownContent,
  StyledImportScheduleContainer,
  StyledUnorderedList
};
