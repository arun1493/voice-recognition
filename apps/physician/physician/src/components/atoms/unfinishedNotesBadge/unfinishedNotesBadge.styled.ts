import styled, { css } from "styled-components";

const StyledUnfinishedNotesBadge = styled.div<{ hasOuterBadge: boolean }>`
  height: 16px;
  padding: 0 5px;
  border-radius: 8px;
  text-align: center;
  margin-left: 5px;
  background: ${({ theme }) => theme.components.unfinishedNotesBadge.backgroundColor};
  ${({ hasOuterBadge }) =>
    hasOuterBadge &&
    css`
      position: absolute;
      top: -5px;
      right: -5px;
    `}
`;

export { StyledUnfinishedNotesBadge };
