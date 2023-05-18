import { ICON_COLORS, SvgProps } from "../Icon";

const SelectedSearchIcon = ({
  width = 24,
  height = 24,
  color = ICON_COLORS.green,
  opacity = "1",
  ...props
}: SvgProps) => {
  return (
    <svg width={width} height={height} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <circle cx="10.5" cy="9.5" r="5.5" stroke={color} strokeWidth="2" />
      <rect
        x="13.7894"
        y="16.2377"
        width="2"
        height="7"
        rx="1"
        transform="rotate(-35 13.7894 16.2377)"
        fill={color}
        opacity={opacity}
      />
    </svg>
  );
};

export default SelectedSearchIcon;

export { SelectedSearchIcon };
