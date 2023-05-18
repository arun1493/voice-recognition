import { ICON_COLORS, SvgProps } from "../Icon";

const RightTriangleIcon = ({
  width = 7,
  height = 12,
  color = ICON_COLORS.lightGray,
  opacity = "1",
  ...props
}: SvgProps) => (
  <svg width={width} height={height} viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      clipRule="evenodd"
      d="M2.26178 1.05227C1.85875 0.649242 1.20531 0.649242 0.802274 1.05227C0.399242 1.45531 0.399243 2.10875 0.802275 2.51178L4.27025 5.97975L0.802274 9.44772C0.399242 9.85075 0.399242 10.5042 0.802274 10.9072C1.20531 11.3103 1.85875 11.3103 2.26178 10.9072L6.45951 6.7095C6.86254 6.30647 6.86254 5.65303 6.45951 5.25L2.26178 1.05227Z"
      fill={color}
      fillRule="evenodd"
      opacity={opacity}
    />
  </svg>
);

export default RightTriangleIcon;
