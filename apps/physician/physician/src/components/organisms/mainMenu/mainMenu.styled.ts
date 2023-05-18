import styled from "styled-components";
import { SukiListItem } from "@suki-web/suki-ui";

const StyledMainMenuContainer = styled.menu`
  display: flex;
  flex-direction: column;
  padding: 0 8px 4px 8px;
  box-sizing: border-box;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
  background: ${({ theme }) => theme.components.mainMenu.backgroundColor};
  position: absolute;
  top: 40px;
  right: 0;
  z-index: 500;

  > a {
    text-decoration: none;
  }
`;

const StyledSeparator = styled.div`
  width: 110%;
  height: 1px;
  background: ${({ theme }) => theme.components.mainMenu.separatorColor};
`;

const StyledDoctorFullName = styled(SukiListItem)`
  cursor: default;

  > div {
    max-width: 100%;
  }
`;

export { StyledDoctorFullName, StyledMainMenuContainer, StyledSeparator };
