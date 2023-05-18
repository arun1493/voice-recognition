import "quill-mention";
import _get from "lodash/get";
import _noop from "lodash/noop";
import {
  convertDeltaToS2,
  convertDeltaToSlate,
  convertS2ToDelta,
  convertSlateToDelta,
  getLengthOfIntermediateText
} from "@suki-web/suki-business";
import unidecode from "unidecode";
import ReactQuill from "react-quill";
import DeltaQuill from "quill-delta";
import _isEmpty from "lodash/isEmpty";
import { FunctionComponent, memo, useEffect, useRef } from "react";
import Quill, { Delta, DeltaStatic, RangeStatic, Sources } from "react-quill/node_modules/@types/quill";

import {
  DEFAULT_FORMAT,
  DEFAULT_MODULES,
  DEFAULT_THEME,
  DEFAULT_WITH_CHIPS_MODULES,
  NODE_TYPES,
  quillSources
} from "./constants";
import "./quillEditor.css";
import { getDataField } from "./helpers";
import { QuillFormatType, QuillModuleType, QuillOnChangePropsType } from "./quillEditor.types";
import { EditorType, EditorTypes, Personas, PersonasType, UpdateTypes } from "../../constants";

interface QuillEditorProps {
  compositionId?: string;
  content?: string;
  contentSelection?: any;
  createModules?: (scripts: any, sectionName: string, sectionId: string) => void;
  cursorPosition?: number;
  editorType?: EditorType;
  enableChips?: boolean;
  errorUnsupportedContent?: string;
  formats?: QuillFormatType;
  id: string;
  isActive?: boolean;
  isAgentActive?: boolean;
  onBlur?: () => void;
  onChange: (props: QuillOnChangePropsType) => void;
  onChangeSelection?: (range: RangeStatic) => void;
  onFocus?: (id: string) => void;
  onTabKey?: (isShiftTab: boolean, range: RangeStatic) => void;
  onUniCodeCharacters?: () => void;
  persona: PersonasType;
  placeholder?: string;
  plainText?: string;
  readOnly?: boolean;
  scriptModules?: QuillModuleType;
  sectionName?: string;
  testId?: string;
  theme?: string;
}

