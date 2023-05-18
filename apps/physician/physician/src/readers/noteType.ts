import _property from "lodash/property";

import { NoteType } from "../types";

const id = _property<NoteType, string>("id");
const name = _property<NoteType, string>("name");
const userId = _property<NoteType, string>("userId");

export default {
  id,
  name,
  userId
};
