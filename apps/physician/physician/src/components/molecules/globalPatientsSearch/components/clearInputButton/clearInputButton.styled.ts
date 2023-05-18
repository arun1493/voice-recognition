import styled from "styled-components";
import { Text } from "@suki-web/suki-ui";

const StyledClearInputButton = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 40px;
  color: ${({ theme }) => theme.components.patientSearch.clearBtnTextColor};
  user-select: none;
`;

const StyledVerticalDivider = styled.div`
  width: 1px;
  background-color: ${({ theme }) => theme.components.patientSearch.borderColor};
  height: 24px;
  margin-right: 4px;
  margin-left: 8px;
`;

const StyledText = styled(Text)`
  padding: 4px 8px;
  border-radius: 4px;
  display: inline-block;

  &:hover {
    background: ${({ theme }) => theme.components.patientSearch.hoveredBackgroundColor};
  }

  &:active {
    background: ${({ theme }) => theme.components.patientSearch.selectedBackgroundColor};
  }
`;

export { StyledClearInputButton, StyledText, StyledVerticalDivider };
