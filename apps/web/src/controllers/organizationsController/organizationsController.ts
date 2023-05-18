import _get from "lodash/get";
import _isEmpty from "lodash/isEmpty";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import { ERROR_STATEMENTS, METADATA } from "../../constants";
import EmrAccountsService from "../../services/EmrAccountsService";
import OrganizationsService from "../../services/OrganizationsService";
import { cloudLogger, convertEMROrganizationFromProto, convertOrganizationFromProto, getContext } from "../../helpers";

class OrganizationsController {
  getOrganizationsById = async (req: Request, res: Response) => {
    const organizationId = _get(req, "params.id");
    const withEmrInfo = _get(req, "query.withEmrInfo", false);
    const ctx = getContext(req);
    let organizations = [];

    try {
      cloudLogger.info(`[organizations]: Fetching ${organizationId} organization details`);

      const rpcInput = {
        ids: [organizationId]
      };

      cloudLogger.info("Getting organizations");
      const response = await OrganizationsService.getOrganizations(rpcInput, ctx);
      organizations = response.organizations.map(convertOrganizationFromProto);

      if (withEmrInfo) {
        const rpcInput = {
          scope: {
            organization_id: organizations[0].id || ctx[METADATA.SUKI_ORGANIZATION_ID]
          }
        };
        const emrResponse = await EmrAccountsService.getOrganization(rpcInput, ctx);
        cloudLogger.info("Received the EMR Response");
        organizations[0].emr = convertEMROrganizationFromProto(emrResponse.organization);
      }
    } catch (error) {
      cloudLogger.error(`[organizations]: Failed to fetch ${organizationId} organization details`, req, { error });
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        details: error,
        message: ERROR_STATEMENTS[StatusCodes.INTERNAL_SERVER_ERROR]
      });
      return;
    }

    if (_isEmpty(organizations)) {
      cloudLogger.info(`[organizations]:Organization ${organizationId} not found`, req);
      res.status(StatusCodes.NOT_FOUND).json({
        code: StatusCodes.NOT_FOUND,
        message: `Organization ${organizationId} not found`
      });
      return;
    }

    cloudLogger.info("Successfully received organizations by id", req);
    res.status(StatusCodes.OK).json({
      count: organizations.length,
      organizations
    });
  };
}

export default new OrganizationsController();
