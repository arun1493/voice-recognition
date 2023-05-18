import { ICON_COLORS, SvgProps } from "../Icon";

const DotIcon = ({ width = 24, height = 24, color = ICON_COLORS.orange, opacity = "1", ...props }: SvgProps) => (
  <svg width={width} height={height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="12.5" cy="12.5" r="5.5" fill={color} fillRule="evenodd" opacity={opacity} />
  </svg>
);

export default DotIcon;
