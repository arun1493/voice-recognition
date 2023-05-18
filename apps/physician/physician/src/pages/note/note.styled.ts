import styled from "styled-components";
import { flexCenter, mediaScreenWidth, scrollOnHover } from "@suki-web/suki-ui";

import { EMR_TOOLBAR_HEIGHT, HEADER_HEIGHT } from "../../constants";
import { NoteSubmissionButton } from "../../components/atoms/noteSubmissionButton";

const StyledCenterContent = styled.div`
  margin-top: 24vh;
  text-align: center;
  font-size: 16px;
  font-weight: normal;
  width: 100%;
`;

const StyledNoteHeading = styled.div`
  text-align: center;
  margin: 24px 0;
`;

const StyledNoteWrapper = styled.div<{ isCardsVisible: boolean; isShownEmrToolbar: boolean }>`
  position: relative;
  display: flex;
  overflow: hidden;
  height: 100vh;
  transition: all 1s ease-in-out;
  left: ${({ isCardsVisible }) => (isCardsVisible ? "-100%" : 0)};
  width: ${({ isCardsVisible }) => (isCardsVisible ? "200%" : "100%")};

  @media (min-width: ${mediaScreenWidth.xs}) {
    height: ${({ isShownEmrToolbar }) =>
      isShownEmrToolbar ? `calc(100vh - ${HEADER_HEIGHT + EMR_TOOLBAR_HEIGHT}px)` : `calc(100vh - ${HEADER_HEIGHT}px)`};
    left: ${({ isCardsVisible }) => (isCardsVisible ? "-92%" : 0)};
  }

  @media (min-width: ${mediaScreenWidth.sm}) {
    left: 0;
    width: auto;
  }
`;

const StyledScrollableContainer = styled.div`
  ${scrollOnHover};
  overflow-x: hidden;
  flex: 1;
  opacity: 0;
`;

const StyledNote = styled.div<{ isCardsVisible?: boolean; isEmpty?: boolean }>`
  width: 100%;
  background-color: ${({ theme }) => theme.pages.note.backgroundColor};
  min-height: calc(100vh - ${HEADER_HEIGHT}px);
  box-sizing: border-box;
  border-top: 1px solid ${({ theme }) => theme.pages.note.borderColor};
  border-left: 1px solid ${({ theme }) => theme.pages.note.borderColor};
  margin: ${({ isEmpty }) => (isEmpty ? "0 auto" : "0 0 0 auto")};
  position: relative;
  transition: all 1s ease-in-out;
  display: flex;
  flex-direction: column;

  @media (min-width: ${mediaScreenWidth.xs}) {
    width: 484px;
    ${({ isCardsVisible, theme }) =>
      isCardsVisible && `box-shadow: 5px 0 5px -5px ${theme.pages.note.card.shadowColor}`};
  }

  @media (min-width: ${mediaScreenWidth.sm}) {
    width: ${({ isCardsVisible }) => (isCardsVisible ? "372px" : "664px")};
  }

  @media (min-width: ${mediaScreenWidth.md}) {
    width: ${({ isCardsVisible }) => (isCardsVisible ? "572px" : "776px")};
  }

  @media (min-width: ${mediaScreenWidth.lg}) {
    width: ${({ isCardsVisible }) => (isCardsVisible ? "682px" : "936px")};
  }

  @media (min-width: ${mediaScreenWidth.xl}) {
    width: ${({ isCardsVisible }) => (isCardsVisible ? "782px" : "1076px")};
  }
`;

const StyledNoteSubmissionButton = styled(NoteSubmissionButton)<{ isCardsVisible: boolean }>`
  position: fixed;
  bottom: 32px;
  right: 16px;
  border: none;

  @media (min-width: ${mediaScreenWidth.xs}) {
    right: calc(50% - 212px);
  }

  @media (min-width: ${mediaScreenWidth.sm}) {
    right: calc(50% - ${({ isCardsVisible }) => (isCardsVisible ? 6 : 300)}px);
  }

  @media (min-width: ${mediaScreenWidth.md}) {
    right: calc(50% - ${({ isCardsVisible }) => (isCardsVisible ? 60 : 356)}px);
  }

  @media (min-width: ${mediaScreenWidth.lg}) {
    right: calc(50% - ${({ isCardsVisible }) => (isCardsVisible ? 76 : 404)}px);
  }

  @media (min-width: ${mediaScreenWidth.xl}) {
    right: calc(50% - ${({ isCardsVisible }) => (isCardsVisible ? 100 : 464)}px);
  }
`;

const StyledReadOnlyIcon = styled.div`
  margin-right: 8px;
`;

const StyledReadOnlyTipContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
`;

const StyledReadOnlyTip = styled.div`
  ${flexCenter};
  flex-direction: row;
  padding: 4px 12px;
  margin-right: 16px;
  background: ${({ theme }) => theme.pages.note.readOnlyTip.background};
  box-shadow: 0px 1px 2px ${({ theme }) => theme.pages.note.readOnlyTip.tipShadow};
  border-radius: 0px 0px 4px 4px;

  @media (min-width: ${mediaScreenWidth.sm}) {
    margin-right: 24px;
  }

  @media (min-width: ${mediaScreenWidth.md}) {
    margin-right: 48px;
  }

  @media (min-width: ${mediaScreenWidth.lg}) {
    margin-right: 64px;
  }
`;

const StyledGradient = styled.div`
  position: absolute;
  width: calc(100% - 16px);
  height: 48px;
  bottom: 0;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) -39.29%,
    ${({ theme }) => theme.pages.note.backgroundColor} 87.43%
  );
`;

export {
  StyledCenterContent,
  StyledGradient,
  StyledNote,
  StyledNoteHeading,
  StyledNoteSubmissionButton,
  StyledNoteWrapper,
  StyledReadOnlyIcon,
  StyledReadOnlyTip,
  StyledReadOnlyTipContainer,
  StyledScrollableContainer
};
