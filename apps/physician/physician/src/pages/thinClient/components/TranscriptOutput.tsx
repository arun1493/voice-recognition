import { Text } from "@suki-web/suki-ui";
import { FunctionComponent } from "react";

interface TranscribeOutputProps {
  transcribedText: string;
  interimTranscribedText: string;
}

const TranscribeOutput: FunctionComponent<TranscribeOutputProps> = ({ transcribedText, interimTranscribedText }) => {
  if (transcribedText?.length === 0 && interimTranscribedText?.length === 0) {
    return <Text>...</Text>;
  }

  return (
    <div
      style={{
        display: "block"
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          height: "400px",
          width: "600px",
          maxHeight: "400px",
          display: "inline-block",
          border: "1px solid lightgray",
          background: "white",
          borderRadius: "8px",
          padding: "16px",
          overflow: "auto"
        }}
      >
        <Text>
          {transcribedText} <span style={{ color: "#2e5f62", marginLeft: "8px" }}> {interimTranscribedText}</span>
        </Text>
      </div>
    </div>
  );
};

export default TranscribeOutput;
