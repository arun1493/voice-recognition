import _property from "lodash/property";

import { CardType } from "../constants";
import { NoteState } from "../redux/note";

const cardTypes = _property<NoteState, CardType[]>("cardTypes");

export default {
  cardTypes
};
