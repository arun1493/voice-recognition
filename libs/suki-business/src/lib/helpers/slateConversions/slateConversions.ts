import _get from "lodash/get";
import { DocumentJSON, Leaf, Node, Text } from "slate";
import { DeltaStatic } from "react-quill/node_modules/@types/quill";

import { DYNAMIC_CHIP_MAPPING, EditorType, EditorTypes, s2SourceTypes, V2_DEFAULT_CONTENT } from "../../constants";

const EMPTY_DELTA = {
  ops: [{ insert: "\n" }]
};

const EMPTY_TEXT_NODE = {
  object: "text",
  leaves: [
    {
      object: "leaf",
      text: "",
      marks: []
    }
  ]
};

const newInline = (content: any, type: any, marks = []) => ({
  object: "inline",
  type: type,
  data: {},
  nodes: [
    {
      object: "text",
      leaves: [
        {
          object: "leaf",
          text: content,
          marks: marks
        }
      ]
    }
  ]
});

// Given the s2 representation of a chip, returns the user-readable Chip value
const extractValue = (chipStr: string) => {
  const chipStrVal = chipStr?.split("::")[1];
  const val = chipStrVal?.substring(0, chipStrVal?.length - 3);
  return val;
};

// Gets the attributes associated with a particular Slate type and user/editor context
const getAttributes = (slateType: any, marks: any) => {
  const attributes: any = { type: slateType || s2SourceTypes.DEFAULT };

  // add marks
  marks &&
    marks.forEach((m: any) => {
      attributes[m.type] = true;
    });

  return attributes;
};

// Utility for extracting plain text from a text node
const getTextFromTextNode = (tn: Text) => {
  const leaves = _get(tn, "leaves", []) as Leaf;
  let text = "";
  leaves.forEach((l) => {
    text += l.text;
  });
  return text;
};

// Utility for determining whether Slate content represents an empty section
const isEmptySection = (content: Node) => {
  const blockNodes = _get(content, "document.nodes", []);
  if (blockNodes.length !== 1) return false;
  const subNodes = _get(blockNodes, "[0].nodes", []);
  if (subNodes.length !== 1) return false;
  const textNode = _get(subNodes, "[0]");
  if (textNode.object !== "text") return false;
  if (getTextFromTextNode(textNode) !== "") return false;
  return true;
};

const convertSlateToDelta = (slateString: string, editorType: EditorType) => {
  let slate = null;
  try {
    slate = JSON.parse(slateString);
  } catch (err) {
    console.error("Unable to parse Slate string in JSON: ", slateString);
  }

  if (isEmptySection(slate)) {
    return EMPTY_DELTA;
  }

  const ops = [];

  // Convert slate to delta
  const document = _get(slate, "document");
  const blockNodes = _get(document, "nodes", []) as Node[];

  blockNodes.forEach((bn, i) => {
    const subnodes = _get(bn, "nodes", []);
    subnodes.forEach((sn: Node | any) => {
      const path = sn.object === "inline" ? "nodes[0].leaves" : "leaves";
      const leaves = _get(sn, path, []);
      leaves.forEach((leaf: Leaf) => {
        if (leaf.text === "") return;
        const removeNewlines = leaf.text.replace(/\n/g, "");
        if (removeNewlines === "") {
          // This is the case where the string only consists on newlines
          ops.push({
            insert: leaf.text,
            attributes: {
              blockType: sn.type || s2SourceTypes.DEFAULT
            }
          });
        } else {
          // Necessary for converting corrupted notetypes and scripts
          let type = sn.type || sn.blockType;

          if (type !== s2SourceTypes.DYNAMIC_VITALS_TEMPLATE) {
            if (editorType === EditorTypes.SCRIPT) {
              type = s2SourceTypes.SCRIPT_CONTENT;
            } else if (editorType === EditorTypes.NOTETYPE) {
              type = s2SourceTypes.PREPOPULATED;
            }
          }

          if (type === s2SourceTypes.DYNAMIC_VITALS_TEMPLATE) {
            ops.push({
              insert: {
                mention: {
                  denotationChar: "+",
                  id: "1",
                  index: "0",
                  value: extractValue(leaf.text)
                }
              }
            });
          } else {
            ops.push({
              insert: leaf.text,
              attributes: getAttributes(type, leaf.marks)
            });
          }
        }
      });
    });
    // need to add spacing for new block
    if (i !== blockNodes.length - 1) {
      ops.push({
        insert: "\n\n",
        attributes: { type: s2SourceTypes.DEFAULT }
      });
    }
  });

  ops.push({ insert: "\n" });
  return { ops: ops };
};

