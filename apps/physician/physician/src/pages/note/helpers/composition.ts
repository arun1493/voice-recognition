import _debounce from "lodash/debounce";
import { ClientEmitEventTypes } from "@suki-web/suki-business";

import { NoteSection } from "../../../types";
import { sectionReader } from "../../../readers";
import { USER_REQUEST_TYPE } from "../../../constants";

const saveComposition = _debounce(
  (sectionData: NoteSection, compositionId: string, noteTypeId: string, transmitEvent: any) => {
    const sectionId = sectionReader.sectionId(sectionData);

    transmitEvent({
      type: ClientEmitEventTypes.USER_REQUEST,
      data: { compositionId, sectionData, sectionId, noteTypeId, requestType: USER_REQUEST_TYPE.UPDATE_SECTION }
    });
  },
  800
);

export { saveComposition };
