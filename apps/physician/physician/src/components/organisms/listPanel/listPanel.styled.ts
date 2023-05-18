import styled, { css } from "styled-components";
import { flexCenterAround, flexCenterBetween } from "@suki-web/suki-ui";

import { PatientCellContainer } from "../../molecules/patientCell/patientCell.styled";

const StyledBody = styled.div<{
  isDisabled: boolean;
  isLong?: boolean;
  isSettingsType: boolean;
  isUnfinishedNotesType: boolean;
}>`
  padding: 8px 0 12px 0;
  margin-top: 8px;
  position: relative;
  ${flexCenterBetween};
  align-items: center;

  min-height: ${({ isLong, isSettingsType, isUnfinishedNotesType }) =>
    isSettingsType ? "48px" : isUnfinishedNotesType && isLong ? "96px" : "64px"};

  box-sizing: border-box;
  border-radius: 4px;

  &:after {
    content: "";
    height: 1px;
    width: calc(100% - 30px);
    background: ${({ theme }) => theme.components.listPanel.borderBottomColor};
    position: absolute;
    bottom: -4px;
    left: 16px;
  }
  ${({ isDisabled }) =>
    !isDisabled &&
    css`
      cursor: pointer;
      &:hover {
        background-color: ${({ theme }) => theme.components.listPanel.hoveredBackgroundColor};
      }
      &:active {
        background-color: ${({ theme }) => theme.components.listPanel.activeBackgroundColor};
      }
    `}
  ${({ isDisabled }) =>
    isDisabled &&
    css`
      ${PatientCellContainer} {
        p,
        span {
          color: ${({ theme }) => theme.components.listPanel.disabledColor};
        }
      }
    `};
`;

const StyledTime = styled.div`
  color: ${({ theme }) => theme.components.patientCell.color};
  min-width: 92px;
  margin-right: 8px;
  text-align: center;
  ${flexCenterAround};
`;

const StyledDateLabel = styled.div`
  margin-right: 8px;
`;

const StyledExtraItemInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export { StyledBody, StyledDateLabel, StyledExtraItemInfo, StyledTime };
