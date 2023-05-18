import { ICON_COLORS, SvgProps } from "../Icon";

const NewNoteIcon = ({ width = 24, height = 24, color = ICON_COLORS.black, opacity = "1", ...props }: SvgProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="none" viewBox="0 0 24 24" {...props}>
    <path
      clipRule="evenodd"
      d="M13 11C13 10.4477 12.5523 10 12 10C11.4477 10 11 10.4477 11 11V13H9C8.44772 13 8 13.4477 8 14C8 14.5523 8.44772 15 9 15H11V17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17V15H15C15.5523 15 16 14.5523 16 14C16 13.4477 15.5523 13 15 13H13V11Z"
      fill={color}
      fillRule="evenodd"
      opacity={opacity}
    />
    <path
      clipRule="evenodd"
      d="M5 1H15.1716C15.702 1 16.2107 1.21071 16.5858 1.58579L20.4142 5.41421C20.7893 5.78929 21 6.29799 21 6.82843V21C21 22.1046 20.1046 23 19 23H5C3.89543 23 3 22.1046 3 21V3C3 1.89543 3.89543 1 5 1ZM14 3H6C5.44772 3 5 3.44772 5 4V20C5 20.5523 5.44772 21 6 21H18C18.5523 21 19 20.5523 19 20V8C19 7.44772 18.5523 7 18 7H16C15.4477 7 15 6.55228 15 6V4C15 3.44772 14.5523 3 14 3Z"
      fill={color}
      fillRule="evenodd"
      opacity={opacity}
    />
  </svg>
);

export default NewNoteIcon;

export { NewNoteIcon };
