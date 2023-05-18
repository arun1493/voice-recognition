import { ICON_COLORS, SvgProps } from "../Icon";

const Logout = ({ width = 24, height = 24, color = ICON_COLORS.green, opacity = "1", ...props }: SvgProps) => {
  return (
    <svg width={width} height={height} fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M4 5H13V7H15V5C15 3.89543 14.1046 3 13 3H4C2.89543 3 2 3.89543 2 5V19C2 20.1046 2.89543 21 4 21H13C14.1046 21 15 20.1046 15 19V17H13V19H4L4 5Z"
        fill={color}
        opacity={opacity}
      />
      <path
        d="M17.3888 8.15135L21.6018 11.3613C22.1327 11.7149 22.1327 12.495 21.6018 12.8487L17.3888 15.8487C16.795 16.2442 16 15.8184 16 15.105V13H11V11H16V8.89503C16 8.18155 16.795 7.75585 17.3888 8.15135Z"
        fill={color}
        opacity={opacity}
      />
    </svg>
  );
};

export default Logout;

export { Logout };
