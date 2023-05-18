import { FunctionComponent } from "react";

const EmbedError: FunctionComponent<{ errorMessage?: string }> = ({ errorMessage }) => {
  return <>Error: {errorMessage}</>;
};

export default EmbedError;

export { EmbedError };
