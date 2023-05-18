import { NoteStatus, PatientModesType } from "@suki-web/suki-ui";

interface ListPanelProps {
  age?: string;
  createdAt?: string;
  dateOfService?: string;
  fullName?: string;
  gender?: string;
  id?: string;
  isDeleteEnabled?: boolean;
  isDisabled?: boolean;
  onClick?: () => void;
  onDelete?: () => void;
  startsAt?: string;
  status?: NoteStatus;
  testId?: string;
  textContent?: string;
  type?: PatientModesType | string;
}

export { ListPanelProps };
