import _has from "lodash/has";
import { DeltaOperation, DeltaStatic, StringMap } from "react-quill/node_modules/@types/quill";

import { EditorType, EditorTypes, Personas, PersonasType, s2SourceType, s2SourceTypes } from "../../constants";

type Content = {
  end_offset: number;
  id: number;
  is_bold: number;
  is_italic: number;
  length_of_string: number;
  source: string;
  start_offset: number;
  string: string;
};

// Given the quill type attribute, returns the source for S2
const getSourceFromType = (type: s2SourceType, editor: EditorType, persona: PersonasType) => {
  switch (type) {
    case s2SourceTypes.ASR_TRANSCRIPT:
      return s2SourceTypes.ASR_NVOQ;
    case s2SourceTypes.DOCTOR_TYPED:
      return s2SourceTypes.TYPED_DOCTOR;
    case s2SourceTypes.OPS_TYPED:
      return s2SourceTypes.TYPED_SCRIBE;
    case s2SourceTypes.SCRIPT_CONTENT:
      return s2SourceTypes.SCRIPT;
    case s2SourceTypes.NONE:
    case s2SourceTypes.PREPOPULATED:
      return s2SourceTypes.NOTETYPE_PREFILLED;
    default:
      // there are cases with some V2 notes with S2 source types
      if (type === s2SourceTypes.DEFAULT) {
        if (editor === EditorTypes.SCRIPT) return s2SourceTypes.SCRIPT;
        if (editor === EditorTypes.NOTETYPE) return s2SourceTypes.NOTETYPE_PREFILLED;
        if (persona === Personas.PHYSICIAN) {
          return s2SourceTypes.TYPED_DOCTOR;
        }
        return s2SourceTypes[type];
      }

      if (_has(s2SourceTypes, type)) {
        return s2SourceTypes[type];
      }

      if (persona === Personas.PHYSICIAN) {
        return s2SourceTypes.TYPED_DOCTOR;
      } else {
        return s2SourceTypes.UNKNOWN;
      }
  }
};

const getSource = (attributes: StringMap, persona: PersonasType, editor: EditorType) => {
  if (!attributes) {
    if (persona === Personas.PHYSICIAN) {
      return s2SourceTypes.TYPED_DOCTOR;
    } else {
      return s2SourceTypes.UNKNOWN;
    }
  }

  return getSourceFromType(attributes.type || attributes.blockType, editor, persona);
};

const handleNewContent = (
  text: string,
  totalTextLength: number,
  attributes: any,
  id: number,
  persona: PersonasType,
  editor: EditorType
) => ({
  end_offset: totalTextLength + text.length - 1,
  id: id,
  is_bold: attributes?.bold ? 1 : 0,
  is_italic: attributes?.italic ? 1 : 0,
  length_of_string: text.length,
  source: getSource(attributes, persona, editor),
  start_offset: totalTextLength,
  string: text
});

const handleNewPasteContent = (text: string, totalTextLength: number, attributes: any, id: number) => ({
  end_offset: totalTextLength + text?.length - 1,
  id,
  is_bold: attributes?.bold ? 1 : 0,
  is_italic: attributes?.italic ? 1 : 0,
  length_of_string: text?.length,
  source: s2SourceTypes.TYPED_DOCTOR,
  start_offset: totalTextLength,
  string: text
});

// Given the web's Delta format, converts content to S2 to store in the
// backend
const convertDeltaToS2 = (delta: DeltaStatic, persona: PersonasType, editor: EditorType) => {
  if (!delta) {
    console.error("No delta content passed into converter");
  }

  const ops = delta.ops;
  if (!ops) {
    console.error("No ops field, unable to convert to S2");
  }

  const content = [] as Content[];
  let totalTextLength = 0;
  let totalString = "";
  ops &&
    ops.forEach((op, i) => {
      const text = op.insert;
      const attributes = op.attributes as any;

      if (i === ops.length - 1) {
        if (text.length > 1) {
          // This is the case where there is other text in the last
          // entry. Often when pasting content.
          const lastContent = text.substr(0, text.length - 1);
          content.push(
            // The source of pasted content is TYPED_DOCTOR
            handleNewPasteContent(lastContent, totalTextLength, attributes, i)
          );

          totalTextLength += lastContent.length;
          totalString += lastContent;
        }
        return;
      }
      content.push(handleNewContent(text, totalTextLength, attributes, i, persona, editor));
      totalTextLength += text.length;
      totalString += text;
    });

  const val = {
    number_of_strings: content.length,
    total_string_length: totalString.length,
    total_string: totalString,
    content: content
  };

  return val;
};

