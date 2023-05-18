import { ICON_COLORS, SvgProps } from "../Icon";

const CheckWithCircle = ({ height = 48, width = 48 }: SvgProps) => (
  <svg width={width} height={height} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="32" fill="#2E5F62" />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M45.2971 20.2322C46.2734 19.2559 47.8564 19.2559 48.8327 20.2322C49.809 21.2085 49.809 22.7915 48.8327 23.7678L28.253 44.3474C27.2767 45.3237 25.6938 45.3237 24.7175 44.3474L16.2322 35.8621C15.2559 34.8858 15.2559 33.3029 16.2322 32.3265C17.2085 31.3502 18.7915 31.3502 19.7678 32.3265L26.4853 39.0441L45.2971 20.2322Z"
      fill="white"
    />
  </svg>
);

export default CheckWithCircle;
