import _noop from "lodash/noop";
import { FunctionComponent, useState } from "react";

import { Tooltip } from "../tooltip";
import { lightTheme as theme } from "../theme";
import { getTooltipContent } from "../../helpers";
import { Icon, IconSize, IconType } from "../icon";
import { StyledNavigationIcon } from "./navigationIcon.styled";

interface NavigationIconProps {
  color?: string;
  icon: IconType;
  isActive?: boolean;
  isDisabled?: boolean;
  isWithDelay?: boolean;
  isWithTooltip?: boolean;
  onClick: () => void;
  resetTooltip?: () => void;
  size?: IconSize;
  testId?: string;
}

const sizes: Record<string, number> = {
  "3xs": 28,
  "2xs": 28,
  "xs": 32,
  "sm": 40,
  "md": 50,
  "lg": 64,
  "xl": 88,
  "2xl": 122
};

const NavigationIcon: FunctionComponent<NavigationIconProps> = ({
  color,
  icon,
  isActive,
  isDisabled = false,
  isWithDelay = true,
  isWithTooltip = true,
  onClick,
  resetTooltip = _noop,
  size = "xs",
  testId = ""
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isTooltip, setIsTooltip] = useState<boolean>(false);

  const onMouseEnter = () => {
    setIsHovered(true);
    setIsTooltip(true);
  };

  const onMouseLeave = () => {
    resetTooltip();
    setIsHovered(false);
    setIsTooltip(false);
  };

  let switchedIcon = icon;
  if (isHovered || isActive) {
    switch (icon) {
      case "hamburgerMenu":
        switchedIcon = "selectedHamburgerMenu";
        break;
      case "patients":
        switchedIcon = "selectedPatients";
        break;
      case "refresh":
        switchedIcon = "refresh";
        break;
      case "search":
        switchedIcon = "selectedSearch";
        break;
      case "newNote":
        switchedIcon = "selectedNewNote";
        break;
      case "emrSync":
        switchedIcon = "emrSync";
        break;
    }
  }

  const onButtonClick = () => {
    setIsTooltip(false);
    onClick();
  };

  const roundSize = size ? sizes[size] : sizes["sm"];
  const tooltipContent = getTooltipContent(icon);
  const shouldShowTooltip = isTooltip && !isDisabled && tooltipContent && isWithTooltip;

  return (
    <StyledNavigationIcon
      data-cy={testId}
      isActive={isActive}
      isDisabled={isDisabled}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      roundSize={roundSize}
    >
      {isDisabled ? (
        <Icon color={theme.palette.primary.black20} icon={icon} size={size} />
      ) : (
        <Icon color={color} icon={switchedIcon} onClick={onButtonClick} size={size} />
      )}
      {shouldShowTooltip && <Tooltip content={tooltipContent} isWithDelay={isWithDelay} />}
    </StyledNavigationIcon>
  );
};

export default NavigationIcon;

export { NavigationIcon };
