import _property from "lodash/property";

import { Composition, Metadata, NoteSection } from "../types";

const compositionId = _property<Composition, string>("id");
const createdAt = _property<Composition, string>("createdAt");
const metadata = _property<Composition, Metadata>("metadata");
const organizationId = _property<Composition, string>("organizationId");
const sections = _property<Composition, NoteSection[]>("sectionsS2");
const noteId = _property<Composition, string>("noteId");

export default { compositionId, createdAt, metadata, noteId, organizationId, sections };
