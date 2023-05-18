import styled from "styled-components";
import { flexCenterStart } from "@suki-web/suki-ui";

const StyledHeader = styled.div`
  position: sticky;
  top: 0;
  ${flexCenterStart};
  padding: 16px 8px;
  background: ${({ theme }) => theme.components.stickyHeader.background};
  z-index: 2;

  svg {
    margin-left: 4px;
  }
`;

export { StyledHeader };
