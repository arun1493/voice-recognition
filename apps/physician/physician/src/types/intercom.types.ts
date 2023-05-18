type CustomAttributes = {
  "emr"?: string | null;
  "num_sign_ins"?: number;
  "oobe"?: string;
  "Org id"?: string; // existed Intercom users already have such attribute (this name inherit legacy)
};

type OobeTasksStatus = Record<string, string>;

interface OobeData {
  isOobeCompleted: boolean;
  notesToBeCompleted: number;
  tasksStatus: OobeTasksStatus;
  tasksCompleted: number;
  tasksToBeCompleted: number;
}

type GeneralOobeRequest = {
  tasksCompleted: number;
  userId: string;
};

interface InitializeOobeRequest extends GeneralOobeRequest {
  oobeTasksStatus: string;
  oobeTasksStatusNonIntegrated?: string;
}

interface UpdateOobeTasksRequest extends GeneralOobeRequest {
  isOobeCompleted: boolean;
  oobeTasksStatus: string;
  oobeTasksStatusNonIntegrated?: string;
}

type IntercomData = {
  emr?: string | null;
  orgId?: string;
  signInsCount?: number;
};

type OobeTask = {
  id?: string;
  isSmall?: boolean;
  status: string;
  title: JSX.Element;
};

export {
  CustomAttributes,
  InitializeOobeRequest,
  IntercomData,
  OobeData,
  OobeTask,
  OobeTasksStatus,
  UpdateOobeTasksRequest
};