const getV2SourceFromS2Type = (type: s2SourceType) => {
  if (!type) return s2SourceTypes.DEFAULT;

  switch (type) {
    case s2SourceTypes.ASR_NVOQ:
      return s2SourceTypes.ASR_TRANSCRIPT;
    case s2SourceTypes.TYPED_DOCTOR:
      return s2SourceTypes.DOCTOR_TYPED;
    case s2SourceTypes.TYPED_SCRIBE:
      return s2SourceTypes.OPS_TYPED;
    case s2SourceTypes.SCRIPT:
      return s2SourceTypes.SCRIPT_CONTENT;
    case s2SourceTypes.NOTETYPE_PREFILLED:
      return s2SourceTypes.PREPOPULATED;
    case s2SourceTypes.UNKNOWN:
      return s2SourceTypes.DEFAULT;
    default:
      if (_has(s2SourceTypes, type)) {
        return s2SourceTypes[type];
      }
      return s2SourceTypes.DEFAULT;
  }
};
const EMPTY_DELTA = {
  ops: [{ insert: "\n" }]
};

const isOnlyNewline = (str: string) => {
  return /\n+/.test(str);
};

// Given S2 from backend, converts to Delta format so that web's Quill editor can
// use it
const convertS2ToDelta = (s2Str: string | Content) => {
  if (!s2Str) {
    console.error("No S2 content passed into converter");
  }

  let s2 = null;
  try {
    if (typeof s2Str === "string") {
      s2 = JSON.parse(s2Str);
    } else if (typeof s2Str === "object") {
      s2 = s2Str;
    }
  } catch (err) {
    console.error("Unable to parse content to JSON", err);
    return;
  }

  const s2Content = s2 && s2.content;
  if (!s2Content) {
    console.error("No content field, unable to convert to Delta. returning empty delta.");
    return EMPTY_DELTA;
  }

  const ops = [] as DeltaOperation[];
  s2Content.forEach((c: any) => {
    const newOps = [] as DeltaOperation[];

    const textArr = c?.string?.split(/(\n+)/);
    textArr?.forEach((s: string) => {
      if (s === "") {
        // Do nothing
      } else if (isOnlyNewline(s)) {
        newOps.push({
          insert: s,
          attributes: { blockType: getV2SourceFromS2Type(c.source) }
        });
      } else {
        const attributes = {
          type: getV2SourceFromS2Type(c.source),
          bold: false,
          italic: false
        };

        if (c.is_bold) {
          attributes.bold = true;
        }

        if (c.is_italic) {
          attributes.italic = true;
        }

        if (attributes.type === s2SourceTypes.INTERMEDIATE_TEXT) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          attributes.color = "#999999";
        }

        newOps.push({
          insert: s,
          attributes: attributes
        });
      }
    });
    ops.push(...newOps);
  });

  ops.push({ insert: "\n" });

  return { ops };
};

const getLengthOfIntermediateText = (s2Str: string | Content) => {
  if (!s2Str) {
    return 0;
  }

  let s2 = null;
  try {
    if (typeof s2Str === "string") {
      s2 = JSON.parse(s2Str);
    } else if (typeof s2Str === "object") {
      s2 = s2Str;
    }
  } catch (err) {
    console.error("Unable to parse content to JSON", err);
    return 0;
  }

  const s2Content = s2 && s2.content;
  if (!s2Content) {
    return 0;
  }

  return s2Content
    .filter((content: any) => content.source === s2SourceTypes.INTERMEDIATE_TEXT)
    .map((content: any) => content.length_of_string)
    .reduce((acc: number, length: number) => acc + length, 0);
};

export { convertDeltaToS2, convertS2ToDelta, getLengthOfIntermediateText };
