import styled from "styled-components";

const tooltipMargin = "30px";

const StyledSukiTooltipWrapper = styled.div`
  display: inline-block;
  position: relative;
`;

const StyledSukiTooltip = styled.div`
  position: absolute;
  left: 56%;
  transform: translateX(-56%);
  padding: 4px 8px;
  background: ${({ theme }) => theme.components.tooltip.background};
  border-radius: 4px;
  white-space: nowrap;
  z-index: 3;

  &.bottom {
    bottom: calc(${tooltipMargin} * -1);
  }

  &.left {
    left: auto;
    right: calc(100% + ${tooltipMargin});
    top: 50%;
    transform: translateX(0) translateY(-50%);
  }

  &.right {
    left: calc(100% + ${tooltipMargin});
    top: 50%;
    transform: translateX(0) translateY(-50%);
  }

  &.top {
    top: calc(${tooltipMargin} * -1);
  }
`;

export { StyledSukiTooltip, StyledSukiTooltipWrapper };
