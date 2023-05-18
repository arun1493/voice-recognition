import { SvgProps } from "../Icon";

const ArrowDownIcon = ({ color = "#555555", height = 4, width = 6, ...props }: SvgProps) => (
  <svg height={height} viewBox="0 0 6 4" fill="none" width={width} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M3.54463 3.75605L5.81511 1.20672C6.23185 0.738804 5.8984 2.44564e-07 5.27048 0L0.729518 1.83423e-07C0.1016 9.17116e-08 -0.231846 0.738803 0.184887 1.20672L2.45537 3.75605C2.74506 4.08132 3.25494 4.08132 3.54463 3.75605Z"
      fill={color}
    />
  </svg>
);

export default ArrowDownIcon;
