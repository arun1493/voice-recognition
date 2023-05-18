import styled from "styled-components";
import { Header, mediaScreenWidth, Text } from "@suki-web/suki-ui";

const OL_PADDING = "24px";
const MARGIN_BOTTOM = "16px";

const StyledPage = styled.div`
  width: 100%;
  height: 100%;
  font-size: 16px;
  line-height: 24px;
`;

const StyledTitle = styled(Header)`
  text-align: center;
  padding: 32px 0;
`;

const StyledHeader = styled.span`
  display: inline-block;
  font-weight: 600;
  margin-bottom: ${MARGIN_BOTTOM};
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
  & @media (min-width: ${mediaScreenWidth.xl}) {
    padding: 0 92px 64px;
  }
`;

const StyledParagraph = styled(Text)`
  margin-bottom: ${MARGIN_BOTTOM};
`;

const StyledOrderedList = styled.ol`
  list-style: auto;
  padding-left: ${OL_PADDING};

  li {
    margin-bottom: ${MARGIN_BOTTOM};
  }
`;

const StyledLatinOrderedList = styled.ol`
  list-style: lower-latin;
  padding-left: ${OL_PADDING};
`;

const StyledRomanOrderedList = styled.ol`
  list-style: lower-roman;
  padding-left: ${OL_PADDING};
`;

const StyledTerm = styled.span`
  font-weight: 600;
`;

export {
  StyledContainer,
  StyledHeader,
  StyledLatinOrderedList,
  StyledOrderedList,
  StyledPage,
  StyledParagraph,
  StyledRomanOrderedList,
  StyledTerm,
  StyledTitle
};
