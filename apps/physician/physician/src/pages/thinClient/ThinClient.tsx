import _isEmpty from "lodash/isEmpty";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FunctionComponent, useEffect, useState } from "react";

import { EVENTS } from "./constants";
import { useSocket } from "../../socket";
import { useQueryParams } from "../../hooks";
import { agentActions } from "../../redux/agent";
import { selectSpeechData } from "../../redux/thinClient";
import TranscribeOutput from "./components/TranscriptOutput";
import { StyledPageNotFound, StyledPageNotFoundContainer } from "./thinClient.styled";

const ThinClient: FunctionComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [transcribedData, setTranscribedData] = useState("");
  const [interimTranscribedData, setInterimTranscribedData] = useState("");
  const params = useQueryParams();
  const asr = params.get("asr");

  const speechData = useSelector(selectSpeechData);
  const { registerEvents, unRegisterEvents } = useSocket();

  useEffect(() => {
    registerEvents(EVENTS);
    dispatch(agentActions.setBottom());

    return () => {
      unRegisterEvents(EVENTS);
    };
  }, []);

  const setTranscribedDetails = (text: string, isFinal: boolean) => {
    if (isFinal) {
      setInterimTranscribedData("");
      setTranscribedData((prevText) => prevText + text);
    } else {
      setInterimTranscribedData(text);
    }
  };

  useEffect(() => {
    if (asr === "2") {
      const { text, final } = speechData || {};
      setTranscribedDetails(text, final);
    } else {
      const { text, isFinal } = speechData?.payload || {};
      setTranscribedDetails(text, isFinal);
    }
  }, [speechData, asr]);

  const onAsrChanged = (asr: number) => {
    navigate(`/internal/thin-client?asr=${asr}`);
    navigate(0);
  };

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <input checked={asr !== "2"} name="asr" onChange={() => onAsrChanged(1)} type="radio" value="google-asr" />{" "}
        Suki-1
        <input checked={asr === "2"} name="asr" onChange={() => onAsrChanged(2)} type="radio" value="suki-asr" /> Suki-2
      </div>
      <StyledPageNotFound>
        <StyledPageNotFoundContainer>
          <TranscribeOutput interimTranscribedText={interimTranscribedData} transcribedText={transcribedData} />
        </StyledPageNotFoundContainer>
      </StyledPageNotFound>
    </>
  );
};

export { ThinClient };

export default ThinClient;
