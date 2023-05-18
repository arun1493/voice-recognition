import { ICON_COLORS, SvgProps } from "../Icon";

const ExclamationIcon = ({
  width = 24,
  height = 24,
  color = ICON_COLORS.orange,
  opacity = "1",
  ...props
}: SvgProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 25" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.5278 3.99854C10.6891 3.99854 10.0134 4.68614 10.028 5.52467L10.1848 14.5247C10.1991 15.3428 10.8664 15.9985 11.6846 15.9985H12.3208C13.1392 15.9985 13.8065 15.3426 13.8206 14.5243L13.9752 5.5243C13.9896 4.68591 13.3139 3.99854 12.4754 3.99854H11.5278ZM11.1172 17.9985C10.501 17.9985 10.0014 18.5358 10.0014 19.1985V20.7985C10.0014 21.4613 10.501 21.9985 11.1172 21.9985H12.8856C13.5018 21.9985 14.0014 21.4613 14.0014 20.7985V19.1985C14.0014 18.5358 13.5018 17.9985 12.8856 17.9985H11.1172Z"
      fill={color}
    />
  </svg>
);

export default ExclamationIcon;
