import { FunctionComponent } from "react";
import { Icon, IconType, Text } from "@suki-web/suki-ui";

import { StyledHeader } from "./stickyHeader.styled";

interface StickyHeaderProps {
  icon?: IconType;
  title: string;
}

const StickyHeader: FunctionComponent<StickyHeaderProps> = ({ icon, title, ...restStickyHeaderProps }) => (
  <StyledHeader {...restStickyHeaderProps}>
    <Text isBold={true}>{title}</Text>
    {icon && <Icon icon={icon} size="2xs" />}
  </StyledHeader>
);

export { StickyHeader, StickyHeaderProps };

export default StickyHeader;
