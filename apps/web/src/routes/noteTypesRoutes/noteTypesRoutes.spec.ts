import { StatusCodes } from "http-status-codes";

import { request } from "../../helpers/tests";
import NoteTypesService from "../../services/NoteTypesService";

const noteType = {
  id: "testId",
  userId: undefined,
  specialties: undefined,
  name: "yey",
  destinations: ["SUKI_ONLY"],
  contentType: undefined,
  emrNoteType: undefined,
  keywords: [],
  sections: [
    {
      id: "079d0abe-458b-4e3b-acfe-c672540b6f96",
      name: "Assessment and Plan",
      navigationKeywords: undefined,
      content:
        '{\n  "object": "value",\n  "document": {\n    "object": "document",\n    "data": {"editorVersion": "2.0.0"},\n    "nodes": [\n      {\n        "object": "block",\n        "type": "section",\n        "data": {},\n        "nodes": [\n          {\n            "object": "text",\n            "leaves": [\n              {\n                "object": "leaf",\n                "text": "",\n                "marks": []\n              }\n            ]\n          }\n        ]\n      }\n    ]\n  }\n}',
      pbcSectionFlag: undefined
    }
  ],
  source: "USER"
};

describe("NoteType Routes", function () {
  let getNoteTypes, deleteNoteTypes, updateNoteType, createNoteType;

  beforeEach(() => {
    getNoteTypes = jest.spyOn(NoteTypesService, "getNoteTypes");
    updateNoteType = jest.spyOn(NoteTypesService, "updateNoteTypes");
    createNoteType = jest.spyOn(NoteTypesService, "createNoteTypes");
    deleteNoteTypes = jest.spyOn(NoteTypesService, "deleteNoteTypes");
  });

  it("get /note-types success", async () => {
    getNoteTypes.mockImplementation(() => Promise.resolve({ count: 0, results: [] }));
    const res = await request.get("/note-types");
    expect(res.statusCode).toBe(StatusCodes.OK);
  });

  it("get /note-types failure", async () => {
    getNoteTypes.mockImplementation(() => Promise.reject());
    const res = await request.get("/note-types");
    expect(res.statusCode).toBe(StatusCodes.BAD_REQUEST);
  });

  it("put /note-types/:id success", async () => {
    updateNoteType.mockImplementation(() => Promise.resolve({ note_type: noteType }));
    const res = await request.put("/note-types/:testId").json({ noteType });
    expect(res.statusCode).toBe(StatusCodes.OK);
  });

  it("put /note-types/:id failure", async () => {
    updateNoteType.mockImplementation(() => Promise.reject());
    const res = await request.put("/note-types/:testId").json({ noteType });
    expect(res.statusCode).toBe(StatusCodes.BAD_REQUEST);
  });

  it("post /note-types success", async () => {
    createNoteType.mockImplementation(() => Promise.resolve({ note_type: noteType }));
    const res = await request
      .post("/note-types")
      .json({ ...noteType });
    expect(res.statusCode).toBe(StatusCodes.OK);
  });

  it("post /note-types failed", async () => {
    createNoteType.mockImplementation(() => Promise.reject());
    const res = await request
      .post("/note-types")
      .json({ ...noteType });
    expect(res.statusCode).toBe(StatusCodes.BAD_REQUEST);
  });

  it("delete /note-types/:id success", async () => {
    deleteNoteTypes.mockImplementation(() => Promise.resolve({}));
    const res = await request.delete("/note-types/:testId");
    expect(res.status).toBe(StatusCodes.OK);
  });

  it("delete /note-types/:id failure", async () => {
    deleteNoteTypes.mockImplementation(() => Promise.reject({}));
    const res = await request.delete("/note-types/:testId");
    expect(res.status).toBe(StatusCodes.BAD_REQUEST);
  });
});
