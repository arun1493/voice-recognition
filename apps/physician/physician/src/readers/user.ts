import _property from "lodash/property";
import { Specialities } from "@suki-web/suki-business";

import { UserDetails } from "../types";
import { EnhancedReview } from "../constants";

const email = _property<UserDetails | null, string>("email");
const enhancedReview = _property<UserDetails | null, EnhancedReview>("enhancedReview");
const specialties = _property<UserDetails | null, Specialities>("specialties");

export default { email, enhancedReview, specialties };
