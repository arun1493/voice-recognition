import _property from "lodash/property";

import { ReleaseNotes } from "../types";

const version = _property<ReleaseNotes, string>("version");
const date = _property<ReleaseNotes, string>("date");
const description = _property<ReleaseNotes, string>("description");
const notes = _property<ReleaseNotes, string[]>("notes");
const issues = _property<ReleaseNotes, string[]>("issues");

export default { date, description, notes, issues, version };
