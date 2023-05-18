import { StatusCodes } from "http-status-codes";

import { request } from "../../helpers/tests";
import MacrosService from "../../services/MacrosService";

const macro = {
  blocks: [{ sectionId: "111111111", content: "test content" }],
  tags: [{ name: { value: "name333" }, type: "MACRO_NAME" }],
  source: "USER"
};

describe("Macros Routes", function () {
  let getMacros, deleteMacros, updateMacro, createMacro;

  beforeEach(() => {
    getMacros = jest.spyOn(MacrosService, "getMacros");
    updateMacro = jest.spyOn(MacrosService, "updateMacro");
    createMacro = jest.spyOn(MacrosService, "createMacro");
    deleteMacros = jest.spyOn(MacrosService, "deleteMacros");
  });

  it("get /scripts success", async () => {
    getMacros.mockImplementation(() => Promise.resolve({ macros: [{}] }));
    const res = await request.get("/scripts/111");
    expect(res.statusCode).toBe(StatusCodes.OK);
  });

  it("get /scripts failure", async () => {
    getMacros.mockImplementation(() => Promise.reject());
    const res = await request.get("/scripts/111");
    expect(res.statusCode).toBe(StatusCodes.BAD_REQUEST);
  });

  it("put /scripts/:scriptId success", async () => {
    updateMacro.mockImplementation(() => Promise.resolve({ macro }));
    const res = await request.put("/scripts/:testId").json({ macro, preserveAliases: true });
    expect(res.statusCode).toBe(StatusCodes.OK);
  });

  it("put /scripts/:scriptId failure", async () => {
    updateMacro.mockImplementation(() => Promise.reject());
    const res = await request.put("/scripts/:testId").json({ macro, preserveAliases: true });
    expect(res.statusCode).toBe(StatusCodes.BAD_REQUEST);
  });

  it("post /scripts success", async () => {
    createMacro.mockImplementation(() => Promise.resolve({ macro }));
    const res = await request
      .post("/scripts")
      .json({ ...macro });
    expect(res.statusCode).toBe(StatusCodes.OK);
  });

  it("post /scripts failed", async () => {
    createMacro.mockImplementation(() => Promise.reject());
    const res = await request
      .post("/scripts")
      .json({ ...macro });
    expect(res.statusCode).toBe(StatusCodes.BAD_REQUEST);
  });

  it("delete /scripts/:scriptId success", async () => {
    deleteMacros.mockImplementation(() => Promise.resolve({}));
    const res = await request.delete("/scripts/:testId");
    expect(res.status).toBe(StatusCodes.OK);
  });

  it("delete /scripts/:scriptId failure", async () => {
    deleteMacros.mockImplementation(() => Promise.reject({}));
    const res = await request.delete("/scripts/:testId");
    expect(res.status).toBe(StatusCodes.BAD_REQUEST);
  });
});
