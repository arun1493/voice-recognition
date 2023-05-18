import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

interface StyledLinkProps {
  disabled: boolean;
}

const StyledNoteMenuContainer = styled.div`
  margin-top: 24px;
  margin-right: 116px;
  padding: 4px 8px;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  width: 128px;
  box-sizing: border-box;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.1);
  z-index: 500;
  background: ${({ theme }) => theme.components.noteMenu.backgroundColor};
  position: absolute;
`;

const StyledLink = styled(Link)<StyledLinkProps>`
  text-decoration: none;
  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.3;
      pointer-events: none;
      cursor: not-allowed;
    `};
`;

export { StyledLink, StyledNoteMenuContainer };
