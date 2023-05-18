import { ICON_COLORS, SvgProps } from "../Icon";

const MoreOutlineIcon = ({ width = 32, height = 32, color = ICON_COLORS.black, opacity = "1", ...props }: SvgProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="64 64 896 896"
    focusable="false"
    data-icon="more"
    width={width}
    height={height}
    fill={color}
    opacity={opacity}
    aria-hidden="true"
    {...props}
  >
    <path d="M456 231a56 56 0 10112 0 56 56 0 10-112 0zm0 280a56 56 0 10112 0 56 56 0 10-112 0zm0 280a56 56 0 10112 0 56 56 0 10-112 0z"></path>
  </svg>
);

export default MoreOutlineIcon;
