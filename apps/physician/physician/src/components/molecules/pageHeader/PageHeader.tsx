import _noop from "lodash/noop";
import { FunctionComponent } from "react";
import { ScreenSize, Text, useBreakpoint } from "@suki-web/suki-ui";

import { StyledHeader } from "./pageHeader.styled";

interface PageHeaderProps {
  hasBorderBottom?: boolean;
  renderActions?: () => void;
  title: string;
}

const PageHeader: FunctionComponent<PageHeaderProps> = ({ hasBorderBottom = true, renderActions = _noop, title }) => {
  const { LG, XL } = ScreenSize;
  const breakpoint = useBreakpoint();
  const isLargeScreen = [LG, XL].includes(breakpoint);

  return (
    <StyledHeader hasBorderBottom={hasBorderBottom}>
      {renderActions()}
      <Text isBold={true} size={isLargeScreen ? "xl" : "lg"}>
        {title}
      </Text>
    </StyledHeader>
  );
};

export default PageHeader;

export { PageHeader, PageHeaderProps };
