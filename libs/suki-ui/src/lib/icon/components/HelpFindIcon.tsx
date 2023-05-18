import { ICON_COLORS, SvgProps } from "../Icon";

const HelpFindIcon = ({
  width = 56,
  height = 56,
  additionalColor = ICON_COLORS.white,
  color = ICON_COLORS.green,
  opacity = "1",
  ...props
}: SvgProps) => (
  <svg width={width} height={height} viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fillRule="nonzero" fill="none">
      <path
        d="M28 0A27.92 27.92 0 0 0 0 28a27.92 27.92 0 0 0 28 28 27.92 27.92 0 0 0 28-28A27.92 27.92 0 0 0 28 0z"
        fill={color}
        opacity={opacity}
      />
      <path
        d="M24.632 40.21c0 1.794 1.389 3.076 3.226 3.076 1.944 0 3.31-1.282 3.31-3.076 0-1.859-1.366-3.162-3.31-3.162-1.837 0-3.226 1.303-3.226 3.162zm-5.276-18.607h4.08c0-2.649 1.602-4.72 4.806-4.72 2.393 0 4.636 1.174 4.636 3.994 0 2.136-1.26 3.119-3.247 4.614-2.2 1.666-4.08 3.568-3.995 6.687l.021 1.58h4.08v-1.217c0-2.414.898-3.12 3.376-5.02 2.03-1.538 4.166-3.29 4.166-6.9 0-5.085-4.252-7.52-8.823-7.52-4.294 0-9.165 2.158-9.1 8.502z"
        fill={additionalColor}
        opacity={opacity}
      />
    </g>
  </svg>
);

export default HelpFindIcon;
