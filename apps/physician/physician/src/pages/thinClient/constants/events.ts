import { handleSpeechData } from "../eventHandlers";

const SPEEECH_DATA = {
  type: "SPEECH_DATA",
  handler: handleSpeechData
};

const EVENTS = [SPEEECH_DATA];

export default EVENTS;
