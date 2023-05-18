import styled from "styled-components";
import { FunctionComponent } from "react";

import {
  IconArrowLeft,
  IconCaretLeft,
  IconCaretRight,
  IconChat,
  IconCheck,
  IconClock,
  IconClose,
  IconDot,
  IconFont,
  IconHamburger,
  IconHelp,
  IconKebab,
  IconLightbulb,
  IconLoader,
  IconLogout,
  IconMinus,
  IconNoteAdd,
  IconNoteUnfinished,
  IconPeople,
  IconPeopleFilled,
  IconPlay,
  IconPlus,
  IconPrint,
  IconPriorityHigh,
  IconQuestionMark,
  IconRefresh,
  IconReview,
  IconSearch,
  IconSettings,
  IconSignature,
  IconSync,
  IconTrash,
  IconUndo,
  IconUpload
} from "./icons";

const iconMap = {
  arrowLeft: IconArrowLeft,
  caretLeft: IconCaretLeft,
  caretRight: IconCaretRight,
  chat: IconChat,
  check: IconCheck,
  clock: IconClock,
  close: IconClose,
  dot: IconDot,
  font: IconFont,
  hamburger: IconHamburger,
  help: IconHelp,
  kebab: IconKebab,
  lightbulb: IconLightbulb,
  loader: IconLoader,
  logout: IconLogout,
  upload: IconUpload,
  minus: IconMinus,
  noteAdd: IconNoteAdd,
  noteUnfinished: IconNoteUnfinished,
  people: IconPeople,
  peopleFilled: IconPeopleFilled,
  play: IconPlay,
  plus: IconPlus,
  print: IconPrint,
  priorityHigh: IconPriorityHigh,
  questionMark: IconQuestionMark,
  refresh: IconRefresh,
  review: IconReview,
  search: IconSearch,
  settings: IconSettings,
  signature: IconSignature,
  sync: IconSync,
  trash: IconTrash,
  undo: IconUndo
};

type IconColorType = "error" | "inherit" | "primary" | "secondary" | "warning";
type IconSizeType = "sm" | "md" | "lg" | "xl";
type SukiIconType = keyof typeof iconMap;

interface IconProps {
  className?: string;
  color?: IconColorType;
  icon: SukiIconType;
  size?: IconSizeType;
}

const StyledIcon = styled.i<{ color: IconColorType; size: IconSizeType }>`
  color: ${({ color, theme }) => theme.components.sukiIcon.color[color]};
  display: inline-flex;
  height: ${({ size, theme }) => theme.components.sukiIcon.size[size]};
  width: ${({ size, theme }) => theme.components.sukiIcon.size[size]};
`;

const SukiIcon: FunctionComponent<IconProps> = ({ className = "", color = "inherit", icon, size = "md" }) => {
  const Icon = iconMap[icon];

  return (
    <StyledIcon className={`sukiIcon ${className}`} color={color} size={size}>
      <Icon />
    </StyledIcon>
  );
};

export { iconMap, IconProps, SukiIconType, SukiIcon };

export default SukiIcon;
