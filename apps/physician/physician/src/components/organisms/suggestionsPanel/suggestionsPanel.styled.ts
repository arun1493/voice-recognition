import styled from "styled-components";
import { flexCenter } from "@suki-web/suki-ui";

const StyledPanel = styled.div`
  width: 100%;
  max-width: 400px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 0 10px 0 ${({ theme }) => theme.components.suggestionsPanel.boxShadow},
    0 2px 2px 0 ${({ theme }) => theme.components.suggestionsPanel.boxShadow};
  margin: 10px auto;
`;

const StyledHeader = styled.div`
  height: 40px;
  width: 100%;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  background-color: ${({ theme }) => theme.components.suggestionsPanel.background};
  ${flexCenter};
`;

const StyledContent = styled.ul`
  max-height: 300px;
  overflow: auto;
`;

const StyledItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.components.suggestionsPanel.hovered};
  }
`;

const StyledCodeLabel = styled.div`
  background: ${({ theme }) => theme.palette.secondary.offWhite};
  height: 18px;
  padding: 4px 8px;
  color: ${({ theme }) => theme.components.suggestionsPanel.color};
  font-size: 12px;
  margin-left: 4px;
`;

const StyledDescriptions = styled.div``;

export { StyledCodeLabel, StyledContent, StyledDescriptions, StyledHeader, StyledItem, StyledPanel };
