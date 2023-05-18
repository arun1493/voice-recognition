import styled from "styled-components";
import { flexCenter, mediaScreenWidth } from "@suki-web/suki-ui";

const StyledParagraphContainer = styled.div`
  padding: 0 12px;

  @media (min-width: ${mediaScreenWidth.xs}) {
    width: 444px;
    padding: 0 24px;
  }
  @media (min-width: ${mediaScreenWidth.sm}) {
    width: 280px;
  }
  @media (min-width: ${mediaScreenWidth.md}) {
    width: 320px;
  }
  @media (min-width: ${mediaScreenWidth.lg}) {
    width: 360px;
    padding: 0 44px;
  }
  @media (min-width: ${mediaScreenWidth.xl}) {
    width: 420px;
  }
`;

const StyledEmptyContainer = styled(StyledParagraphContainer)`
  color: ${({ theme }) => theme.pages.note.card.emptyCard.color};
  ${flexCenter};
  height: calc(100% - 94px);
  box-sizing: content-box;
`;

const StyledParagraph = styled.div`
  margin: 0 0 32px;
`;

const StyledTitle = styled.div`
  margin: 0 0 8px;
`;

export { StyledEmptyContainer, StyledParagraph, StyledParagraphContainer, StyledTitle };