// Maps Delta attribute "type" back to Slate "type"
const getSlateType = (attributes: any, editorType: EditorType) => {
  const deltaType = _get(attributes, "type");

  if (deltaType === s2SourceTypes.DEFAULT || (!deltaType && !_get(attributes, "blockType"))) {
    if (editorType === EditorTypes.SCRIPT) {
      return s2SourceTypes.SCRIPT_CONTENT;
    }

    if (editorType === EditorTypes.NOTETYPE) {
      return s2SourceTypes.PREPOPULATED;
    }

    return s2SourceTypes.DEFAULT;
  }

  return attributes.type || attributes.blockType;
};

// Maps Delta attributes back to Slate marks
const getMarksFromAttributes = (attributes: any) => {
  const marks: any = [];
  if (!attributes) return marks;
  if (attributes.bold) {
    marks.push({
      object: "mark",
      type: "bold",
      data: {}
    });
  }
  if (attributes.italic) {
    marks.push({
      object: "mark",
      type: "italic",
      data: {}
    });
  }
  return marks;
};

// Given the user-readable Chip value, returns the s2 representation of said chip
const getChipInput = (mention: any) => {
  // eg. <<<TEMPERATURE:Temperature>>> or <<<BLOOD_PRESSURE::B.P>>>
  return `<<<${DYNAMIC_CHIP_MAPPING[mention.value]}::${mention.value}>>>`;
};

const convertDeltaToSlate = (
  deltaContent: DeltaStatic,
  contentLength: number,
  metadata: DocumentJSON,
  editorType: EditorType
) => {
  if (contentLength === 1) {
    return JSON.parse(V2_DEFAULT_CONTENT);
  }

  const slate = {
    object: "value",
    document: {
      object: "document",
      data: { editorVersion: "2.0.0", ...metadata },
      nodes: [
        {
          object: "block",
          type: "section",
          data: {},
          nodes: {}
        }
      ]
    }
  };

  const ops = _get(deltaContent, "ops", []);

  const inlines = [];
  for (let i = 0; i < ops.length - 1; i++) {
    const op = ops[i];

    const mention = op.insert && op.insert.mention;

    if (mention) {
      inlines.push(newInline(getChipInput(mention), s2SourceTypes.DYNAMIC_VITALS_TEMPLATE));
    } else {
      inlines.push(
        newInline(op.insert, getSlateType(op.attributes, editorType), getMarksFromAttributes(op.attributes))
      );
    }
  }

  const subnodes = [];
  inlines.forEach((i) => {
    subnodes.push(EMPTY_TEXT_NODE);
    subnodes.push(i);
  });

  subnodes.push(EMPTY_TEXT_NODE);

  const finalInsert = ops[ops.length - 1].insert;
  if (finalInsert !== "\n") {
    const lastInline = finalInsert.substring(0, finalInsert.length - 1);
    let finalSlateType = s2SourceTypes.DEFAULT;
    if (editorType === EditorTypes.SCRIPT) {
      finalSlateType = s2SourceTypes.SCRIPT_CONTENT;
    }
    if (editorType === EditorTypes.NOTETYPE) {
      finalSlateType = s2SourceTypes.PREPOPULATED;
    }

    subnodes.push(newInline(lastInline, finalSlateType));
    subnodes.push(EMPTY_TEXT_NODE);
  }

  slate.document.nodes[0].nodes = subnodes;
  return slate;
};

const isEmptySectionContent = (content: Node) =>
  _get(content, "document.nodes.0.nodes.1.nodes.0.leaves.0.text")?.trim() === "";

export { convertDeltaToSlate, convertSlateToDelta, isEmptySectionContent };
