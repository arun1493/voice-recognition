import styled from "styled-components";
import { flexCenter, gradient, mediaScreenWidth, scrollOnHover, styledCenterContent } from "@suki-web/suki-ui";

const StyledContainer = styled.div`
  width: 100%;
  height: calc(100% - 2px);
  margin-top: 2px;
  overflow-y: hidden;
  ${flexCenter};
  background-color: ${({ theme }) => theme.pages.unfinishedNotes.backgroundColor};
  z-index: 1;
`;

const StyledContent = styled.section`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.pages.unfinishedNotes.sectionBackgroundColor};
  border: 1px solid ${({ theme }) => theme.pages.unfinishedNotes.borderColor};
  box-sizing: border-box;
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

const ListContainer = styled.div<{ hasScrollBar: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 0 8px;
  height: 100%;
  ${({ hasScrollBar }) => (hasScrollBar ? `${scrollOnHover}` : "overflow: auto")}

  > svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media (min-width: ${mediaScreenWidth.xs}) {
    padding: 0 16px;
  }
`;

const StyledEmptyPlaceHolder = styled.div`
  height: 80px;
  width: 100%;
`;

const StyledGradient = styled.div`
  ${gradient};
`;

const StyledCenterContent = styled.div`
  ${styledCenterContent}
`;

export { ListContainer, StyledCenterContent, StyledContainer, StyledContent, StyledEmptyPlaceHolder, StyledGradient };
