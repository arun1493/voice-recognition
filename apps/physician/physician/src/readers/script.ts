import _property from "lodash/property";

import { Script } from "../types";

const id = _property<Script, string>("id");
const scriptName = _property<Script, string>("tags.0.name.value");
const userId = _property<Script, string>("userId");

export default {
  id,
  scriptName,
  userId
};
