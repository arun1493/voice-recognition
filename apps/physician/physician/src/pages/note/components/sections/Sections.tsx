import _map from "lodash/map";
import _find from "lodash/find";
import _noop from "lodash/noop";
import _isEmpty from "lodash/isEmpty";
import { useSelector } from "react-redux";
import _findLastIndex from "lodash/findLastIndex";
import { FunctionComponent, memo, useEffect } from "react";
import { ScreenSize, Text, useBreakpointIncludes } from "@suki-web/suki-ui";

import {
  PositionedCapturingIndicator,
  StyledBorder,
  StyeldDistinction,
  StyledFooterContent,
  StyledHTMLSection,
  StyledSection,
  StyledSections
} from "./sections.styled";
import { Section } from "../section";
import { HTMLSection } from "../htmlSection";
import { NoteSection } from "../../../../types";
import { ProblemSection } from "../problemSection";
import { sectionReader } from "../../../../readers";
import { AddProblemButton } from "../addProblemButton";
import { NoteActionType } from "../../../../constants";
import { getPbcSectionId, isProblemSection } from "../../helpers";
import { NoteSectionsProps, RenderNoteSectionProps } from "./sections.types";
import { selectAgentSize, selectIsAgentActive } from "../../../../redux/agent";
import { selectContentSelection, selectScriptsModule } from "../../../../redux/note";

const renderNoteSection =
  ({
    activeSectionId,
    agentSize,
    allScriptsModule,
    compositionId,
    contentSelection,
    isAgentActive,
    isImportedFromEmr,
    isPartialDictationComposition,
    isReadOnlyNote,
    lastProblemSectionIndex,
    onAction = _noop,
    pbcSectionId,
    sections
  }: RenderNoteSectionProps) =>
  (section: NoteSection, sectionIndex: number) => {
    const sectionId = sectionReader.sectionId(section);
    const sectionName = sectionReader.sectionName(section);
    const isProblemSection = !!section.diagnosisEntry;
    const isReadOnly = sectionReader.readOnly(section);
    const dictationTag = sectionReader.dictationTag(section);
    const footerContent = sectionReader.footerContent(section);

    const isReadOnlySection = isReadOnlyNote || isReadOnly;
    const isHTMLSection = isPartialDictationComposition && _isEmpty(dictationTag);

    const isSelected = sectionId === activeSectionId;
    const isDictationMode = isSelected && isAgentActive;
    const isCapturingDictation = isDictationMode && !isReadOnlySection;

    const handleAddNewProblem = () => {
      !isReadOnlyNote &&
        onAction({
          type: NoteActionType.ADD_NEW_PROBLEM,
          payload: { sectionId: pbcSectionId }
        });
    };

    const handleSectionFocus = () => {
      !isReadOnlySection &&
        !isSelected &&
        onAction({
          type: NoteActionType.SECTION_FOCUS,
          payload: { sectionId, isAgentActive }
        });
    };

    const handleHTMLSectionFocus = () => {
      !isReadOnlyNote &&
        onAction({
          type: NoteActionType.HTML_SECTION_FOCUS,
          payload: { isAgentActive, isReadOnlyNote, sectionIndex, sections }
        });
    };

    const scriptModules = _find(
      allScriptsModule,
      (scriptModules) => scriptModules.sectionId === sectionId
    )?.scriptModuleForSection;

    if (isHTMLSection) {
      return (
        <StyledHTMLSection key={`note-html-section-container-${compositionId}-section-${sectionId}`}>
          <HTMLSection onClick={handleHTMLSectionFocus} section={section}></HTMLSection>
        </StyledHTMLSection>
      );
    }

    if (isProblemSection) {
      return (
        <>
          <ProblemSection
            activeSectionId={activeSectionId}
            agentSize={agentSize}
            compositionId={compositionId}
            contentSelection={contentSelection}
            isAgentActive={isAgentActive}
            isCapturingDictation={isCapturingDictation}
            isImportedFromEmr={isImportedFromEmr}
            isSelected={isSelected}
            key={`note-problem-section-container-${compositionId}-section-${sectionId}`}
            onAction={onAction}
            readOnly={isReadOnlySection}
            scriptModules={scriptModules}
            section={section}
            sectionId={sectionId}
            sectionIndex={sectionIndex}
            sectionName={sectionName}
          />
          {!isReadOnlyNote && sectionIndex === lastProblemSectionIndex && (
            <AddProblemButton onClick={handleAddNewProblem} />
          )}
        </>
      );
    }

    const { LG, XL, MD } = ScreenSize;
    const isLargeScreen = useBreakpointIncludes(MD, LG, XL);
    const textSize = isLargeScreen ? "xl" : "lg";

    return (
      <>
        <StyledSection
          isCapturingDictation={isCapturingDictation}
          isReadOnly={isReadOnlySection}
          isSelected={isSelected}
          key={`note-section-container-${compositionId}-section-${sectionId}`}
          onClick={handleSectionFocus}
        >
          {isSelected && <StyledBorder isCapturingDictation={isCapturingDictation} />}
          {!isPartialDictationComposition && (
            <Text isBold={true} lineHeight="24px" size={textSize}>
              {sectionName}
            </Text>
          )}
          <Section
            activeSectionId={activeSectionId}
            agentSize={agentSize}
            compositionId={compositionId}
            contentSelection={contentSelection}
            isAgentActive={isAgentActive}
            isImportedFromEmr={isImportedFromEmr}
            key={`note-composition-${compositionId}-section-${sectionId}`}
            onAction={onAction}
            readOnly={isReadOnlySection}
            scriptModules={scriptModules}
            section={section}
            sectionIndex={sectionIndex}
          />
          {isCapturingDictation && <PositionedCapturingIndicator />}
        </StyledSection>
        {!_isEmpty(footerContent) && <StyledFooterContent>{footerContent}</StyledFooterContent>}
        {!isReadOnlyNote && sectionIndex === lastProblemSectionIndex && (
          <AddProblemButton onClick={handleAddNewProblem} />
        )}
      </>
    );
  };

