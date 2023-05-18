import { ICON_COLORS, SvgProps } from "../Icon";

const SelectedNewNoteIcon = ({
  width = 24,
  height = 24,
  color = ICON_COLORS.green,
  opacity = "1",
  ...props
}: SvgProps) => (
  <svg width={width} height={height} fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      clipRule="evenodd"
      d="M15.1716 1H5C3.89543 1 3 1.89543 3 3V21C3 22.1046 3.89543 23 5 23H19C20.1046 23 21 22.1046 21 21V6.82843C21 6.29799 20.7893 5.78929 20.4142 5.41421L16.5858 1.58579C16.2107 1.21071 15.702 1 15.1716 1ZM13 11C13 10.4477 12.5523 10 12 10C11.4477 10 11 10.4477 11 11V13H9C8.44772 13 8 13.4477 8 14C8 14.5523 8.44772 15 9 15H11V17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17V15H15C15.5523 15 16 14.5523 16 14C16 13.4477 15.5523 13 15 13H13V11ZM18.7929 7H16C15.4477 7 15 6.55228 15 6V3.20711C15 2.76165 15.5386 2.53857 15.8536 2.85355L19.1464 6.14645C19.4614 6.46143 19.2383 7 18.7929 7Z"
      fill={color}
      fillRule="evenodd"
      opacity={opacity}
    />
  </svg>
);

export default SelectedNewNoteIcon;

export { SelectedNewNoteIcon };
