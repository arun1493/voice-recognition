import { DYNAMIC_CHIPS } from "../../../constants";

const DEFAULT_FORMAT = ["bold", "italic", "color", "background", "type", "blockType", "mention"];

const DEFAULT_MODULES = {
  history: {},
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
  }
};

const DEFAULT_WITH_CHIPS_MODULES = {
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
    source: function (
      searchTerm: string,
      renderList: (arg0: { id: number; value: string }[], arg1: any) => void,
      mentionChar: any
    ) {
      let values = DYNAMIC_CHIPS;
      values = values.map((vital, i) => {
        const vitalName = vital.value.replace(/\s+/g, "-").toLowerCase();
        return { ...vital, cy: `vitals-list-${vitalName}` };
      });
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
    }
  }
};

const DEFAULT_THEME = "snow";

enum quillSources {
  USER = "user",
  API = "api",
  SILENT = "silent"
}

const NODE_TYPES = {
  TEXT_NODE: 3
};

export { DEFAULT_FORMAT, DEFAULT_MODULES, DEFAULT_THEME, DEFAULT_WITH_CHIPS_MODULES, NODE_TYPES, quillSources };
