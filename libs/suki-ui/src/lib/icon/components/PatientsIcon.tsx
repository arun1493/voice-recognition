import { ICON_COLORS, SvgProps } from "../Icon";

const PatientsIcon = ({
  width = 24,
  height = 24,
  additionalColor = ICON_COLORS.white,
  color = ICON_COLORS.black,
  ...props
}: SvgProps) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="10" cy="7" r="4" stroke={color} strokeWidth="2" />
    <mask id="path-2-inside-1_307_941" fill={additionalColor}>
      <path d="M2 19C2 15.6863 4.68629 13 8 13H12C15.3137 13 18 15.6863 18 19V20C18 21.1046 17.1046 22 16 22H4C2.89543 22 2 21.1046 2 20V19Z" />
    </mask>
    <path
      d="M8 15H12V11H8V15ZM16 19V20H20V19H16ZM16 20H4V24H16V20ZM4 20V19H0V20H4ZM4 20H0C0 22.2091 1.79086 24 4 24V20ZM16 20V24C18.2091 24 20 22.2091 20 20H16ZM12 15C14.2091 15 16 16.7909 16 19H20C20 14.5817 16.4183 11 12 11V15ZM8 11C3.58172 11 0 14.5817 0 19H4C4 16.7909 5.79086 15 8 15V11Z"
      fill={color}
      mask="url(#path-2-inside-1_307_941)"
    />
    <path
      d="M19.8274 21V19C19.8274 16.027 17.7398 13.4761 15 13C20.6481 13.4571 22.0199 17.1905 21.9998 19V19.9916C21.9998 20.5411 21.5564 20.9877 21.0069 20.9916L19.8274 21Z"
      fill={color}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.8325 11.9966C15.2652 11.0428 16.2442 9.11933 16.2442 6.9019C16.2442 6.01765 16.0885 5.18016 15.8105 4.43225C17.1098 5.09292 18 6.44251 18 8.00003C18 10.2092 16.2091 12 14 12C13.9439 12 13.8881 11.9989 13.8325 11.9966Z"
      fill={color}
    />
  </svg>
);

export default PatientsIcon;

export { PatientsIcon };
