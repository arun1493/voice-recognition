import _property from "lodash/property";

import { EmrTokensProps } from "../redux/emr";

const fhirAccessToken = _property<EmrTokensProps, string>("fhirAccessToken");
const fhirIdToken = _property<EmrTokensProps, string>("fhirIdToken");
const fhirRefreshToken = _property<EmrTokensProps, string>("fhirRefreshToken");

export default {
  fhirAccessToken,
  fhirIdToken,
  fhirRefreshToken
};
