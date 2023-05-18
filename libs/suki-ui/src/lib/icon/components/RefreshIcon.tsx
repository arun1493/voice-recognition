import { ICON_COLORS, SvgProps } from "../Icon";

const RefreshIcon = ({ width = 24, height = 24, opacity = "1", color = ICON_COLORS.green, ...props }: SvgProps) => (
  <svg width={width} height={height} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      opacity={opacity}
      d="M7 2C7 1.44772 7.44772 1 8 1H16C16.5523 1 17 1.44772 17 2V3H19C20.1046 3 21 3.89543 21 5V21C21 22.1046 20.1046 23 19 23H5C3.89543 23 3 22.1046 3 21V5C3 3.89543 3.89543 3 5 3H7V2ZM7 6V5H6C5.44772 5 5 5.44772 5 6V20C5 20.5523 5.44772 21 6 21H18C18.5523 21 19 20.5523 19 20V6C19 5.44772 18.5523 5 18 5H17V6C17 6.55228 16.5523 7 16 7H8C7.44772 7 7 6.55228 7 6ZM12.6387 18.6018L15.8487 14.3888C16.2442 13.795 15.8184 13 15.105 13H13V10C13 9.44772 12.5523 9 12 9C11.4477 9 11 9.44771 11 10V13H8.89503C8.18155 13 7.75585 13.795 8.15135 14.3888L11.1513 18.6018C11.505 19.1327 12.2851 19.1327 12.6387 18.6018Z"
      fill={color}
    />
  </svg>
);

export default RefreshIcon;

export { RefreshIcon };
