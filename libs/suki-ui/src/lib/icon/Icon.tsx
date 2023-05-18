import DotIcon from "./components/DotIcon";
import EMRIcon from "./components/EMRIcon";
import EMRSync from "./components/EMRSync";
import { StyledButton } from "./icon.styled";
import LockIcon from "./components/LockIcon";
import BackIcon from "./components/BackIcon";
import InfoIcon from "./components/InfoIcon";
import HelpIcon from "./components/HelpIcon";
import UndoIcon from "./components/UndoIcon";
import PlusIcon from "./components/PlusIcon";
import SyncIcon from "./components/SyncIcon";
import EmailIcon from "./components/EmailIcon";
import ClockIcon from "./components/ClockIcon";
import CloseIcon from "./components/CloseIcon";
import CheckIcon from "./components/CheckIcon";
import PrintIcon from "./components/PrintIcon";
import TrashIcon from "./components/TrashIcon";
import { lightTheme as theme } from "../theme";
import ChartIcon from "./components/ChartIcon";
import UploadIcon from "./components/UploadIcon";
import SearchIcon from "./components/SearchIcon";
import LoaderIcon from "./components/LoaderIcon";
import LogoutIcon from "./components/LogoutIcon";
import AmbientIcon from "./components/AmbientIcon";
import NewNoteIcon from "./components/NewNoteIcon";
import RefreshIcon from "./components/RefreshIcon";
import WebLogoIcon from "./components/WebLogoIcon";
import DownloadIcon from "./components/DownloadIcon";
import SukiLogoIcon from "./components/SukiLogoIcon";
import HelpChatIcon from "./components/HelpChatIcon";
import HelpFindIcon from "./components/HelpFindIcon";
import HelpPlayIcon from "./components/HelpPlayIcon";
import PasswordIcon from "./components/PasswordIcon";
import PatientsIcon from "./components/PatientsIcon";
import FontSizeIcon from "./components/FontSizeIcon";
import SettingsIcon from "./components/SettingsIcon";
import ArrowDownIcon from "./components/ArrowDownIcon";
import DropDownArrow from "./components/DropDownArrow";
import ListArrowIcon from "./components/ListArrowIcon";
import KebabMenuIcon from "./components/KebabMenuIcon";
import AppleLogoIcon from "./components/AppleLogoIcon";
import NewWindowIcon from "./components/NewWindowIcon";
import CheckWithCircle from "./components/CheckWithCircle";
import ExclamationIcon from "./components/ExclamationIcon";
import UploadLightIcon from "./components/UploadLightIcon";
import WindowsLogoIcon from "./components/WindowsLogoIcon";
import CheckmarkOnIcon from "./components/CheckmarkOnIcon";
import MoreOutlineIcon from "./components/MoreOutlineIcon";
import CheckmarkOffIcon from "./components/CheckmarkOffIcon";
import ListSignNoteIcon from "./components/ListSignNoteIcon";
import SelectedCloseIcon from "./components/SelectedCloseIcon";
import RightTriangleIcon from "./components/RightTriangleIcon";
import SukiLogoLightIcon from "./components/SukiLogoLightIcon";
import HamburgerMenuIcon from "./components/HamburgerMenuIcon";
import ExclamationEMRIcon from "./components/ExclamationEMRIcon";
import SelectedSearchIcon from "./components/SelectedSearchIcon";
import UnfinishedNoteIcon from "./components/UnfinishedNoteIcon";
import SelectedNewNoteIcon from "./components/SelectedNewNoteIcon";
import SelectedPatientsIcon from "./components/SelectedPatientsIcon";
import ListUnfinishedNote from "./components/ListUnfinishedNoteIcon";
import ListSignNoteRightIcon from "./components/ListSignNoteRightIcon";
import GooglePlayStoreLogoIcon from "./components/GooglePlayStoreLogoIcon";
import SelectedHamburgerMenuIcon from "./components/SelectedHamburgerMenuIcon";

const sizes: Record<string, number> = {
  "3xs": 16,
  "2xs": 18,
  "xs": 24,
  "sm": 32,
  "md": 42,
  "lg": 56,
  "xl": 80,
  "2xl": 114
};

type IconSize = "3xs" | "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