const Sections: FunctionComponent<NoteSectionsProps> = memo(
  ({
    activeSectionId,
    allScripts,
    allUnderScoreOccurances,
    compositionId,
    isPartialDictationComposition,
    isReadOnlyNote,
    isImportedFromEmr,
    noteTypeId,
    onAction,
    sections
  }) => {
    const allScriptsModule = useSelector(selectScriptsModule);
    const contentSelection = useSelector(selectContentSelection);
    const agentSize = useSelector(selectAgentSize);
    const lastProblemSectionIndex = _findLastIndex(sections, isProblemSection);
    const pbcSectionId = getPbcSectionId(sections);

    const isAgentActive = useSelector(selectIsAgentActive);

    const handleInsertScript = (scriptId: string, activeSectionId: string) => {
      onAction({
        type: NoteActionType.INSERT_SCRIPT,
        payload: { activeSectionId, scriptId }
      });
    };

    useEffect(() => {
      onAction({
        type: NoteActionType.UPDATE_SCRIPT_MODULE,
        payload: { allScripts, handleInsertScript, sections }
      });
    }, [allScripts]);

    return (
      <StyledSections>
        {_map(
          sections,
          renderNoteSection({
            activeSectionId,
            agentSize,
            allScriptsModule,
            allUnderScoreOccurances,
            compositionId,
            contentSelection,
            isAgentActive,
            isPartialDictationComposition,
            isReadOnlyNote,
            isImportedFromEmr,
            lastProblemSectionIndex,
            noteTypeId,
            onAction,
            pbcSectionId,
            sections
          })
        )}
        <StyeldDistinction
          isPartialDictationComposition={isPartialDictationComposition}
        />
      </StyledSections>
    );
  }
);

export { Sections };

export default Sections;
