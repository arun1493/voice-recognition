import { ICON_COLORS, SvgProps } from "../Icon";

const BackIcon = ({ height = 24, color = ICON_COLORS.green, opacity = "1", width = 24, ...props }: SvgProps) => (
  <svg height={height} viewBox="0 0 18 14" width={width} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M7.70355 0.296971C7.30827 -0.0989903 6.66741 -0.0989903 6.27213 0.296971L0.296455 6.28305C-0.0988185 6.67901 -0.0988182 7.32099 0.296455 7.71695L6.27213 13.703C6.66741 14.099 7.30827 14.099 7.70355 13.703C8.09882 13.3071 8.09882 12.6651 7.70355 12.2691L3.44184 8H17C17.5523 8 18 7.55228 18 7C18 6.44772 17.5523 6 17 6H3.44183L7.70354 1.73087C8.09882 1.33491 8.09882 0.692932 7.70355 0.296971Z"
      fill={color}
      opacity={opacity}
    />
  </svg>
);

export default BackIcon;
