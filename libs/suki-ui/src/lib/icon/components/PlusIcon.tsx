import { ICON_COLORS, SvgProps } from "../Icon";

const PlusIcon = ({ width = 16, height = 16, color = ICON_COLORS.green, opacity = "1", ...props }: SvgProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h16v16H0z" />
        <path d="M0 0h16v16H0z" />
        <path
          d="M9.331 13.333V8.666H14V7.333H9.331V2.667H8v4.666H3.333v1.333H8v4.667z"
          fill={color}
          fillRule="nonzero"
          opacity={opacity}
        />
      </g>
    </svg>
  );
};

export default PlusIcon;
