import _property from "lodash/property";

import { Metadata, Note, NoteOrComposition, NoteSection } from "../types";

const compositionCreatedAt = _property<Note, string>("compositionCreatedAt");
const compositionId = _property<Note, string>("compositionId");
const metadata = _property<Note, Metadata>("metadata");
const noteId = _property<Note, string>("noteId");
const sections = _property<Note, NoteSection[]>("sections");
const composition = _property<Note, NoteOrComposition>("composition");

export default { composition, compositionCreatedAt, compositionId, metadata, noteId, sections };
