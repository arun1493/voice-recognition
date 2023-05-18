import styled, { css } from "styled-components";
import { CardContent, flexCenter, FormInput, mediaScreenWidth, styledCenterContent } from "@suki-web/suki-ui";

const StyledSettings = styled.div`
  width: 100%;
  height: calc(100% - 2px);
  margin-top: 2px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-color: ${({ theme }) => theme.pages.settings.backgroundColor};
  z-index: 1;
`;

const StyledCardContent = styled(CardContent)`
  padding: 8px;

  @media (min-width: ${mediaScreenWidth.xs}) {
    padding: 8px 16px;
  }

  @media (min-width: ${mediaScreenWidth.md}) {
    padding: 8px 24px;
  }
`;

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.pages.settings.sectionBackgroundColor};
  border: 1px solid ${({ theme }) => theme.pages.settings.sectionBorderColor};
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  @media (min-width: ${mediaScreenWidth.xs}) {
    width: 484px;
    height: 100%;
    position: relative;
  }

  @media (min-width: ${mediaScreenWidth.sm}) {
    width: 528px;
  }
`;

const StyledNameInputPreview = styled.div`
  font-weight: 600;
  line-height: 24px;
  text-align: center;
  font-size: 18px;
`;

const StyledNameInput = styled(FormInput)`
  height: 40px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.components.formInput.backgroundColor.normal};
  border: none;
  box-shadow: none;
  outline: none;
  font-weight: 600;
  line-height: 24px;
  text-align: center;
  font-size: 18px;
  padding: 8px;
  width: inherit;
`;

const StyledCenter = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 24px 16px;

  @media (min-width: ${mediaScreenWidth.xs}) {
    margin: 24px 74px;
  }

  @media (min-width: ${mediaScreenWidth.sm}) {
    margin: 24px 128px;
  }

  @media (min-width: ${mediaScreenWidth.lg}) {
    margin: 24px 184px;
  }
`;

const StyledCenterContent = styled.div`
  ${styledCenterContent}
`;

const StyledNoteTypesContainer = styled.div`
  overflow: auto;
  padding: 0 8px;

  @media (min-width: ${mediaScreenWidth.xs}) {
    padding: 0 16px;
  }
`;

const StyledEmptyContent = styled(StyledCenterContent)`
  margin-top: 80px;
`;

const StyledAddSectionButton = styled.button`
  color: ${({ theme }) => theme.components.button.color.secondary};
  font-size: 16px;
  cursor: pointer;
  font-weight: 600;
  border: 0;
  background: none;
  padding: 8px;
  border-radius: 4px;

  &:hover {
    background-color: ${({ theme }) => theme.components.linkButton.color.hover};
  }

  &:active {
    background-color: ${({ theme }) => theme.components.linkButton.color.active};
  }
`;

const StyledAddSectionContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 20px;
  padding: 0 16px;

  @media (min-width: ${mediaScreenWidth.xs}) {
    padding: 0 42px;
  }

  @media (min-width: ${mediaScreenWidth.lg}) {
    padding: 0 66px;
  }
`;

const StyledContentContainer = styled.div<{ isEmbedded?: boolean }>`
  align-self: center;
  overflow-x: hidden;
  overflow-y: scroll;
  height: calc(100vh - 64px);
  width: 100%;

  ${({ isEmbedded }) =>
    !isEmbedded &&
    css`
      @media (min-width: ${mediaScreenWidth.xs}) {
        width: 484px;
      }

      @media (min-width: ${mediaScreenWidth.sm}) {
        width: 664px;
      }

      @media (min-width: ${mediaScreenWidth.lg}) {
        width: 782px;
      }
    `}

  ${({ isEmbedded }) =>
    isEmbedded &&
    css`
      @media (min-width: ${mediaScreenWidth.xs}) {
        height: calc(100vh - 120px);
      }
    `};
}`;

const StyledCenterContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 16px;

  button {
    font-size: 16px;
  }

  @media (min-width: ${mediaScreenWidth.sm}) {
    padding: 0 24px;
  }

  @media (min-width: ${mediaScreenWidth.md}) {
    button {
      font-size: 18px;
    }
  }
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.pages.note.backgroundColor};
  border: 1px solid ${({ theme }) => theme.pages.settings.borderColor};
  width: 100%;
  height: 100%;
  position: fixed;
  box-sizing: border-box;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  @media (min-width: ${mediaScreenWidth.xs}) {
    width: 484px;
    position: relative;
  }

  @media (min-width: ${mediaScreenWidth.sm}) {
    width: 664px;
  }

  @media (min-width: ${mediaScreenWidth.lg}) {
    width: 782px;
  }
`;

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  ${flexCenter};
  background-color: ${({ theme }) => theme.pages.unfinishedNotes.backgroundColor};
  z-index: 1;
`;

const StyledFooter = styled.div`
  ${flexCenter};
  height: 64px;
  align-items: end;
  text-align: center;
  flex-direction: column;
  border-top: 1px solid ${({ theme }) => theme.palette.secondary.gray};
`;

export {
  StyledAddSectionButton,
  StyledAddSectionContainer,
  StyledCardContent,
  StyledCenter,
  StyledCenterContainer,
  StyledCenterContent,
  StyledContainer,
  StyledContent,
  StyledContentContainer,
  StyledEmptyContent,
  StyledFooter,
  StyledNameInput,
  StyledNameInputPreview,
  StyledNoteTypesContainer,
  StyledSection,
  StyledSettings
};
