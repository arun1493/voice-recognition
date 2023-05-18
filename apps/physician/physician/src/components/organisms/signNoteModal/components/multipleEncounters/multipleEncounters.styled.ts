import styled from "styled-components";
import { flexCenter, flexCenterBetween, mediaScreenWidth } from "@suki-web/suki-ui";

const StyledButton = styled.button`
  border: 1px solid ${({ theme }) => theme.components.multipleEncounters.borderColor};
  border-radius: 8px;
  width: 100%;
  height: 40px;
  font-size: 16px;
  background: none;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.components.button.backgroundColor.hovered};
  }

  &:active {
    background: ${({ theme }) => theme.components.button.backgroundColor.active};
  }

  &:first-of-type {
    margin-bottom: 8px;
  }
`;

const StyledMultipleEncountersContainer = styled.div`
  padding: 16px;
  ${flexCenter};
  flex-direction: column;

  @media (min-width: ${mediaScreenWidth.sm}) {
    padding: 16px 24px;
  }
`;

const StyledText = styled.div`
  color: ${({ theme }) => theme.components.multipleEncounters.color};
  margin: 16px 0;
`;

const StyledEncounter = styled.div`
  width: 100%;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.components.multipleEncounters.borderColor};
  margin-top: 24px;
  padding: 16px;
  ${flexCenterBetween};
  cursor: pointer;
  box-sizing: border-box;
`;

export { StyledButton, StyledEncounter, StyledMultipleEncountersContainer, StyledText };
