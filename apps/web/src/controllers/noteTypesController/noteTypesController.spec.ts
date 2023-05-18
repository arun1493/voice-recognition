import { StatusCodes } from "http-status-codes";
import { getMockReq, getMockRes } from "@jest-mock/express";

import NoteTypesController from "./";
import NoteTypesService from "../../services/NoteTypesService";

const noteType = {
  destinations: ["SUKI_ONLY"],
  contentType: undefined,
  emrNoteType: undefined,
  id: "testId",
  keywords: [],
  name: "yey",
  sections: [
    {
      content:
        '{\n  "object": "value",\n  "document": {\n    "object": "document",\n    "data": {"editorVersion": "2.0.0"},\n    "nodes": [\n      {\n        "object": "block",\n        "type": "section",\n        "data": {},\n        "nodes": [\n          {\n            "object": "text",\n            "leaves": [\n              {\n                "object": "leaf",\n                "text": "",\n                "marks": []\n              }\n            ]\n          }\n        ]\n      }\n    ]\n  }\n}',
      id: "079d0abe-458b-4e3b-acfe-c672540b6f96",
      name: "Assessment and Plan",
      navigationKeywords: undefined,
      pbcSectionFlag: undefined
    }
  ],
  source: "USER",
  specialties: undefined,
  userId: undefined
};

describe("NoteTypes controller test", () => {
  let getNoteTypes, deleteNoteTypes, updateNoteType, createNoteType, res, req;

  beforeEach(() => {
    getNoteTypes = jest.spyOn(NoteTypesService, "getNoteTypes");
    updateNoteType = jest.spyOn(NoteTypesService, "updateNoteTypes");
    createNoteType = jest.spyOn(NoteTypesService, "createNoteTypes");
    deleteNoteTypes = jest.spyOn(NoteTypesService, "deleteNoteTypes");
    req = getMockReq();
    res = getMockRes().res;
  });

  it("getNoteTypes function success", async () => {
    getNoteTypes.mockImplementation(() => Promise.resolve({ note_types: [] }));
    await NoteTypesController.getNoteTypes(req, res);
    expect(res.status).toBeCalledWith(StatusCodes.OK);
    expect(res.json).toBeCalledWith({ count: 0, results: [] });
  });

  it("getNoteTypes function failed", async () => {
    getNoteTypes.mockImplementation(() => Promise.reject("Something went wrong"));
    await NoteTypesController.getNoteTypes(req, res);
    expect(res.status).toBeCalledWith(StatusCodes.BAD_REQUEST);
    expect(res.json).toBeCalledWith({ error: "Something went wrong" });
  });

  it("createNoteType function success", async () => {
    req = {
      ...req,
      body: { noteType }
    };
    createNoteType.mockImplementation(() => Promise.resolve({ note_type: noteType }));
    await NoteTypesController.createNoteType(req, res);
    expect(res.status).toBeCalledWith(StatusCodes.OK);
    expect(res.json).toBeCalledWith({ noteType });
  });

  it("createNoteType function failed", async () => {
    req = {
      ...req,
      body: { noteType }
    };
    createNoteType.mockImplementation(() => Promise.reject());
    await NoteTypesController.createNoteType(req, res);
    expect(res.status).toBeCalledWith(StatusCodes.BAD_REQUEST);
  });

  it("deleteNoteTypes function success", async () => {
    req = {
      ...req,
      params: {
        id: "testId"
      }
    };

    deleteNoteTypes.mockImplementation(() => Promise.resolve({ id: ["testId"] }));
    await NoteTypesController.deleteNoteTypes(req, res);
    expect(res.status).toBeCalledWith(StatusCodes.OK);
    expect(res.json).toBeCalledWith({ id: "testId" });
  });

  it("deleteNoteTypes function failed", async () => {
    deleteNoteTypes.mockImplementation(() => Promise.reject());
    await NoteTypesController.deleteNoteTypes(req, res);
    expect(res.status).toBeCalledWith(StatusCodes.BAD_REQUEST);
  });

  it("updateNoteTypes function success", async () => {
    req = {
      ...req,
      params: {
        id: "testId"
      },
      body: { noteType }
    };
    updateNoteType.mockImplementation(() => Promise.resolve({ note_type: noteType }));
    await NoteTypesController.updateNoteType(req, res);
    expect(res.status).toBeCalledWith(StatusCodes.OK);
    expect(res.json).toBeCalledWith({ noteType });
  });

  it("updateNoteTypes function failed", async () => {
    req = {
      ...req,
      params: {
        id: "testId"
      },
      body: { noteType }
    };
    updateNoteType.mockImplementation(() => Promise.reject());
    await NoteTypesController.updateNoteType(req, res);
    expect(res.status).toBeCalledWith(StatusCodes.BAD_REQUEST);
  });
});
