import { StatusCodes } from "http-status-codes";
import { getMockReq, getMockRes } from "@jest-mock/express";

import PDFController from ".";
import PDFService from "../../services/PDFService";

describe("PDF controller test", () => {
  let getNotePDF, res, req;

  beforeEach(() => {
    getNotePDF = jest.spyOn(PDFService, "getNotePDF");
    req = getMockReq();
    res = getMockRes().res;
  });

  it("getNotePDFUri function success", async () => {
    getNotePDF.mockImplementation(() => Promise.resolve({ pdf: { uri: "pdf_uri" } }));

    await PDFController.getNotePDFUri(req, res);
    expect(res.status).toBeCalledWith(StatusCodes.OK);
    expect(res.json).toBeCalledWith({ uri: "pdf_uri" });
  });

  it("getNotePDFUri return empty pdf uri", async () => {
    getNotePDF.mockImplementation(() => Promise.resolve({ pdf: { uri: "" } }));
    await PDFController.getNotePDFUri(req, res);
    expect(res.status).toBeCalledWith(StatusCodes.BAD_REQUEST);
    expect(res.json).toBeCalledWith("pdf uri is empty");
  });

  it("getNotePDFUri function failed", async () => {
    getNotePDF.mockImplementation(() => Promise.reject("Something went wrong"));
    await PDFController.getNotePDFUri(req, res);
    expect(res.status).toBeCalledWith(StatusCodes.BAD_REQUEST);
    expect(res.json).toBeCalledWith({ error: "Something went wrong" });
  });
});
