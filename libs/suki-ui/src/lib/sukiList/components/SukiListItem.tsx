import { FunctionComponent } from "react";

import { SukiIcon, SukiIconType } from "../../icon";
import { SukiListItemTitle } from "./SukiListItemTitle";
import { SukiListItemSubtitle } from "./SukiListItemSubtitle";
import { StyledSukiListItem, StyledSukiTitleAreaWrapper } from "./sukiListItem.styled";

interface SukiListItemProps {
  hasBottomBorder?: boolean;
  isTitleBold?: boolean;
  leftIcon?: SukiIconType;
  onClick?: VoidFunction;
  onMouseEnter?: VoidFunction;
  onMouseLeave?: VoidFunction;
  rightIcon?: SukiIconType | JSX.Element;
  subtitle?: string;
  testId?: string;
  title?: string;
  variant: ListItemVariant;
  wrapText?: boolean;
}

type ListItemVariant = "simple" | "color" | "small" | "title";

const SukiListItem: FunctionComponent<SukiListItemProps> = ({
  children,
  hasBottomBorder,
  isTitleBold,
  leftIcon,
  onClick,
  onMouseEnter = () => null,
  onMouseLeave = () => null,
  rightIcon,
  subtitle,
  testId,
  title,
  variant,
  wrapText,
  ...restSukiListItemProps
}) => {
  return (
    <StyledSukiListItem
      hasBottomBorder={hasBottomBorder}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      {...(!!testId && { "data-testid": testId })}
      variant={variant}
      {...restSukiListItemProps}
    >
      {leftIcon && <SukiIcon className="action" icon={leftIcon} />}
      <StyledSukiTitleAreaWrapper hasLeftIcon={!!leftIcon}>
        {title && <SukiListItemTitle isTitleBold={isTitleBold} title={title} variant={variant} wrapText={wrapText} />}
        {subtitle && <SukiListItemSubtitle subtitle={subtitle} variant={variant} />}
        {children}
      </StyledSukiTitleAreaWrapper>
      {typeof rightIcon === "string" ? <SukiIcon className="action" icon={rightIcon} /> : rightIcon}
    </StyledSukiListItem>
  );
};

export { SukiListItem, SukiListItemProps, ListItemVariant };
export default SukiListItem;
