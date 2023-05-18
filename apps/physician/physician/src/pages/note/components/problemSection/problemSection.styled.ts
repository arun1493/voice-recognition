import styled, { css } from "styled-components";
import { flexCenter, mediaScreenWidth } from "@suki-web/suki-ui";

type ReadOnly = {
  readOnly: boolean;
};

const SectionNameTextarea = styled.textarea<ReadOnly>`
  overflow: hidden;
  resize: none;
  white-space: pre-wrap;
  border: none;
  border-radius: 3px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  width: 100%;
  min-width: 165px;
  height: auto;
  cursor: ${({ readOnly }) => (readOnly ? "default" : "text")};

  &:focus {
    outline: none;
  }

  @media (min-width: ${mediaScreenWidth.md}) {
    font-size: 16px;
    line-height: 24px;
  }
`;

const StyledIconWrapper = styled.div`
  margin: 0 4px 0 8px;

  svg {
    padding: 4px;
    &:hover {
      background: ${({ theme }) => theme.pages.note.problemSection.iconBackground};
      border-radius: 50%;
    }
  }
`;

const StyledProblemSection = styled.li<ReadOnly & { isSelected: boolean }>`
  padding: 16px 0 16px 32px;
  margin-top: 8px;
  border-radius: 8px;
  overflow: hidden;

  .ql-container {
    border: none;
    font-size: 14px;
    padding-left: 16px;
    color: ${({ theme }) => theme.pages.note.sections.fontColor};

    .ql-editor {
      cursor: ${({ readOnly }) => (readOnly ? "default" : "text")};
    }
  }

  svg {
    visibility: hidden;
  }

  ${({ isSelected, theme }) =>
    isSelected &&
    css`
      position: relative;
      background-color: ${theme.pages.note.sections.focusBackgroundColor};
      textarea {
        background-color: ${theme.pages.note.sections.focusBackgroundColor};
      }
    `};

  &:focus-within {
    position: relative;
  }

  &:hover {
    background-color: ${({ readOnly, theme }) => (readOnly ? "none" : theme.pages.note.sections.hoverBackgroundColor)};

    textarea {
      background-color: ${({ readOnly, theme }) =>
        readOnly ? "none" : theme.pages.note.sections.hoverBackgroundColor};
    }

    svg {
      visibility: visible;
    }
  }

  .ql-container.ql-snow {
    border: none;
  }

  .ql-editor {
    padding: 0;
  }

  @media (max-width: ${mediaScreenWidth.xs}) {
    padding-left: 16px;
  }

  @media (min-width: ${mediaScreenWidth.md}) {
    .ql-container {
      font-size: 16px;
    }
  }
`;

const StyledAddCodeButton = styled.button`
  width: 72px;
  height: 26px;
  border-radius: 4px;
  opacity: 0.5;
  white-space: nowrap;
  box-sizing: content-box;
  cursor: pointer;
  border: solid 1px ${({ theme }) => theme.pages.note.problemSection.buttonBorder};
`;

const StyledHeaderProblem = styled.div`
  display: flex;
`;

const StyledNumber = styled.div`
  padding-top: 2px;
`;

const StyledCodeButton = styled.button<ReadOnly>`
  ${flexCenter};
  border: none;
  width: 70px;
  height: 24px;
  flex-shrink: 0;
  outline: ${({ theme }) => theme.pages.note.problemSection.buttonOutline} solid 1px;
  box-shadow: ${({ theme }) => theme.pages.note.problemSection.buttonShadow} 0 0 3px;
  color: gray;
  font-size: 12px;
  background-color: ${({ theme }) => theme.pages.note.problemSection.buttonBackground};
  transition: all 0.3s ease 0s;
  opacity: 1;
  cursor: ${({ readOnly }) => (readOnly ? "default" : "pointer")};
`;

export {
  StyledAddCodeButton,
  StyledCodeButton,
  StyledHeaderProblem,
  StyledIconWrapper,
  SectionNameTextarea,
  StyledNumber,
  StyledProblemSection
};
