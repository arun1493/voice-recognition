import { ICON_COLORS, SvgProps } from "../Icon";

const ListArrowIcon = ({
  width = 9,
  height = 16,
  color = ICON_COLORS.lightGray,
  opacity = "1",
  ...props
}: SvgProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 9 16" {...props}>
    <path
      d="M2.26479 1.17727C1.86176 0.774242 1.20831 0.774242 0.80528 1.17727C0.402247 1.58031 0.402248 2.23375 0.80528 2.63678L6.1685 8L0.80528 13.3632C0.402247 13.7663 0.402247 14.4197 0.80528 14.8227C1.20831 15.2258 1.86176 15.2258 2.26479 14.8227L8.35776 8.72975C8.76079 8.32672 8.76079 7.67328 8.35776 7.27025L2.26479 1.17727Z"
      fill={color}
      fillRule="evenodd"
      opacity={opacity}
    />
  </svg>
);

export default ListArrowIcon;
