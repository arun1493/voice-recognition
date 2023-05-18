// Check if given string is html by checking presence of html tags in string
const isHTMLString = (str: string): boolean => {
  const regex = /<[a-z][\s\S]*>/i;
  return regex.test(str);
};

// Remove html tags from string, and converts to plain human readable text
const convertHTMLToText = (html: string): string => {
  const regex = /<[^>]+>/g;
  return html.replace(regex, "");
};

// Removes escape character(\) and newline character(\n) from html string
const sanitizeHTML = (html: string) => {
  const regex = /\\n|\\/g;
  return html.replace(regex, "");
};

export { convertHTMLToText, isHTMLString, sanitizeHTML };
