import { logger } from "../../../../api";
import { AgentSoundPaths, AgentSounds } from "../constants";

function playSound(agentSound: AgentSounds) {
  if (window.Audio) {
    const soundFilePath = AgentSoundPaths[agentSound];
    const audio = new Audio(soundFilePath);
    const promise = audio.play();
    if (promise !== undefined) {
      promise.catch((error) => {
        logger.error({ message: "Audio Error", payload: error });
      });
    }
  }
}

export { playSound };
