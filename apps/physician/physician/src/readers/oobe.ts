import _property from "lodash/property";

import { OobeData, OobeTasksStatus } from "../types";

const isOobeCompleted = _property<OobeData, boolean>("isOobeCompleted");
const notesToBeCompleted = _property<OobeData, number>("notesToBeCompleted");
const oobeTasksStatus = _property<OobeData, OobeTasksStatus>("tasksStatus");
const tasksCompleted = _property<OobeData, number>("tasksCompleted");
const tasksToBeCompleted = _property<OobeData, number>("tasksToBeCompleted");

export default {
  isOobeCompleted,
  notesToBeCompleted,
  oobeTasksStatus,
  tasksCompleted,
  tasksToBeCompleted
};
