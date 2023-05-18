import _isEmpty from "lodash/isEmpty";

import { Script } from "../types";
import { scriptReader } from "../readers";

const isOrganizationScript = (script: Script) => _isEmpty(scriptReader.userId(script));

const isUserScript = (script: Script) => !_isEmpty(scriptReader.userId(script));

export { isOrganizationScript, isUserScript };
