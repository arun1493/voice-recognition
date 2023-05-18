import { ICON_COLORS, SvgProps } from "../Icon";

const InfoIcon = ({ width = 24, height = 24, color = ICON_COLORS.green, opacity = "1", ...props }: SvgProps) => (
  <svg width={width} height={height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M13.2 8.4h-2.4V6h2.4v2.4zm0 9.6h-2.4v-7.2h2.4V18zm-1.188 6C18.636 24 24 18.624 24 12S18.636 0 12.012 0C5.376 0 0 5.376 0 12s5.376 12 12.012 12zM12 2.4c5.304 0 9.6 4.296 9.6 9.6 0 5.304-4.296 9.6-9.6 9.6A9.597 9.597 0 0 1 2.4 12c0-5.304 4.296-9.6 9.6-9.6z"
      fill={color}
      fillRule="nonzero"
      opacity={opacity}
    />
  </svg>
);

export default InfoIcon;
