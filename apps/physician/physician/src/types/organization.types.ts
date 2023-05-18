import { OrganizationEnhancedReview } from "../constants";

interface Organization {
  emr?: any;
  enhancedReview?: OrganizationEnhancedReview;
  gcpAccountId?: string;
  id?: string;
  isSukiXOrganization: boolean;
  name?: string;
}

export { Organization };
