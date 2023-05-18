import _property from "lodash/property";

import { Organization } from "../types";
import { OrganizationEnhancedReview, SecondaryEmr } from "../constants";

const enhancedReview = _property<Organization, OrganizationEnhancedReview>("enhancedReview");
const isSukiXOrganization = _property<Organization, boolean>("isSukiXOrganization");
const emrType = _property<Organization, SecondaryEmr>("emr.secondaryType");
const emrId = _property<Organization, string>("emr.id");
const emr = _property<Organization, any>("emr");

export default { emr, emrId, emrType, enhancedReview, isSukiXOrganization };
