import styled from "styled-components";
import { Header, mediaScreenWidth, Text } from "@suki-web/suki-ui";

const FIRST_OL_PADDING = "28px";
const SECOND_OL_PADDING = "36px";
const MARGIN_BOTTOM = "16px";

const StyledPage = styled.div`
  width: 100%;
  height: 100%;
  font-size: 16px;
  line-height: 24px;

  li {
    margin-bottom: ${MARGIN_BOTTOM};
  }
`;

const StyledTitle = styled(Header)`
  text-align: center;
  padding: 32px 0;
`;

const StyledHeader = styled.span`
  font-weight: 600;
  margin-bottom: ${MARGIN_BOTTOM};
  display: inline-block;
`;

const StyledContainer = styled.div`
  padding: 0 16px 16px;

  @media (min-width: ${mediaScreenWidth.xs}) {
    padding: 0 32px 32px;
  }

  @media (min-width: ${mediaScreenWidth.md}) {
    padding: 0 64px 64px;
  }

  @media (min-width: ${mediaScreenWidth.lg}) {
    padding: 0 80px 64px;
  }

  @media (min-width: ${mediaScreenWidth.xl}) {
    padding: 0 92px 64px;
  }
`;

const StyledParagraph = styled(Text)`
  margin-bottom: ${MARGIN_BOTTOM};
`;

const StyledOrderedList = styled.ol`
  list-style: auto;
  padding-left: ${FIRST_OL_PADDING};
  counter-reset: item;
  position: relative;

  li > ol {
    padding-left: ${SECOND_OL_PADDING};
  }

  li > ol > li {
    position: relative;
  }

  li > ol > li:before {
    content: counters(item, ".") " ";
    top: 0;
    left: -${SECOND_OL_PADDING};
  }
`;

const StyledLI = styled.li`
  display: block;

  &:before {
    content: counters(item, ".") ".";
    counter-increment: item;
    position: absolute;
    left: 0px;
  }
`;

const StyledTerm = styled.span`
  font-weight: 600;
`;

const StyledUnderline = styled.span`
  text-decoration: underline;
`;

export {
  StyledContainer,
  StyledHeader,
  StyledLI,
  StyledOrderedList,
  StyledPage,
  StyledParagraph,
  StyledTerm,
  StyledTitle,
  StyledUnderline
};
