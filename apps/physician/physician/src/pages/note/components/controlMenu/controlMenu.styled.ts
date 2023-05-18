import styled from "styled-components";
import { flexCenterEnd, mediaScreenWidth } from "@suki-web/suki-ui";

const StyledControlMenu = styled.div`
  height: 64px;
  ${flexCenterEnd};
  flex-direction: row;
  padding: 0 12px;
  position: sticky;
  top: 0;
  z-index: 1;
  background: ${({ theme }) => theme.pages.note.controlMenu.background};
  border-bottom: 1px solid ${({ theme }) => theme.pages.note.controlMenu.border};

  @media (min-width: ${mediaScreenWidth.sm}) {
    padding: 0 28px;
  }

  @media (min-width: ${mediaScreenWidth.md}) {
    padding: 0 36px;
  }
`;

const StyledPatientInfo = styled.div<{ isMinimized?: boolean }>`
  margin-right: auto;
  opacity: 0;
  ${({ isMinimized }) => isMinimized && "opacity: 1"};
  transition: opacity 0.5s ease-in-out;
`;

const StyledBackIcon = styled.div`
  margin-right: 10px;
`;

const StyledControlIcon = styled.div`
  margin-right: 20px;
`;

export { StyledBackIcon, StyledControlIcon, StyledControlMenu, StyledPatientInfo };
