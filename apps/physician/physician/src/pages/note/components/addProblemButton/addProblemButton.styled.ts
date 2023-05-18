import styled from "styled-components";
import { flexCenter, mediaScreenWidth } from "@suki-web/suki-ui";

const StyledProblem = styled.div`
  background: none;
  padding: 0 8px 8px;
  box-sizing: border-box;
  margin: 0 0 0 12px;
  border: 1px solid transparent;
  color: ${({ theme }) => theme.pages.note.addProblemButton.disabled};
`;

const StyledProblemButton = styled.button`
  background: none;
  cursor: pointer;
  padding: 8px;
  margin: 0 0 32px 24px;
  box-sizing: border-box;
  margin: 10px 0 0 8px;
  height: 34px;
  border: 1px solid transparent;
  color: ${({ theme }) => theme.pages.note.addProblemButton.color};
  ${flexCenter};

  svg {
    margin-right: 4px;
  }

  &:hover {
    background: ${({ theme }) => theme.pages.note.addProblemButton.background};
    border-radius: 4px;
  }

  &:active,
  &:focus {
    background: ${({ theme }) => theme.pages.note.addProblemButton.focused};
  }

  @media (min-width: ${mediaScreenWidth.md}) {
    height: 36px;
  }
`;

export { StyledProblem, StyledProblemButton };
