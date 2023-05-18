import { ICON_COLORS, SvgProps } from "../Icon";

const CheckIcon = ({ color = ICON_COLORS.green, height = 24, width = 24 }: SvgProps) => (
  <svg width={width} height={height} viewBox="0 0 15 11" fill="none">
    <path
      d="M12.0392 0.366117C12.5274 -0.122038 13.3188 -0.122039 13.807 0.366116C14.2951 0.854272 14.2951 1.64573 13.807 2.13388L5.64431 10.2966C5.15615 10.7847 4.36469 10.7847 3.87654 10.2966L0.366116 6.78614C-0.122039 6.29799 -0.122038 5.50653 0.366116 5.01837C0.854272 4.53022 1.64573 4.53022 2.13388 5.01837L4.76043 7.6449L12.0392 0.366117Z"
      fill={color}
    />
  </svg>
);

export default CheckIcon;
