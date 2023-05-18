import { ICON_COLORS, SvgProps } from "../Icon";

const SelectedCloseIcon = ({
  width = 56,
  height = 56,
  additionalColor = ICON_COLORS.blueGray,
  color = ICON_COLORS.black,
  opacity = "1",
  ...props
}: SvgProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
  >
    <g transform="translate(0 -.09)" fill="none" fillRule="evenodd">
      <circle fillOpacity=".12" fill={additionalColor} cx="12" cy="12" r="12" />
      <path
        d="M6.152 17.2a.525.525 0 0 0 0 .74c.204.2.528.2.733 0L12 12.759l5.116 5.183c.204.2.528.2.732 0a.525.525 0 0 0 0-.74l-5.116-5.173 5.116-5.183a.513.513 0 0 0 0-.73 2.859 2.859 0 0 0-.732 0L12 11.286 6.885 6.114a2.863 2.863 0 0 0-.733 0 .514.514 0 0 0 0 .731l5.116 5.183-5.116 5.173z"
        fill={color}
        opacity={opacity}
      />
    </g>
  </svg>
);

export { SelectedCloseIcon };

export default SelectedCloseIcon;
