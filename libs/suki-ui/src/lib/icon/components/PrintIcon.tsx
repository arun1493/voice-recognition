import { ICON_COLORS, SvgProps } from "../Icon";

const PrintIcon = ({ width = 32, height = 32, color = ICON_COLORS.green, opacity = "1", ...props }: SvgProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 6H16V7H8V6ZM6 7V6C6 4.89543 6.89543 4 8 4H16C17.1046 4 18 4.89543 18 6V7H20C21.1046 7 22 7.89543 22 9V15C22 16.1046 21.1046 17 20 17H18V20H6V17H4C2.89543 17 2 16.1046 2 15V9C2 7.89543 2.89543 7 4 7H6ZM16 9H8H4V15H6V11H18V15H20V9H16ZM16 13V15V17V18H8V17V15V13H16ZM9 14H15V15H9V14ZM15 16H9V17H15V16Z"
        fill={color}
        opacity={opacity}
      />
    </svg>
  );
};

export default PrintIcon;
