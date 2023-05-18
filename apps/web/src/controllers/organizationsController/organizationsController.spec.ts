import { StatusCodes } from "http-status-codes";
import { getMockReq, getMockRes } from "@jest-mock/express";

import OrganizationsController from ".";
import { convertOrganizationFromProto } from "../../helpers";
import OrganizationsService from "../../services/OrganizationsService";
import { _learningmotors_pb_organization_Organization_EnhancedReviewOption } from "../../grpc/generated/learningmotors/pb/organization/Organization";

describe("Organization controller test", () => {
  let getOrganizations, res, req;

  const organizationsMock = [
    {
      enhanced_review: _learningmotors_pb_organization_Organization_EnhancedReviewOption.DEFAULT_OFF,
      gcp_account_id: "",
      id: "11111111-1111-1111-1111-111111111111",
      name: "Suki"
    }
  ];

  beforeEach(() => {
    getOrganizations = jest.spyOn(OrganizationsService, "getOrganizations");
    req = getMockReq();
    res = getMockRes().res;
  });

  it("getOrganizations function success", async () => {
    getOrganizations.mockImplementation(() => ({ organizations: organizationsMock }));
    await OrganizationsController.getOrganizationsById(req, res);
    expect(res.status).toBeCalledWith(StatusCodes.OK);
    expect(res.json).toBeCalledWith({
      organizations: organizationsMock.map(convertOrganizationFromProto),
      count: 1
    });
  });

  it("getOrganizations function failed", async () => {
    getOrganizations.mockImplementation(() => Promise.reject("Something went wrong"));
    await OrganizationsController.getOrganizationsById(req, res);
    expect(res.status).toBeCalledWith(StatusCodes.BAD_REQUEST);
    expect(res.json).toBeCalledWith({ error: "Something went wrong" });
  });
});
