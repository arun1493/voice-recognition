import styled, { css } from "styled-components";
import { flexCenter, Header } from "@suki-web/suki-ui";

const StyledProfileMinimal = styled.div<{ isMinimized?: boolean }>`
  width: 100%;
  ${flexCenter};
  flex-direction: column;
  margin-bottom: 64px;
  margin-top: 76px;
  transition: all 1s ease-in-out;

  ${({ isMinimized, theme }) =>
    isMinimized &&
    css`
      border-bottom: 1px solid ${theme.components.patientProfile.border};
      margin-bottom: 0;
      margin-top: 8px;
      padding-bottom: 8px;
    `};
`;

const StyledHeader = styled(Header)`
  margin-bottom: 4px;
`;

export { StyledHeader, StyledProfileMinimal };
