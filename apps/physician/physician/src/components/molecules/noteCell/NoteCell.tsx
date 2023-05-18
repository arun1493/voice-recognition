import store from "store2";
import { Text } from "@suki-web/suki-ui";
import { FunctionComponent } from "react";

import { UserDetails } from "../../../types";
import { LOCAL_STORE } from "../../../constants";
import { getDoctorFullName } from "../../../helpers";
import { NoteCellContainer } from "./noteCell.styled";

interface NoteCellProps {
  name: string;
  user: UserDetails;
}

const NoteCell: FunctionComponent<NoteCellProps> = ({ name = "", user }) => {
  const currentUserId = store.get(LOCAL_STORE.USER_ID);
  const doctorName = user?.id !== currentUserId ? getDoctorFullName(user) : null;

  return (
    <NoteCellContainer>
      <Text cursor="pointer" data-cy="patient-name" isBold={true} size="md">
        {name}
      </Text>
      {doctorName && (
        <Text cursor="pointer" size="sm">
          {doctorName}
        </Text>
      )}
    </NoteCellContainer>
  );
};

export { NoteCell, NoteCellProps };

export default NoteCell;
