import { SvgProps } from "../Icon";

const UploadIcon = ({ width = 48, height = 48, ...props }: SvgProps) => (
  <svg width={width} height={height} {...props} viewBox="0 0 28 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4.24221 32.1144H8.78755C9.28657 32.1144 9.70801 31.7412 9.75649 31.2446C9.99651 28.7858 10.0284 26.1935 9.71245 23.2361C8.48799 11.7757 2.52304 3.62726 0.121994 0.613667C-0.113172 0.318506 0.231952 -0.132116 0.570277 0.0368154C6.86263 3.45589 19.6981 14.4118 21.5626 31.212C21.619 31.7198 22.0439 32.1144 22.5549 32.1144H26.9689C27.7894 32.1144 28.2499 33.0591 27.7445 33.7054L17.1567 47.2439C16.3683 48.252 14.8429 48.252 14.0545 47.2439L3.46667 33.7054C2.96121 33.0591 3.42171 32.1144 4.24221 32.1144Z"
      fill="url(#paint0_linear_1570_1155)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_1570_1155"
        x1="3.55502"
        y1="1.75517"
        x2="16.4994"
        y2="31.3737"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#777777" stop-opacity="0" />
        <stop offset="1" stop-color="#777777" />
      </linearGradient>
    </defs>
  </svg>
);

export default UploadIcon;
