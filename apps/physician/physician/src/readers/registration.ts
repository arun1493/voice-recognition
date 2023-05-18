import _property from "lodash/property";
import { RegistrationDetail, RegistrationUser } from "@suki-web/suki-business";

import { Registration } from "../types";

const id = _property<Registration, string>("registrationId");
const user = _property<RegistrationDetail, RegistrationUser>("user");
const sku = _property<RegistrationDetail, string>("sku");

export default {
  id,
  sku,
  user
};
