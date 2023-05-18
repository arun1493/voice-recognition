import { ICON_COLORS, SvgProps } from "../Icon";

const HelpChatIcon = ({ width = 56, height = 56, color = ICON_COLORS.green, opacity = "1", ...props }: SvgProps) => (
  <svg width={width} height={height} viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M28 0A27.92 27.92 0 0 0 0 28a27.92 27.92 0 0 0 28 28 27.92 27.92 0 0 0 28-28A27.92 27.92 0 0 0 28 0zm2.319 38.69h-9.02l-6.265 6.365V38.69h-1.253c-2.004 0-3.508-1.655-3.508-3.564V24.691c0-2.036 1.629-3.564 3.508-3.564h5.889v8.146c0 2.8 2.255 5.218 5.136 5.218H33.2l.627.636c0 1.91-1.504 3.564-3.508 3.564zm14.533-9.417c0 2.036-1.629 3.563-3.508 3.563H40.09V39.2l-6.264-6.364h-9.02c-2.005 0-3.509-1.654-3.509-3.563V18.836c0-2.036 1.629-3.563 3.508-3.563h16.538c2.004 0 3.508 1.654 3.508 3.563v10.437z"
      fill={color}
      fillRule="nonzero"
      opacity={opacity}
    />
  </svg>
);

export default HelpChatIcon;
