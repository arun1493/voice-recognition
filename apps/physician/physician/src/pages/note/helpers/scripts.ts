import _findIndex from "lodash/findIndex";

import { NoteSection, Script, ScriptBlock } from "../../../types";
import { INDEX_NOT_FOUND, SUKI_ORGANIZATION_ID } from "../../../constants";

const renderScriptContentBlock = (section: NoteSection) => (block: ScriptBlock) => {
  return block?.sectionId === section?.id || block?.sectionId === SUKI_ORGANIZATION_ID;
};

const checkIfSectionHasScripts = (section: NoteSection) => (scriptContent: Script) => {
  const { blocks } = scriptContent;
  const sectionIndex = _findIndex(blocks, renderScriptContentBlock(section));
  return sectionIndex > INDEX_NOT_FOUND;
};

const createModules = (
  scripts: Script[],
  sectionName: string,
  activeSectionId: string,
  clickInsertScript: (scriptId: string, activeSectionId: string) => void
) => {
  return {
    history: {
      userOnly: false,
      maxStack: 100,
      delay: 1000
    },
    toolbar: false,
    keyboard: {
      bindings: {
        // Tab was replaced by key stroke('\t') in editor
        // Return true to let later handlers be called
        tab: {
          key: 9,
          handler: () => true
        }
      }
    },
    mention: {
      allowedChars: /^[A-Za-z\sÅÄÖåäö]*$/,
      mentionDenotationChars: ["+"],
      dataAttributes: ["cy"],
      positioningStrategy: "fixed",
      source: (searchTerm: string, renderList: any) => {
        if (!scripts) return;

        const scriptValues =
          scripts &&
          scripts.map((s, i) => {
            const secName = sectionName || "new";
            const scriptName = s.tags[0].name.value;
            return {
              cy: `section-${secName.replace(/\s/g, "_")}-script-${scriptName.replace(/\s/g, "_")}`,
              id: s.id,
              value: scriptName
            };
          });
        const values = scriptValues;
        if (searchTerm.length === 0) {
          renderList(values, searchTerm);
        } else {
          const matches = [];
          for (let i = 0; i < values.length; i++) {
            if (~values[i].value.toLowerCase().indexOf(searchTerm.toLowerCase())) {
              matches.push(values[i]);
            }
            renderList(matches, searchTerm);
          }
        }
      },
      onSelect: async ({ id }: any) => {
        clickInsertScript(id, activeSectionId);
      }
    }
  };
};

export { checkIfSectionHasScripts, createModules, renderScriptContentBlock };
