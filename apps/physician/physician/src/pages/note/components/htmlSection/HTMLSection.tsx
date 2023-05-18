import { FunctionComponent } from "react";

import { NoteSection } from "../../../../types";
import { sanitizeHTML } from "../../../../helpers";
import { sectionReader } from "../../../../readers";

type HTMLSectionProps = {
  section: NoteSection;
  onClick: () => void;
};

const HTMLSection: FunctionComponent<HTMLSectionProps> = ({ onClick, section }) => {
  const plainText = sectionReader.plainText(section);

  const htmlContent = sanitizeHTML(plainText);

  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} onClick={onClick}></div>;
};

export { HTMLSection };

export default HTMLSection;
