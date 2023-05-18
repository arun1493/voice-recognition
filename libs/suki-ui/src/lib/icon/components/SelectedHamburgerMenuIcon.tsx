import { ICON_COLORS, SvgProps } from "../Icon";

const SelectedHamburgerMenuIcon = ({
  width = 24,
  height = 24,
  color = ICON_COLORS.green,
  opacity = "1",
  ...props
}: SvgProps) => (
  <svg width={width} height={height} fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="5" y="6" width="14" height="2" rx="1" fill={color} opacity={opacity} />
    <rect x="5" y="11" width="14" height="2" rx="1" fill={color} opacity={opacity} />
    <rect x="5" y="16" width="14" height="2" rx="1" fill={color} opacity={opacity} />
  </svg>
);

export default SelectedHamburgerMenuIcon;

export { SelectedHamburgerMenuIcon };
