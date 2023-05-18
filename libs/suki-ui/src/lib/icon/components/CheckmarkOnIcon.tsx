import { SvgProps } from "../Icon";

const CheckmarkOnIcon = ({ width = 24, height = 24, ...props }: SvgProps) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM19.1339 7.0002C18.6458 6.51204 17.8543 6.51204 17.3661 7.0002L8.64439 15.7221L6.13382 13.2117C5.64566 12.7236 4.85421 12.7236 4.36605 13.2117C3.8779 13.6999 3.87789 14.4913 4.36605 14.9795L7.7605 18.3737C8.24865 18.8619 9.04011 18.8619 9.52826 18.3737L19.1339 8.76796C19.6221 8.27981 19.6221 7.48835 19.1339 7.0002Z"
      fill="#2E5F62"
    />
  </svg>
);

export default CheckmarkOnIcon;
