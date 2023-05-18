import _noop from "lodash/noop";
import _isNil from "lodash/isNil";
import { EMPTY_OBJECT } from "@suki-web/suki-business";
import { FunctionComponent, useCallback, useEffect } from "react";
import { RangeStatic } from "react-quill/node_modules/@types/quill";
import { EditorTypes, Personas, QuillOnChangePropsType, SukiEditor, UpdateTypes } from "@suki-web/suki-editor";

import { sectionReader } from "../../../../readers";
import { NoteSectionProps } from "../../../../types";
import { NoteActionType } from "../../../../constants";
import { handleContentFocus } from "../../helpers/scroll";
import { Suggestion } from "../../../../components/molecules";

const Section: FunctionComponent<NoteSectionProps> = ({
  activeSectionId,
  agentSize,
  compositionId,
  contentSelection,
  isAgentActive = false,
  isImportedFromEmr = false,
  onAction = _noop,
  readOnly,
  scriptModules,
  section,
  sectionIndex
}) => {
  const sectionContent = sectionReader.sectionContent(section);

  const sectionId = sectionReader.sectionId(section);
  const sectionName = sectionReader.sectionName(section);
  const plainText = sectionReader.plainText(section);
  const cursorPosition = sectionReader.cursorPosition(section);
  const isActive = activeSectionId === sectionId;

  const hasSuggestion = true;

  const handleOnChange = useCallback(
    ({
      content,
      cursorPosition,
      historyStack,
      plainText,
      updateType = UpdateTypes.DEFAULT
    }: QuillOnChangePropsType) => {
      handleContentFocus(agentSize);
      const sectionData = { id: sectionId, content, cursorPosition, plainText };
      onAction({
        type: NoteActionType.UPDATE_SECTION,
        payload: { contentSelection, historyStack, sectionData, updateType }
      });
    },
    [contentSelection]
  );

  const handleOnBlur = useCallback(() => {
    onAction({
      type: NoteActionType.SECTION_BLUR
    });
  }, []);

  const handleOnFocus = useCallback(
    (sectionId: string) => {
      onAction({
        type: NoteActionType.SECTION_FOCUS,
        payload: { sectionId, isAgentActive }
      });
    },
    [sectionId, isAgentActive]
  );

  const handleUpdateCursorPosition = useCallback(
    (range: RangeStatic) => {
      const { index, length } = range || EMPTY_OBJECT;
      if (!_isNil(index)) {
        setTimeout(() => {
          onAction({
            type: NoteActionType.UPDATE_CURSOR_POSITION,
            payload: { sectionId, cursorPosition: index, cursorLength: length }
          });
        }, 0);
      }
    },
    [sectionId]
  );

  const handleTabKey = useCallback(
    (isShiftTab: boolean, range: RangeStatic) => {
      const { index: currentCursorPosition } = range || EMPTY_OBJECT;
      onAction({
        type: NoteActionType.TAB_NAVIGATION,
        payload: {
          currentCursorPosition,
          isShiftTab,
          sectionId
        }
      });
    },
    [sectionId]
  );

  useEffect(() => {
    if (isActive && isAgentActive && !readOnly) {
      handleContentFocus(agentSize);
    }
  }, [isActive, isAgentActive, plainText, readOnly, agentSize]);

  return (
    <>
      <Suggestion name="uttam"></Suggestion>
      <SukiEditor
        compositionId={compositionId}
        content={sectionContent}
        contentSelection={contentSelection}
        cursorPosition={cursorPosition}
        editorType={isImportedFromEmr ? EditorTypes.ADMIN : EditorTypes.NOTE}
        id={sectionId}
        isActive={isActive}
        isAgentActive={isAgentActive}
        key={`suki-editor-${compositionId}-section-${sectionId}`}
        onBlur={handleOnBlur}
        onChange={handleOnChange}
        onChangeSelection={handleUpdateCursorPosition}
        onFocus={handleOnFocus}
        onTabKey={handleTabKey}
        persona={Personas.PHYSICIAN}
        plainText={plainText}
        readOnly={readOnly}
        scriptModules={scriptModules}
        sectionName={sectionName}
        testId={`composition-section-index-${sectionIndex}`}
        />
    </>
  );
};

export { Section };

export default Section;
