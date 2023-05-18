import styled from "styled-components";
import { mediaScreenWidth } from "@suki-web/suki-ui";

const StyledKebabContainer = styled.div`
  width: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
`;

const StyledKebabMenu = styled.div`
  position: absolute;
  top: 40px;
  right: 0;

  @media (min-width: ${mediaScreenWidth.md}) {
    left: 0;
    right: inherit;
`;

const StyledKebabItem = styled.div`
  background: ${({ theme }) => theme.components.kebabMenu.backgroundColor};
  box-shadow: 0 0 20px 0 ${({ theme }) => theme.components.kebabMenu.shadowColor};
  padding: 14px;
  width: 260px;
  height: 56px;
  box-sizing: border-box;
`;

export { StyledKebabContainer, StyledKebabMenu, StyledKebabItem };
