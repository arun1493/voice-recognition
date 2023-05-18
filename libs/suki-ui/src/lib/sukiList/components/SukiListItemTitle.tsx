import { FunctionComponent } from "react";

import { ListItemVariant } from "./";
import { StyledSukiListItemTitle } from "./sukiListItemTitle.styled";

interface SukiListItemTitleProps {
  isTitleBold?: boolean;
  title?: string;
  variant: ListItemVariant;
  wrapText?: boolean;
}

const SukiListItemTitle: FunctionComponent<SukiListItemTitleProps> = ({
  isTitleBold = false,
  title,
  variant,
  wrapText
}) => {
  return (
    <StyledSukiListItemTitle isTitleBold={isTitleBold} variant={variant} wrapText={wrapText}>
      {title}
    </StyledSukiListItemTitle>
  );
};

export { SukiListItemTitle, SukiListItemTitleProps };
export default SukiListItemTitle;
