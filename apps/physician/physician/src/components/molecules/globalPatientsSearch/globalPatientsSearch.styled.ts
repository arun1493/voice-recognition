import styled from "styled-components";
import { flexCenter, flexCenterStart, FormInput } from "@suki-web/suki-ui";

const getPatientsSearchBorder = (color: string) =>
  `border: 2px solid ${color}; 
   border-radius: 8px;
  `;

const StyledPatientsSearch = styled.div<{ hasBorder: boolean; hasShadow: boolean }>`
  width: 100%;
  ${flexCenterStart};
  flex-direction: column;
  box-sizing: border-box;
  ${({ hasBorder, theme }) => hasBorder && getPatientsSearchBorder(theme.components.patientSearch.borderColor)};
  ${({ hasShadow, theme }) => hasShadow && `box-shadow: ${theme.components.patientSearch.boxShadow}`};
`;

const StyledSearchContainer = styled.div`
  background: ${({ theme }) => theme.components.patientSearch.background.normal};
  border-radius: ${({ theme }) => theme.spacing(1)};
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 4px 8px;
  ${flexCenter};
`;

const StyledSearchInput = styled(FormInput)<{ hasCloseInInput: boolean }>`
  background: transparent;
  box-shadow: none;
  padding: 0 8px;
  height: auto;
  width: calc(100% - ${({ hasCloseInInput }) => (hasCloseInInput ? 80 : 60)}px);
  overflow: visible;
  font-size: 18px;
  line-height: 24px;
  color: ${({ theme }) => theme.components.patientSearch.textColor};

  &:focus,
  &:hover {
    background: transparent;
    box-shadow: none;
  }

  &:focus ~ ul {
    display: block;
  }

  caret-color: ${({ theme }) => theme.components.textField.caretColor};

  ::placeholder {
    color: ${({ theme }) => theme.components.textField.placeholder.normal};
  }
`;

const StyledSearchIcon = styled.div`
  width: auto;
  height: auto;
  ${flexCenter};
  z-index: 1;
`;

const StyledPatientsListDropDown = styled.ul`
  width: 100%;
  list-style-type: none;
  background: ${({ theme }) => theme.components.patientSearch.background.normal};
  border-top: 2px solid ${({ theme }) => theme.components.patientSearch.borderColor};
  overflow-y: auto;
  padding: 0 8px 8px 8px;
  box-sizing: border-box;
  border-radius: 0 0 8px 8px;
  z-index: 10;
`;

const StyledPatientsListItem = styled.li`
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 16px;
  border-radius: 4px;
  cursor: pointer;
  user-select: none;
  z-index: 12;

  &:hover {
    background: ${({ theme }) => theme.components.patientsListDropDown.itemHoverBackgroundColor};
  }

  &:active {
    background: ${({ theme }) => theme.components.patientsListDropDown.itemClickBackgroundColor};
  }
`;

const StyledPatientsListText = styled.p`
  color: ${({ theme }) => theme.components.patientsListDropDown.itemFontColor};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};

  font-size: 16px;
  line-height: 24px;
`;

const StyledPatientsListSecondaryText = styled.p`
  color: ${({ theme }) => theme.components.patientSearch.secondaryTextColor};
  font-size: 14px;
  line-height: 16px;
`;

export {
  StyledPatientsListDropDown,
  StyledPatientsListItem,
  StyledPatientsListSecondaryText,
  StyledPatientsSearch,
  StyledPatientsListText,
  StyledSearchContainer,
  StyledSearchIcon,
  StyledSearchInput
};
