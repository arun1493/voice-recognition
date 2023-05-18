import { ICON_COLORS, SvgProps } from "../Icon";

const KebabMenuIcon = ({ width = 48, height = 48, color = ICON_COLORS.green, opacity = "1", ...props }: SvgProps) => (
  <svg width={width} height={height} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
      fill={color}
      fillRule="evenodd"
      opacity={opacity}
    />
  </svg>
);

export default KebabMenuIcon;
