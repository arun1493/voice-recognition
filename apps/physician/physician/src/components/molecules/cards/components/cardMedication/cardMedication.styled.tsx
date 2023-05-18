import styled from "styled-components";
import { flexCenterBetween, mediaScreenWidth } from "@suki-web/suki-ui";

const StyledCardItem = styled.div`
  ${flexCenterBetween};
  align-items: flex-start;
`;

const StyledName = styled.div`
  min-width: 220px;
  margin-bottom: 24px;
`;

const StyledDescription = styled.div`
  width: 100%;
  margin: 0 0 24px;
  color: ${({ theme }) => theme.pages.note.card.color};
`;

const StyledButton = styled.button`
  border: none;
  background: none;
  margin-right: 10px;
  cursor: pointer;
  color: ${({ theme }) => theme.pages.note.card.buttonTextColor};
`;

const StyledCardMedication = styled.div`
  padding: 0 16px;

  @media (min-width: ${mediaScreenWidth.xs}) {
    padding: 0 24px;
  }

  @media (min-width: ${mediaScreenWidth.lg}) {
    padding: 0 48px;
  }
`;

export { StyledButton, StyledCardItem, StyledCardMedication, StyledDescription, StyledName };
