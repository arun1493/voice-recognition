import { StatusCodes } from "http-status-codes";
import { getMockReq, getMockRes } from "@jest-mock/express";

import MacrosController from "./";
import MacrosService from "../../services/MacrosService";

describe("Macros controller test", () => {
  let getMacros, deleteMacros, updateMacro, createMacro, res, req;

  beforeEach(() => {
    getMacros = jest.spyOn(MacrosService, "getMacros");
    updateMacro = jest.spyOn(MacrosService, "updateMacro");
    createMacro = jest.spyOn(MacrosService, "createMacro");
    deleteMacros = jest.spyOn(MacrosService, "deleteMacros");
    req = getMockReq({ params: { scriptId: "123" } });
    res = getMockRes().res;
  });

  it("getMacros function success", async () => {
    getMacros.mockImplementation(() =>
      Promise.resolve({
        macros: [
          {
            blocks: [],
            content_type: "type",
            id: "id",
            source: "source",
            specialties: "specialties",
            tags: [],
            user_id: "userId"
          }
        ]
      })
    );
    await MacrosController.getMacros(req, res);
    expect(res.status).toBeCalledWith(StatusCodes.OK);
    expect(res.json).toBeCalledWith({
      count: 1,
      results: [
        {
          blocks: [],
          contentType: "type",
          id: "id",
          source: "source",
          specialties: "specialties",
          tags: [],
          userId: "userId"
        }
      ]
    });
  });

  it("getMacros function failed", async () => {
    getMacros.mockImplementation(() => Promise.reject("Something went wrong"));
    await MacrosController.getMacros(req, res);
    expect(res.status).toBeCalledWith(StatusCodes.BAD_REQUEST);
    expect(res.json).toBeCalledWith({ error: "Something went wrong" });
  });

  it("createMacro function success", async () => {
    createMacro.mockImplementation(() =>
      Promise.resolve({
        macro: {
          id: "testId",
          user_id: "fefda702-466f-4cbf-9876-0d7536009323",
          content_type: "DYNAMIC"
        }
      })
    );
    await MacrosController.createMacro(req, res);
    expect(res.status).toBeCalledWith(StatusCodes.OK);
    expect(res.json).toBeCalledWith({
      macro: {
        id: "testId",
        userId: "fefda702-466f-4cbf-9876-0d7536009323",
        contentType: "DYNAMIC"
      }
    });
  });

  it("createMacro function failed", async () => {
    createMacro.mockImplementation(() => Promise.reject());
    await MacrosController.createMacro(req, res);
    expect(res.status).toBeCalledWith(StatusCodes.BAD_REQUEST);
  });

  it("deleteMacros function success", async () => {
    req = {
      ...req,
      params: {
        scriptId: "testId"
      }
    };

    deleteMacros.mockImplementation(() => Promise.resolve({ id: ["testId"] }));
    await MacrosController.deleteMacros(req, res);
    expect(res.status).toBeCalledWith(StatusCodes.OK);
    expect(res.json).toBeCalledWith({ id: "testId" });
  });

  it("deleteMacros function failed", async () => {
    deleteMacros.mockImplementation(() => Promise.reject());
    await MacrosController.deleteMacros(req, res);
    expect(res.status).toBeCalledWith(StatusCodes.BAD_REQUEST);
  });

  it("updateMacro function success", async () => {
    req = {
      ...req,
      body: {
        macro: {
          source: "USER"
        },
        preserveAliases: true
      }
    };
    updateMacro.mockImplementation(() =>
      Promise.resolve({
        macro: {
          id: "01f997bf-db0b-46ee-af0a-c6e57d6e56c8",
          user_id: "fefda702-466f-4cbf-9876-0d7536009323",
          content_type: "DYNAMIC"
        }
      })
    );
    await MacrosController.updateMacro(req, res);
    expect(res.status).toBeCalledWith(StatusCodes.OK);
    expect(res.json).toBeCalledWith({
      macro: {
        id: "01f997bf-db0b-46ee-af0a-c6e57d6e56c8",
        userId: "fefda702-466f-4cbf-9876-0d7536009323",
        contentType: "DYNAMIC"
      }
    });
  });

  it("updateMacro function failed", async () => {
    req = {
      ...req,
      body: {
        macro: {
          source: "USER"
        },
        preserveAliases: true
      }
    };
    updateMacro.mockImplementation(() => Promise.reject());
    await MacrosController.updateMacro(req, res);
    expect(res.status).toBeCalledWith(StatusCodes.BAD_REQUEST);
  });
});
