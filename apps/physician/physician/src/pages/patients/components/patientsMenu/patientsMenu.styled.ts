import styled from "styled-components";

const StyledPatientsMenuContainer = styled.div`
  margin-top: -8px;
  margin-right: 8px;
  padding: 4px;
  display: flex;
  cursor: pointer;
  align-items: right;
  flex-direction: column;
  text-align: left;
  width: 176px;
  box-sizing: border-box;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.components.patientsMenu.boxShadow};
  z-index: 500;
  background: ${({ theme }) => theme.components.patientsMenu.backgroundColor};
  position: absolute;

  > a {
    text-decoration: none;
  }
`;

const StyledDropDownContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`;

export { StyledDropDownContainer, StyledPatientsMenuContainer };
