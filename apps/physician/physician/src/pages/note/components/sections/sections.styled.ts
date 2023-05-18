import styled, { css } from "styled-components";
import { CapturingIndicator, mediaScreenWidth } from "@suki-web/suki-ui";

const StyledSections = styled.ul`
  text-align: left;
  margin-top: 10px;
  padding: 0 8px 92px;

  @media (min-width: ${mediaScreenWidth.xs}) {
    padding: 0 32px 92px;
  }

  @media (min-width: ${mediaScreenWidth.md}) {
    padding: 0 64px 92px;
  }

  @media (min-width: ${mediaScreenWidth.lg}) {
    padding: 0 80px 92px;
  }

  @media (min-width: ${mediaScreenWidth.xl}) {
    padding: 0 92px 92px;
  }
`;

const StyledSection = styled.li<{ isCapturingDictation: boolean; isSelected: boolean; isReadOnly: boolean; ref?: any }>`
  position: relative;
  padding: 16px;
  border-radius: 8px;
  margin: 4px 0;
  overflow: hidden;

  .ql-container {
    border: none;
    font-size: 18px;
    color: ${({ theme }) => theme.pages.note.sections.fontColor};

    .ql-editor {
      cursor: ${({ isReadOnly }) => (isReadOnly ? "default" : "text")};
    }
  }

  &:hover {
    background-color: ${({ isReadOnly, theme }) =>
      isReadOnly ? "none" : theme.pages.note.sections.hoverBackgroundColor};
  }

  ${({ isSelected, theme }) =>
    isSelected &&
    css`
      position: relative;
      background-color: ${theme.pages.note.sections.focusBackgroundColor};
    `};

  @media (max-width: ${mediaScreenWidth.xs}) {
    padding: 8px;
  }
`;

const StyledHTMLSection = styled.li`
  padding: 16px;
  border-radius: 8px;
  margin: 4px 0;
  overflow: hidden;
  background-color: ${({ theme }) => theme.pages.note.sections.htmlSectionBackgroundColor};

  @media (max-width: ${mediaScreenWidth.xs}) {
    padding: 8px;
  }
`;

const PositionedCapturingIndicator = styled(CapturingIndicator)`
  position: absolute;
  bottom: 16px;
  right: 24px;
`;

const StyledBorder = styled.div<{ isCapturingDictation: boolean }>`
  position: absolute;
  width: 4px;
  height: 100%;
  left: 0;
  top: 0;
  background-color: ${({ theme, isCapturingDictation }) =>
    isCapturingDictation
      ? theme.pages.note.sections.dictationModeFocusEdgeColor
      : theme.pages.note.sections.focusEdgeColor};
`;

const StyledFooterContent = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: ${({ theme }) => theme.pages.note.sections.footerColor};
  margin: 0 16px;
  white-space: pre-line;

  @media (max-width: ${mediaScreenWidth.xs}) {
    margin-left: 0 8px;
  }
`;

const StyeldDistinction = styled.div<{ isPartialDictationComposition: boolean }>`
  border-bottom: ${({ isPartialDictationComposition, theme }) =>
    isPartialDictationComposition ? `1px solid ${theme.palette.primary.platinum}` : `none`};
  margin: 32px 0 0;
`;

export {
  PositionedCapturingIndicator,
  StyledBorder,
  StyeldDistinction,
  StyledFooterContent,
  StyledHTMLSection,
  StyledSection,
  StyledSections
};
