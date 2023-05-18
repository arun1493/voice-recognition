import _isEmpty from "lodash/isEmpty";

const formatText = (text: string, highlight: string) => {
  if (_isEmpty(text)) return;
  const parts = text.split(new RegExp(`(${highlight})`, "gi"));
  return parts.map((part) => (part.toLowerCase() === highlight.toLowerCase() ? <strong>{part}</strong> : part));
};

const formatCode = (code: string) => {
  if (code?.length > 3) {
    return code?.substring(0, 3) + "." + code?.substring(3);
  }
  return code;
};

export { formatCode, formatText };
