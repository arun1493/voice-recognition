import { FunctionComponent, useState } from "react";

import { Text } from "../text";
import { StyledSukiTooltip, StyledSukiTooltipWrapper } from "./sukiTooltip.styled";

interface SukiTooltipProps {
  content: string;
  delay?: number;
  position?: "bottom" | "left" | "right" | "top";
}

const SukiTooltip: FunctionComponent<SukiTooltipProps> = ({ children, content, delay = 400, position = "bottom" }) => {
  let timeout: ReturnType<typeof setTimeout>;
  const [active, setActive] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, delay);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  return (
    <StyledSukiTooltipWrapper onMouseEnter={showTip} onMouseLeave={hideTip} onClick={hideTip}>
      {children}
      {active && !!content && (
        <StyledSukiTooltip className={position}>
          <Text color="white" size="xs">
            {content}
          </Text>
        </StyledSukiTooltip>
      )}
    </StyledSukiTooltipWrapper>
  );
};

export { SukiTooltip };
export default SukiTooltip;
