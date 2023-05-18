import { SvgProps } from "../Icon";

const HamburgerMenuIcon = ({ width = 24, height = 24, ...props }: SvgProps) => (
  <svg width={width} height={height} fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="5" y="6" width="14" height="2" rx="1" fill="black" />
    <rect x="5" y="11" width="14" height="2" rx="1" fill="black" />
    <rect x="5" y="16" width="14" height="2" rx="1" fill="black" />
  </svg>
);

export default HamburgerMenuIcon;
