import { Script } from "../../../settings";
import { SukiAgentSize } from "../../../../constants";
import { AllUnderScoreOccurances, NoteOnAction, NoteSection } from "../../../../types";

type NoteSectionsProps = {
  activeSectionId: string;
  allScripts?: Script[];
  allUnderScoreOccurances: AllUnderScoreOccurances;
  compositionId: string;
  isImportedFromEmr: boolean;
  isPartialDictationComposition: boolean;
  isReadOnlyNote: boolean;
  noteTypeId: string;
  onAction: NoteOnAction;
  sections: NoteSection[];
};

type RenderNoteSectionProps = NoteSectionsProps & {
  activeSectionId: string;
  agentSize: SukiAgentSize;
  allScriptsModule: any;
  contentSelection: any;
  isAgentActive: boolean;
  lastProblemSectionIndex: number;
  onAction: NoteOnAction;
  pbcSectionId: string;
};

export { NoteSectionsProps, RenderNoteSectionProps };