interface SvgProps {
  additionalColor?: string;
  color?: string;
  height?: string | number;
  isDisabled?: boolean;
  opacity?: string;
  onClick?: VoidFunction;
  size?: IconSize;
  width?: string | number;
}

interface IconPropsType extends SvgProps {
  icon: IconType;
}

const iconMap = {
  ambient: AmbientIcon,
  arrowDown: ArrowDownIcon,
  appleLogo: AppleLogoIcon,
  back: BackIcon,
  chart: ChartIcon,
  check: CheckIcon,
  checkmarkOff: CheckmarkOffIcon,
  checkmarkOn: CheckmarkOnIcon,
  checkWithCircle: CheckWithCircle,
  clock: ClockIcon,
  close: CloseIcon,
  closeCard: ListArrowIcon,
  dot: DotIcon,
  download: DownloadIcon,
  DropDownArrow: DropDownArrow,
  email: EmailIcon,
  emr: EMRIcon,
  emrSync: EMRSync,
  exclamation: ExclamationIcon,
  exclamationEMR: ExclamationEMRIcon,
  fontSize: FontSizeIcon,
  googlePlayStore: GooglePlayStoreLogoIcon,
  hamburgerMenu: HamburgerMenuIcon,
  help: HelpIcon,
  helpChat: HelpChatIcon,
  helpFind: HelpFindIcon,
  helpPlay: HelpPlayIcon,
  info: InfoIcon,
  kebabMenu: KebabMenuIcon,
  listArrow: ListArrowIcon,
  listArrowReverse: ListArrowIcon,
  listSignNote: ListSignNoteIcon,
  listSignNoteRight: ListSignNoteRightIcon,
  listUnfinishedNote: ListUnfinishedNote,
  loader: LoaderIcon,
  lock: LockIcon,
  logout: LogoutIcon,
  more: ListArrowIcon,
  moreOutline: MoreOutlineIcon,
  newNote: NewNoteIcon,
  newWindow: NewWindowIcon,
  openCard: ListArrowIcon,
  password: PasswordIcon,
  patients: PatientsIcon,
  plus: PlusIcon,
  print: PrintIcon,
  refresh: RefreshIcon,
  rightTriangle: RightTriangleIcon,
  search: SearchIcon,
  selectedClose: SelectedCloseIcon,
  selectedHamburgerMenu: SelectedHamburgerMenuIcon,
  selectedNewNote: SelectedNewNoteIcon,
  selectedPatients: SelectedPatientsIcon,
  selectedSearch: SelectedSearchIcon,
  settings: SettingsIcon,
  sukiLogo: SukiLogoIcon,
  sukiLogoLight: SukiLogoLightIcon,
  sync: SyncIcon,
  trash: TrashIcon,
  undo: UndoIcon,
  unfinishedNote: UnfinishedNoteIcon,
  upload: UploadIcon,
  uploadLight: UploadLightIcon,
  webLogo: WebLogoIcon,
  windowsLogo: WindowsLogoIcon
};

type IconType = keyof typeof iconMap;

const ICON_COLORS = {
  black: theme.components.icon.color.black,
  blueGray: theme.components.icon.color.blueGray,
  darkGray: theme.components.icon.color.darkGray,
  green: theme.components.icon.color.green,
  lightGray: theme.components.icon.color.lightGray,
  lighterGray: theme.components.icon.color.lighterGray,
  offWhite: theme.components.icon.color.offWhite,
  orange: theme.components.icon.color.orange,
  white: theme.components.icon.color.white
};

const Icon = ({ height, icon, isDisabled, onClick, opacity, size, width, ...props }: IconPropsType) => {
  const Component = iconMap[icon];
  let iconHeight = height;
  let iconWidth = width;

  if (!width && !height) {
    const iconSize = size ? sizes[size] : sizes["sm"];
    iconHeight = iconSize;
    iconWidth = iconSize;
  }

  const component = <Component height={iconHeight} opacity={opacity} width={iconWidth} {...props} />;

  if (onClick && !isDisabled) {
    return <StyledButton onClick={onClick}>{component}</StyledButton>;
  }

  return component;
};

export default Icon;

export { Icon, ICON_COLORS, IconSize, IconType, SvgProps };
