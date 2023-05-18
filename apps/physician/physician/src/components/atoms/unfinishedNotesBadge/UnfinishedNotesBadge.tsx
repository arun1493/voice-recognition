import { Text } from "@suki-web/suki-ui";
import { FunctionComponent } from "react";

import { StyledUnfinishedNotesBadge } from "./unfinishedNotesBadge.styled";

interface UnfinishedNotesBadgeProps {
  unfinishedNotesCount: number;
  hasOuterBadge?: boolean;
}

const UnfinishedNotesBadge: FunctionComponent<UnfinishedNotesBadgeProps> = ({
  unfinishedNotesCount,
  hasOuterBadge = false
}) => {
  if (!unfinishedNotesCount) {
    return null;
  } else {
    return (
      <StyledUnfinishedNotesBadge hasOuterBadge={hasOuterBadge}>
        <Text color="white" size="xs">
          {unfinishedNotesCount}
        </Text>
      </StyledUnfinishedNotesBadge>
    );
  }
};

export { UnfinishedNotesBadge, UnfinishedNotesBadgeProps };

export default UnfinishedNotesBadge;
