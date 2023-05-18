import { FunctionComponent } from "react";

import { ListItemVariant } from "./";
import { StyledSukiListItemSubtitle } from "./sukiListItemSubtitle.styled";

interface SukiListItemSubtitleProps {
  subtitle?: string;
  variant: ListItemVariant;
}

const SukiListItemSubtitle: FunctionComponent<SukiListItemSubtitleProps> = ({ variant, subtitle }) => {
  return <StyledSukiListItemSubtitle variant={variant}>{subtitle}</StyledSukiListItemSubtitle>;
};

export { SukiListItemSubtitle, SukiListItemSubtitleProps };
export default SukiListItemSubtitle;