const QuillEditor: FunctionComponent<QuillEditorProps> = ({
  compositionId,
  content = "",
  contentSelection,
  cursorPosition,
  editorType = EditorTypes.NOTE as EditorType,
  enableChips = false,
  errorUnsupportedContent = "",
  formats = DEFAULT_FORMAT,
  id,
  isActive,
  isAgentActive,
  onBlur = _noop,
  onChange = _noop,
  onChangeSelection = _noop,
  onFocus = _noop,
  onTabKey = _noop,
  onUniCodeCharacters = _noop,
  persona,
  placeholder,
  plainText,
  readOnly = false,
  scriptModules,
  testId,
  theme = DEFAULT_THEME
}) => {
  let intermediateTextLength = 0;
  const ref: Quill | any = useRef();
  const quillCursorPosition = useRef(ref?.current?.editor?.getLength());
  const didPaste = useRef(false);
  const avoidOnChangeTrigger = useRef(false);
  const isNoteEditorType = editorType === EditorTypes.NOTE;
  const modules: QuillModuleType = enableChips ? DEFAULT_WITH_CHIPS_MODULES : scriptModules || DEFAULT_MODULES;
  const metadata = isNoteEditorType ? null : getDataField(content);

  if (!isActive && ref?.current?.editor?.hasFocus()) {
    ref?.current?.editor?.blur();
  }

  const handleOnChange = (content: string, change: DeltaStatic, source: Sources, editor: any) => {
    if (avoidOnChangeTrigger.current) {
      return;
    }

    let currentCursorPosition = _get(editor.getSelection(true), "index");
    if (isAgentActive && !currentCursorPosition) {
      // Quill Editor sends range/cursor position 0, this leads cursor position to stay on the 0th position while dictating
      // to avoid that we are creating a ref to track that cursor position and set it in the quill editor
      currentCursorPosition = quillCursorPosition.current;
      isActive && ref?.current?.editor?.setSelection(quillCursorPosition.current, quillSources.SILENT);
    }

    // Currently the data will be in Delta format in order to save it to S2 convert it into S2 format
    const slateToSave = isNoteEditorType
      ? convertDeltaToS2(editor.getContents(), persona, editorType)
      : convertDeltaToSlate(editor.getContents(), editor.getLength(), metadata, editorType);

    let checkIfNewLine = false;
    isNoteEditorType &&
      change?.ops?.forEach((data) => {
        if (data.insert === "\n" && source === quillSources.USER) {
          checkIfNewLine = true;
        }
      });

    // Fetch the history stack to handle undo changes at Note component level.
    const historyStack = ref?.current?.editor?.history?.stack;

    if (source === quillSources.USER) {
      const updatedCursorPosition = checkIfNewLine ? currentCursorPosition + 1 : currentCursorPosition;
      onChange({
        cursorPosition: updatedCursorPosition,
        historyStack,
        plainText: editor.getText(),
        content: JSON.stringify(slateToSave)
      });
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    const { ctrlKey, key, metaKey, shiftKey } = e;

    if (key === "Tab" && persona === Personas.PHYSICIAN) {
      e.preventDefault();
      onTabKey(shiftKey, ref?.current?.editor?.getSelection(true));
    }

    if ((ctrlKey || metaKey) && key === "a") {
      e.preventDefault();
      const contentLength = ref?.current?.editor?.getLength();
      ref?.current?.editor?.setSelection(0, contentLength);
    }

    if ((ctrlKey || metaKey) && key === "v") {
      didPaste.current = true;
    }

    if (isNoteEditorType && key === "+") {
      avoidOnChangeTrigger.current = true;
    }
  };

  const handleOnFocus = (range: RangeStatic, source: Sources, editor: any) => {
    if (source === quillSources.USER) {
      !readOnly && onFocus(id);
    }
  };

  const handleOnBlur = (previousRange: RangeStatic, source: Sources, editor: any) => {
    if (source === quillSources.USER) {
      !readOnly && onBlur();
    }
  };

  const handleChangeSelection = (range: RangeStatic, source: Sources, editor: any) => {
    if (source === quillSources.USER || (didPaste.current && source === quillSources.SILENT)) {
      !readOnly && onChangeSelection(range);
    }
  };

  useEffect(() => {
    let quillContent = "" as string | Delta;
    if (isNoteEditorType) {
      avoidOnChangeTrigger.current = false;
      try {
        quillContent = convertS2ToDelta(content) as Delta;
        intermediateTextLength = getLengthOfIntermediateText(content);
      } catch (error) {
        quillContent = content;
        console.error("Unable to convert s2 to delta", error);
      }
    } else if (!_isEmpty(errorUnsupportedContent)) {
      quillContent = JSON.parse(errorUnsupportedContent);
    } else {
      try {
        quillContent = convertSlateToDelta(content, EditorTypes.NOTETYPE) as Delta;
      } catch (error) {
        console.error("Unable to convert slate to delta", error);
      }
    }

    const editor = ref?.current?.editor;
    if (isActive && isAgentActive) {
      editor?.setContents(quillContent);

      const contentLength = editor?.getLength();
      if (intermediateTextLength && cursorPosition) {
        editor?.setSelection(cursorPosition + intermediateTextLength, 0, quillSources.SILENT);
      } else {
        editor?.setSelection(contentLength, 0, quillSources.SILENT);
      }
    } else {
      editor?.setContents(quillContent, quillSources.SILENT);
    }

    if (didPaste?.current) {
      didPaste.current = false;
    }
  }, [content, isActive, plainText]);

  useEffect(() => {
    if (!isActive) {
      ref?.current?.editor?.blur();
      return;
    }

    if (!_isEmpty(contentSelection)) {
      const [startIndex, endIndex] = contentSelection;
      ref?.current?.editor?.setSelection(startIndex, endIndex - startIndex);
    } else {
      quillCursorPosition.current = cursorPosition;
      setTimeout(() => {
        ref?.current?.editor?.setSelection(cursorPosition, 0, quillSources.SILENT);
      }, 0);
    }
  }, [isActive, contentSelection, cursorPosition]);

  useEffect(() => {
    if (isActive) {
      ref?.current?.editor?.focus();
    }
  }, [isActive]);

  // Clipboard Unsupported text
  if (!isNoteEditorType) {
    modules.clipboard = {
      matchers: [
        [
          NODE_TYPES.TEXT_NODE,
          function (node: any, delta: any) {
            const isUnidecodingRequired = unidecode(node.data) !== node.data;
            let text = node.data;

            if (isUnidecodingRequired) {
              text = unidecode(node.data);

              onUniCodeCharacters();
            }

            return new DeltaQuill().insert(text);
          }
        ]
      ]
    };
  }

  // ref?.current?.editor was undefined at initial render, so we need to
  // check if the editor has any pending changes to set
  // Quill editor always start with \n as default
  // at initial render plaintext is "" with length 0 but ref?.current?.editor?.getText() is "\n" with length 1
  const hasChangesToSet = plainText !== ref?.current?.editor?.getText()?.replace(/\n$/, "");
  if (isNoteEditorType && hasChangesToSet) {
    let quillContent = "" as string | Delta;
    try {
      quillContent = convertS2ToDelta(content) as Delta;
    } catch (error) {
      quillContent = content;
      console.error("Unable to convert s2 to delta", error);
    }
    hasChangesToSet && ref?.current?.editor?.setContents(quillContent, quillSources.SILENT);
  }

  return (
    <div data-cy={testId} key={`quill-editor--${compositionId}-section-${id}`}>
      <ReactQuill
        formats={formats}
        id={id}
        modules={modules}
        onBlur={handleOnBlur}
        onChange={handleOnChange}
        onChangeSelection={handleChangeSelection}
        onFocus={handleOnFocus}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        readOnly={readOnly}
        ref={ref}
        theme={theme}
      />
    </div>
  );
};

const areQuillEditorPropsEqual = (prevProps: QuillEditorProps, nextProps: QuillEditorProps) => {
  if (
    prevProps.isActive === nextProps.isActive &&
    prevProps.content === nextProps.content &&
    prevProps.contentSelection === nextProps.contentSelection &&
    prevProps.cursorPosition === nextProps.cursorPosition &&
    prevProps.plainText === nextProps.plainText
  ) {
    return true;
  }
  return false;
};

const MemoizedQuillEditor = memo(QuillEditor, areQuillEditorPropsEqual);

export { MemoizedQuillEditor as QuillEditor, QuillEditorProps };

export default MemoizedQuillEditor;
