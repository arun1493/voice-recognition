import _property from "lodash/property";

import { Allergy } from "../types";

interface CardContent {
  allergies: Allergy[];
  nkda: string;
}

const nkda = _property<CardContent, string>("nkda");
const allergies = _property<CardContent, Allergy[]>("allergies");

export default {
  allergies,
  nkda
};
