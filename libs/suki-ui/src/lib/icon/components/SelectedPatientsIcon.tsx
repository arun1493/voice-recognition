import { ICON_COLORS, SvgProps } from "../Icon";

const SelectedPatientsIcon = ({
  width = 24,
  height = 24,
  color = ICON_COLORS.green,
  opacity = "1",
  ...props
}: SvgProps) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="10" cy="7" r="5" fill={color} opacity={opacity} />
    <path
      d="M2 19C2 15.6863 4.68629 13 8 13H12C15.3137 13 18 15.6863 18 19V20C18 21.1046 17.1046 22 16 22H4C2.89543 22 2 21.1046 2 20V19Z"
      fill={color}
      opacity={opacity}
    />
    <path
      d="M19.8274 21V19C19.8274 16.027 17.7398 13.4761 15 13C20.6481 13.4571 22.0199 17.1905 21.9998 19V19.9916C21.9998 20.5411 21.5564 20.9877 21.0069 20.9916L19.8274 21Z"
      fill={color}
      opacity={opacity}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.8325 11.9966C15.2652 11.0428 16.2442 9.11933 16.2442 6.9019C16.2442 6.01765 16.0885 5.18016 15.8105 4.43225C17.1098 5.09292 18 6.44251 18 8.00003C18 10.2092 16.2091 12 14 12C13.9439 12 13.8881 11.9989 13.8325 11.9966Z"
      fill={color}
      opacity={opacity}
    />
  </svg>
);

export default SelectedPatientsIcon;

export { SelectedPatientsIcon };
