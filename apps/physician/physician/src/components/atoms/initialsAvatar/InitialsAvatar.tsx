import _noop from "lodash/noop";
import { FunctionComponent } from "react";

import { StyledInitialsAvatar } from "./initialsAvatar.styled";

interface InitialsAvatarProps {
  firstName?: string;
  isMinimized?: boolean;
  lastName?: string;
}

interface StyledAvatarProps {
  isMinimized?: boolean;
}

const InitialsAvatar: FunctionComponent<InitialsAvatarProps> = ({
  firstName,
  isMinimized = false,
  lastName,
  ...props
}) => {
  const firstLetter = firstName?.[0] ?? " ";
  const secondLetter = lastName?.[0] ?? " ";

  return (
    <StyledInitialsAvatar isMinimized={isMinimized} {...props}>
      {(firstLetter + secondLetter).toUpperCase()}
    </StyledInitialsAvatar>
  );
};

export { InitialsAvatar, InitialsAvatarProps, StyledAvatarProps };

export default InitialsAvatar;
