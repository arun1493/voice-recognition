import { noteReducer } from "./note.slice";
import { EMPTY_ARRAY, EMPTY_OBJECT, EMPTY_STRING } from "../../constants";

describe("Note reducer", () => {
  it("should handle initial state", () => {
    const expected = {
      activeSectionId: EMPTY_STRING,
      cardsByType: EMPTY_OBJECT,
      cardTypes: [],
      contentSelection: [],
      composition: EMPTY_OBJECT,
      compositionId: EMPTY_STRING,
      compositionStatus: {
        noteSubmissionSuccess: false
      },
      currentCardType: EMPTY_STRING,
      isCardsVisible: false,
      isIgnoredOnBlur: false,
      isInsertion: false,
      isPatientsListVisible: false,
      isShiftKey: false,
      isTabKey: false,
      loadingStatus: "not loaded",
      mappingICDCodes: {},
      readOnly: false,
      refetchNotes: false,
      scriptModules: EMPTY_ARRAY,
      selectedScript: "",
      shouldLoadFromCompletedNotes: false,
      underScoreOccurances: EMPTY_OBJECT
    };

    expect(noteReducer(undefined, { type: "" })).toEqual(expected);
  });
});
