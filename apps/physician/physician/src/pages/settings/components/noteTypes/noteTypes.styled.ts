import styled from "styled-components";
import { mediaScreenWidth, scrollOnHover, styledCenterContent } from "@suki-web/suki-ui";

import { StickyHeader } from "../../../../components/molecules";

const StyledCenterContent = styled.div`
  ${styledCenterContent}
`;

const StyledNoteTypesContainer = styled.div<{ hasScrollBar: boolean }>`
  height: 100%;
  ${({ hasScrollBar }) => (hasScrollBar ? `${scrollOnHover}` : "overflow: auto")};
  padding: 0 8px;

  @media (min-width: ${mediaScreenWidth.xs}) {
    padding: 0 16px;
  }

  @media (min-width: ${mediaScreenWidth.md}) {
    padding: 0 24px;
  }
`;

const StyledEmptyContent = styled(StyledCenterContent)`
  margin-top: 80px;
`;

const StyledSeparator = styled.div`
  height: 16px;
`;

const StyledStickyHeader = styled(StickyHeader)`
  padding: 16px 8px 0;
`;

export { StyledCenterContent, StyledEmptyContent, StyledNoteTypesContainer, StyledSeparator, StyledStickyHeader };
