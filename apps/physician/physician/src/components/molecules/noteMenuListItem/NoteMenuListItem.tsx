import _noop from "lodash/noop";
import { FunctionComponent } from "react";
import { Icon, ICON_COLORS, IconType, Text } from "@suki-web/suki-ui";

import { StyledNoteMenuIcon, StyledNoteMenuListItem } from "./noteMenuListItem.styled";

interface NoteMenuListItemProps {
  icon: IconType;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  testId: string;
}

const NoteMenuListItem: FunctionComponent<NoteMenuListItemProps> = ({
  children,
  disabled = false,
  icon,
  onClick,
  testId
}) => {
  return (
    <StyledNoteMenuListItem disabled={disabled} onClick={disabled ? _noop : onClick}>
      <StyledNoteMenuIcon>
        <Icon color={disabled ? ICON_COLORS.lightGray : ICON_COLORS.green} icon={icon} size="xs" />
      </StyledNoteMenuIcon>
      <Text
        color={disabled ? "gray" : "green"}
        cursor={disabled ? "not-allowed" : "pointer"}
        data-cy={testId}
        isBold={true}
        size="sm"
      >
        {children}
      </Text>
    </StyledNoteMenuListItem>
  );
};

export { NoteMenuListItem, NoteMenuListItemProps };

export default NoteMenuListItem;
