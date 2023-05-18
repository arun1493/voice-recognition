import _get from "lodash/get";
import _set from "lodash/set";
import _cloneDeep from "lodash/cloneDeep";

import { SCRIPT_TAG } from "../constants";

const isScriptTagName = (tag) => tag?.type === SCRIPT_TAG.NAME;

const getMacroName = (macro) => {
  const tags = _get(macro, "tags", []);
  const nameTag = tags.find(isScriptTagName);
  return _get(nameTag, "name.value", "");
};

const clearedAliasMacro = (macro) => {
  const macroCopy = _cloneDeep(macro);
  const nameTagIndex = macroCopy.tags.findIndex(isScriptTagName);
  _set(macroCopy, `tags[${nameTagIndex}].name.aliases`, []);
  return macroCopy;
};

const sortScriptsByName = (scripts) =>
  scripts.sort((a, b) => {
    const aTag = _get(a, "tags", []).find(isScriptTagName);
    const bTag = _get(b, "tags", []).find(isScriptTagName);

    if (!bTag) return -1;
    if (!aTag) return 1;

    const aName = _get(aTag, "name.value", "").toLowerCase();
    const bName = _get(bTag, "name.value", "").toLowerCase();

    if (aName < bName) return -1;
    if (aName > bName) return 1;
    return 0;
  });

export { getMacroName, clearedAliasMacro, sortScriptsByName };
