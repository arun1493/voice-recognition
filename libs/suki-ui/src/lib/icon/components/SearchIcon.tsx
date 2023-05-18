import { ICON_COLORS, SvgProps } from "../Icon";

const SearchIcon = ({ color = ICON_COLORS.black, width = 24, height = 24, opacity = "1", ...props }: SvgProps) => (
  <svg width={width} height={height} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <circle color={color} opacity={opacity} cx="10.5" cy="9.5" r="5.5" stroke="currentcolor" strokeWidth="2" />
    <rect
      x="13.7894"
      y="16.2376"
      width="2"
      height="7"
      rx="1"
      transform="rotate(-35 13.7894 16.2376)"
      fill={color}
      opacity={opacity}
    />
  </svg>
);

export default SearchIcon;

export { SearchIcon };
