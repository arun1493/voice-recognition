import { ICON_COLORS, SvgProps } from "../Icon";

const HelpPlayIcon = ({ width = 48, height = 48, color = ICON_COLORS.green, opacity = "1", ...props }: SvgProps) => (
  <svg width={width} height={height} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M24 0A24 24 0 1 1 0 24C0 10.745 10.745 0 24 0zm-5.1 34.8V13.2L33.075 24 18.9 34.8z"
      fill={color}
      fillRule="evenodd"
      opacity={opacity}
    />
  </svg>
);

export default HelpPlayIcon;
