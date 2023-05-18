import { StatusCodes } from "http-status-codes";

import { request } from "../../helpers/tests";
import OrganizationsService from "../../services/OrganizationsService";
import { _learningmotors_pb_organization_Organization_EnhancedReviewOption } from "../../grpc/generated/learningmotors/pb/organization/Organization";

describe("Organizations Routes", function () {
  let getOrganizations;

  beforeEach(() => {
    getOrganizations = jest.spyOn(OrganizationsService, "getOrganizations");
  });

  it("get /organizations/:id success", async () => {
    getOrganizations.mockImplementation(() => Promise.resolve({ organizations: [
      {
          "id": "11111111-1111-1111-1111-111111111111",
          "name": "Suki",
          "enhancedReview": _learningmotors_pb_organization_Organization_EnhancedReviewOption.DEFAULT_OFF,
          "gcpAccountId": ""
      }
  ] }));
    const res = await request.get("/organizations/:id");
    expect(res.statusCode).toBe(StatusCodes.OK);
  });

  it("get /organizations/:id failure", async () => {
    getOrganizations.mockImplementation(() => Promise.reject());
    const res = await request.get("/organizations/:id");
    expect(res.statusCode).toBe(StatusCodes.BAD_REQUEST);
  });
});
