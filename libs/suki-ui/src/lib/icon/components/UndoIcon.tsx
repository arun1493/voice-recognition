import { ICON_COLORS, SvgProps } from "../Icon";

const UndoIcon = ({ width = 48, height = 48, color = ICON_COLORS.green, ...props }: SvgProps) => (
  <svg width={width} height={height} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" fillRule="evenodd">
      <path d="M11 13 4 8l7-5z" fill={color} fillRule="nonzero" />
      <path d="M5 18h8.306c2.6 0 4.694-2.23 4.694-5s-2.094-5-4.694-5H7.889" stroke={color} strokeWidth="2" />
    </g>
  </svg>
);

export default UndoIcon;
