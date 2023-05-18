import styled from "styled-components";
import { flexCenterStart, FormInput, mediaScreenWidth } from "@suki-web/suki-ui";

const StyledSearchContainer = styled.div`
  ${flexCenterStart};
`;

const StyledSearchInput = styled(FormInput)`
  background: transparent;
  box-shadow: none;
  padding: 0;
  height: 32px;
  width: 100%;
  overflow: visible;
  font-size: 24px;

  &::placeholder {
    font-size: 24px;
  }

  &:focus,
  &:hover {
    box-shadow: none;
  }

  &:focus ~ ul {
    display: block;
  }

  @media (min-width: ${mediaScreenWidth.md}) {
    font-size: 28px;
  }
`;

const StyledPatientsListDropDown = styled.ul`
  width: 328px;
  position: absolute;
  top: 176px;
  list-style-type: none;
  background-color: ${({ theme }) => theme.components.patientsListDropDown.backgroundColor};
  box-shadow: ${({ theme }) => theme.components.patientsListDropDown.boxShadow};
  overflow-y: auto;
  padding: 8px;
  border-radius: 8px;
  max-height: 300px;
  z-index: 10;

  @media (min-width: ${mediaScreenWidth.xs}) {
    width: 388px;
  }

  @media (min-width: ${mediaScreenWidth.sm}) {
    width: 484px;
  }
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

  & p {
    color: ${({ theme }) => theme.components.patientsListDropDown.itemFontColor};
  }

  &:hover {
    background: ${({ theme }) => theme.components.patientsListDropDown.itemHoverBackgroundColor};
  }

  &:active {
    background: ${({ theme }) => theme.components.patientsListDropDown.itemClickBackgroundColor};
  }
`;

export { StyledPatientsListDropDown, StyledPatientsListItem, StyledSearchContainer, StyledSearchInput };
