import { ICON_COLORS, SvgProps } from "../Icon";

const ListUnfinishedIcon = ({
  width = 24,
  height = 24,
  color = ICON_COLORS.orange,
  opacity = "1",
  ...props
}: SvgProps) => (
  <svg width={width} height={height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M11.5278 3C10.6891 3 10.0134 3.68761 10.028 4.52613L10.1849 13.5261C10.1991 14.3442 10.8664 15 11.6846 15H12.3209C13.1392 15 13.8066 14.344 13.8206 13.5258L13.9752 4.52576C13.9896 3.68738 13.314 3 12.4754 3H11.5278ZM11.1173 17C10.501 17 10.0014 17.5373 10.0014 18.2V19.8C10.0014 20.4627 10.501 21 11.1173 21H12.8856C13.5019 21 14.0014 20.4627 14.0014 19.8V18.2C14.0014 17.5373 13.5019 17 12.8856 17H11.1173Z"
      fill={color}
      fillRule="nonzero"
      opacity={opacity}
    />
  </svg>
);

export default ListUnfinishedIcon;
