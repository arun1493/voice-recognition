import { Person } from "./";
import { EnhancedReview } from "../constants";

interface UserDetails {
  enhancedReview: EnhancedReview;
  id: string;
  organizationId: string;
  person: Person;
  specialties: Array<string> | undefined;
  userType: string;
}

export { UserDetails };
