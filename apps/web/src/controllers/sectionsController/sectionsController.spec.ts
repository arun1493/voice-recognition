import { StatusCodes } from "http-status-codes";
import { getMockReq, getMockRes } from "@jest-mock/express";

import SectionsController from ".";
import SectionService from "../../services/SectionService";

const payload = [
  {
    hints: null,
    id: "07a36131-8a23-4695-85f0-07cd56bb16e3",
    name: "Allergies",
    created_by: "68591a46-b1b9-4b2c-91b3-731059e00c0a",
    created_at: null,
    updated_at: null,
    deleted_at: null,
    pbc_section_flag: false
  },
  {
    hints: null,
    id: "17feb702-89b7-4f68-b49d-cb1c0a86fc81",
    name: "Assessment",
    created_by: "",
    created_at: null,
    updated_at: null,
    deleted_at: null,
    pbc_section_flag: true
  }
];

const results = [
  {
    id: "07a36131-8a23-4695-85f0-07cd56bb16e3",
    name: "Allergies",
    navigationKeywords: undefined,
    content: undefined,
    pbcSectionFlag: false
  },
  {
    id: "17feb702-89b7-4f68-b49d-cb1c0a86fc81",
    name: "Assessment",
    navigationKeywords: undefined,
    content: undefined,
    pbcSectionFlag: true
  }
];

describe("Sections controller test", () => {
  let getSections, res, req;

  beforeEach(() => {
    getSections = jest.spyOn(SectionService, "getSections");
    req = getMockReq();
    res = getMockRes().res;
  });

  it("getSections function success", async () => {
    getSections.mockImplementation(() => Promise.resolve({ sections: payload }));

    await SectionsController.getSections(req, res);
    expect(res.status).toBeCalledWith(StatusCodes.OK);
    expect(res.json).toBeCalledWith({ count: 2, results });
  });

  it("getSections function failed", async () => {
    getSections.mockImplementation(() => Promise.reject("Something went wrong"));
    await SectionsController.getSections(req, res);
    expect(res.status).toBeCalledWith(StatusCodes.BAD_REQUEST);
    expect(res.json).toBeCalledWith({ error: "Something went wrong" });
  });
});
