import styled from "styled-components";
import { mediaScreenWidth, scrollOnHover, styledCenterContent } from "@suki-web/suki-ui";

const StyledCenterContent = styled.div`
  ${styledCenterContent}
`;

const StyledScriptsContainer = styled.div<{ hasScrollBar: boolean }>`
  height: inherit;
  ${({ hasScrollBar }) => (hasScrollBar ? `${scrollOnHover}` : "overflow: auto")};
  padding: 8px;

  @media (min-width: ${mediaScreenWidth.xs}) {
    padding: 8px 16px;
  }

  @media (min-width: ${mediaScreenWidth.md}) {
    padding: 8px 24px;
  }
`;

const StyledEmptyContent = styled(StyledCenterContent)`
  color: ${({ theme }) => theme.pages.settings.emptyListTextColor};
  margin-top: 80px;
`;

const StyledEmptyText = styled.div`
  font-size: 18px;
  line-height: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.pages.settings.emptyListTextColor};
`;

export { StyledCenterContent, StyledEmptyContent, StyledEmptyText, StyledScriptsContainer };
