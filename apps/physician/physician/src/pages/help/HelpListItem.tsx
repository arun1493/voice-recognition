import _noop from "lodash/noop";
import _kebabCase from "lodash/kebabCase";
import { FunctionComponent } from "react";
import { Icon, IconType, ScreenSize, Text, useBreakpointIncludes } from "@suki-web/suki-ui";

interface HelpListItemProps {
  icon: IconType;
  label: string;
  onClick?: () => void;
  text: string;
}

const HelpListItem: FunctionComponent<HelpListItemProps> = ({ icon, label, onClick = _noop, text, ...props }) => {
  const isSmallScreen = useBreakpointIncludes(ScreenSize.XXS);
  const imageSize = isSmallScreen ? "md" : "lg";

  return (
    <li data-cy={`help-page-${_kebabCase(label)}`} onClick={onClick} {...props}>
      <Icon icon={icon} size={imageSize} />
      <div>
        <Text cursor="pointer" isBold={true} size="lg">
          {label}
        </Text>
        <Text cursor="pointer">{text}</Text>
      </div>
    </li>
  );
};

export { HelpListItem };

export default HelpListItem;
