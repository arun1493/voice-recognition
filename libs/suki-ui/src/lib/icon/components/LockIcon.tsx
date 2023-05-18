import { SvgProps } from "../Icon";

const LockIcon = ({ width = 24, height = 24, ...props }: SvgProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 16 16" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 0C5.79086 0 4 1.79086 4 4V5C2.89543 5 2 5.89543 2 7V13C2 14.1046 2.89543 15 4 15H12C13.1046 15 14 14.1046 14 13V7C14 5.89543 13.1046 5 12 5V4C12 1.79086 10.2091 0 8 0ZM10 5V4C10 2.89543 9.10457 2 8 2C6.89543 2 6 2.89543 6 4V5H10ZM4 7L4 13H12V7H4ZM9 10C9 10.5523 8.55228 11 8 11C7.44772 11 7 10.5523 7 10C7 9.44771 7.44772 9 8 9C8.55228 9 9 9.44771 9 10Z"
      fill="currentColor"
    />
  </svg>
);

export default LockIcon;
