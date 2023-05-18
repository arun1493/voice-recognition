import { FunctionComponent, useEffect, useRef, useState } from "react";

import { useThemeBreakpoint } from "../hooks";
import { SukiIcon, SukiIconType } from "../icon";
import { StyledFab, StyledFabContent, StyledFabIconWrapper, StyledFabText, StyledFabTextWrapper } from "./fab.styled";

type FabSize = "sm" | "md";
type FabPosition = "tl" | "tc" | "tr" | "ml" | "mc" | "mr" | "bl" | "bc" | "br";

interface FabProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: SukiIconType;
  position: FabPosition;
  text?: string;
}

const Fab: FunctionComponent<FabProps> = ({
  children,
  icon,
  position = "br",
  text = "",
  type = "button",
  ...htmlButtonProps
}) => {
  const { isUp } = useThemeBreakpoint();
  const size = isUp("sm") ? "md" : "sm";

  const [textWidth, setTextWidth] = useState(0);
  const textEl = useRef() as React.MutableRefObject<HTMLDivElement>;
  useEffect(() => setTextWidth(textEl?.current?.clientWidth), [text]);

  return (
    <StyledFab position={position} textWidth={textWidth} {...htmlButtonProps}>
      <StyledFabContent>
        <StyledFabIconWrapper size={size}>
          <SukiIcon color="primary" icon={icon} />
        </StyledFabIconWrapper>
        <StyledFabTextWrapper>{text && <StyledFabText ref={textEl}>{text}</StyledFabText>}</StyledFabTextWrapper>
      </StyledFabContent>
    </StyledFab>
  );
};

export { Fab, FabProps, FabPosition, FabSize };
export default Fab;
