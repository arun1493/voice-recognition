import { FunctionComponent } from "react";

import { SukiTooltip } from "../sukiTooltip";
import { StyledIconButton } from "./iconButton.styled";
import SukiIcon, { SukiIconType } from "../icon/SukiIcon";

type SizeType = "xs" | "sm" | "md" | "lg";

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: JSX.Element | SukiIconType;
  isActive?: boolean;
  isDisabled?: boolean;
  size?: SizeType;
  testId?: string;
  tooltip?: string;
}

const IconButton: FunctionComponent<IconButtonProps> = ({
  icon,
  isActive,
  isDisabled,
  onClick = () => null,
  size = "sm",
  testId = "",
  tooltip = ""
}) => {
  return (
    <SukiTooltip content={isDisabled ? "" : tooltip}>
      <StyledIconButton
        className={isActive ? "is-active" : ""}
        data-cy={testId}
        {...(isDisabled ? { disabled: true } : {})}
        onClick={onClick}
        size={size}
      >
        {typeof icon === "string" ? <SukiIcon icon={icon} size="sm" /> : icon}
      </StyledIconButton>
    </SukiTooltip>
  );
};

export default IconButton;

export { IconButton, IconButtonProps, SizeType };
