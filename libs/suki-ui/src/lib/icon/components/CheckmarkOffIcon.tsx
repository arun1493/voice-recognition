import { ICON_COLORS, SvgProps } from "../Icon";

const CheckmarkOffIcon = ({ height = 24, color = "#E6E6E6", opacity = "1", width = 24, ...props }: SvgProps) => (
  <svg height={height} viewBox="0 0 24 24" width={width} xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="11" cy="11" r="11" transform="translate(1 1)" fill={color} fillRule="evenodd" opacity={opacity} />
  </svg>
);

export default CheckmarkOffIcon;
