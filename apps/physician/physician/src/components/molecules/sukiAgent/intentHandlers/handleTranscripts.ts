import _get from "lodash/get";
import _find from "lodash/find";
import { SlotTypes } from "@suki-web/suki-business";

import { Dispatch } from "../../../../types";
import { thinClientActions } from "../../../../redux/thinClient";

function handleTranscripts(slots: any, dispatch: Dispatch) {
  const transcriptSlot = _find(slots, (slot) => slot.type === SlotTypes.TRANSCRIPT);
  const transcript = _get(transcriptSlot, "values[0].transcript");

  dispatch(thinClientActions.updateSection(transcript));
}

export default handleTranscripts;
