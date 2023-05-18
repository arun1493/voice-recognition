import styled from "styled-components";
import { flexCenterBetween, mediaScreenWidth } from "@suki-web/suki-ui";

const SectionLabel = styled.div`
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  padding-bottom: 8px;
  margin-left: 16px;
`;

const SectionContent = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

const StyledButton = styled.button`
  background: inherit;
  border: none;
  border-radius: 4px;
  color: ${({ theme }) => theme.pages.settings.button.color.primary};
  cursor: pointer;
  font-size: 16px;
  line-height: 24px;
  height: 40px;
  padding: 0 8px;

  &:hover {
    background-color: ${({ theme }) => theme.components.dialog.button.backgroundColor.secondary};
  }

  &:disabled,
  &:disabled:hover {
    background-color: transparent;
    cursor: not-allowed;
  }

  @media (min-width: ${mediaScreenWidth.lg}) {
    font-size: 18px;
  }
`;

const StyledCenterContainer = styled.div`
  ${flexCenterBetween};
  padding: 0 40px;
  width: -webkit-fill-available;

  @media (min-width: ${mediaScreenWidth.xs}) {
    padding: 0 48px;
  }
`;

export { StyledButton, StyledCenterContainer, SectionContent, SectionLabel };
