import styled from "styled-components";
import { mediaScreenWidth } from "@suki-web/suki-ui";

interface PlatterProps {
  isNewSection?: boolean;
  isNoteType?: boolean;
}

interface ProblemBasedLabelProps {
  isSectionItem?: boolean;
}

interface StyledSectionProps {
  isDraggable?: boolean;
  isNoteType?: boolean;
  isReadOnly?: boolean;
}

const sectionBorderRadius = "border-radius: 8px;";

const SectionBlock = styled.div<StyledSectionProps>`
  ${({ isDraggable, isNoteType, theme }) =>
    isNoteType &&
    `
    margin: 16px;
    position: relative;

    &:focus-within  {
      position: relative;
      background-color: ${theme.pages.note.sections.focusBackgroundColor};
      ${sectionBorderRadius};
    }

    &:hover  {
      background-color: ${theme.pages.note.sections.hoverBackgroundColor};
      ${sectionBorderRadius};
    }

    @media (min-width: ${mediaScreenWidth.xs}) {
      margin: 16px 32px;
    }

    @media (min-width: ${mediaScreenWidth.lg}) {
      margin: 16px 56px;
    }

    &:active {
      ${
        isDraggable &&
        `
        background-color: ${theme.components.formInput.backgroundColor.normal};
        box-shadow: 0px 1px 10px ${theme.pages.settings.sectionOptions.boxShadow};
        ${sectionBorderRadius};
      `
      }
    }
  `}

  ${({ isNoteType }) =>
    !isNoteType &&
    `
    margin: 0 4px;
    position: relative;

    @media (min-width: ${mediaScreenWidth.xs}) {
      margin: 16px 32px;
    }

    @media (min-width: ${mediaScreenWidth.lg}) {
      margin: 16px 56px;
    }
  `}
`;

const Platter = styled.div<PlatterProps>`
  display: flex;
  flex-direction: column;
  width: fit-content;
  height: fit-content;
  border-radius: 8px;
  padding: 12px 16px;
  cursor: pointer;
  position: relative;
  min-height: 24px;

  .label {
    margin: 0;
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.pages.settings.noteType.platterLabelColor};
  }

  .section-name {
    font-size: 16px;
    line-height: 24px;
    color: ${({ theme, isNewSection }) =>
      isNewSection
        ? theme.pages.settings.sectionOptions.color.normal
        : theme.pages.settings.noteType.platterLabelColor};
    margin: 0;
    margin-top: 4px;
    font-weight: ${({ isNewSection }) => (isNewSection ? "400" : "600")};
  }

  ${({ isNoteType }) =>
    isNoteType &&
    `
    flex-direction: row;
    align-items: center;
    margin: 0 16px;
    padding: 8px 0 0;
  `}

  ${({ isNewSection, theme }) =>
    isNewSection &&
    `
    padding: 4px 0 8px 8px;
    margin: 0 8px;

      &:hover {
        background: ${theme.pages.settings.backgroundHoveredColor};
      }

      &:active {
        background: ${theme.pages.settings.backgroundActiveColor};
      }
  `}
`;

const ProblemBasedLabel = styled.div<ProblemBasedLabelProps>`
  line-height: 20px;
  font-size: 14px;
  font-weight: 400;
  margin: 0 16px;
  ${({ isSectionItem }) => isSectionItem && `width: auto;`}
  ${({ isSectionItem }) => !isSectionItem && `min-width: 104px;`}
  color: ${({ theme }) => theme.pages.settings.placeholderColor};
`;

const SectionOptions = styled.div<StyledSectionProps>`
  position: absolute;
  left: 16px;
  top: 0;
  width: 216px;
  border-radius: 4px;
  box-shadow: 0 0 20px 0 ${({ theme }) => theme.pages.settings.sectionOptions.boxShadow};
  background-color: ${({ theme }) => theme.pages.settings.sectionOptions.backgroundColor};

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-height: 346px;
  overflow-y: scroll;
  overflow-x: hidden;
  z-index: 1;

  ${({ isNoteType }) =>
    !isNoteType &&
    `
    width: 282px;
  `}

  * {
    box-sizing: border-box;
  }
`;

const StyledDeleteSectionButton = styled.div`
  margin: 4px 8px 0 4px;
`;

const StyledCheckIcon = styled.div`
  margin-left: auto;
  max-width: 32px;
`;

const SectionItem = styled.div<StyledSectionProps>`
  display: flex;
  flex-direction: column;
  width: 208px;
  padding: 8px 16px;
  margin: 4px;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  overflow-wrap: anywhere;
  color: ${({ theme }) => theme.pages.settings.sectionOptions.color.normal};
  border-radius: 4px;
  cursor: pointer;

  ${({ isNoteType }) =>
    !isNoteType &&
    `
    min-height: 40px;
    width: 272px;
  `}

  span {
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.pages.settings.sectionOptions.color.problemBased};
  }

  &:hover {
    background-color: ${({ theme }) => theme.pages.settings.sectionOptions.backgroundColorHover};
  }

  &:active {
    background-color: ${({ theme }) => theme.pages.settings.sectionOptions.color.active};
  }
`;

const StyledItem = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledSection = styled.div<StyledSectionProps>`
  .ql-editor {
    padding: 0 0 16px;
  }

  .ql-editor.ql-blank::before {
    margin: 8px 0;
    font-style: normal;
    font-weight: 400;
    color: ${({ theme }) => theme.pages.settings.placeholderColor};
  }

  .ql-container {
    border: none;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    color: ${({ theme }) => theme.pages.note.sections.fontColor};
    margin: 8px 16px 0;

    p {
      margin: 8px 0;
    }
  }

  ${({ isNoteType, isReadOnly, theme }) =>
    !isNoteType &&
    `
    .ql-editor {
      padding: 16px 4px 16px;
    }

    .ql-container {
      margin: 0 12px;
    }

    &:focus-within {
      position: relative;
      background-color: ${theme.pages.note.sections.focusBackgroundColor};
      border-radius: 8px;
    }

    ${
      !isReadOnly &&
      `
        &:hover {
          background-color: ${theme.components.formInput.backgroundColor.hovered};
          border-radius: 8px;
        }
      `
    }
  `}
`;

export {
  Platter,
  ProblemBasedLabel,
  SectionBlock,
  SectionItem,
  SectionOptions,
  StyledCheckIcon,
  StyledDeleteSectionButton,
  StyledItem,
  StyledSection
};
