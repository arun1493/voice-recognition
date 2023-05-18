import { StatusCodes } from "http-status-codes";
import { getMockReq, getMockRes } from "@jest-mock/express";

import PatientNotesController from ".";
import SMSService from "../../services/SMSService";

const payload = {
  count: 1,
  results: [
    {
      id: "f3ba7a61-0b97-47b1-b7eb-64a5f33daf03",
      userId: "fefda702-466f-4cbf-9876-0d7536009323",
      readOnly: false
    }
  ]
};

describe("PatientNotes controller test", () => {
  let getAllNotes, res, req;

  beforeEach(() => {
    getAllNotes = jest.spyOn(SMSService, "getAllNotes");
    req = getMockReq();
    res = getMockRes().res;
  });

  it("getAllPatientNotes function success", async () => {
    getAllNotes.mockImplementation(() => Promise.resolve(payload));
    await PatientNotesController.getAllPatientNotes(req, res);
    expect(res.status).toBeCalledWith(StatusCodes.OK);
    expect(res.json).toBeCalledWith(payload);
  });

  it("getAllPatientNotes function failed", async () => {
    getAllNotes.mockImplementation(() => Promise.reject("Something went wrong"));
    await PatientNotesController.getAllPatientNotes(req, res);
    expect(res.status).toBeCalledWith(StatusCodes.BAD_REQUEST);
    expect(res.json).toBeCalledWith({ error: "Something went wrong" });
  });
});
