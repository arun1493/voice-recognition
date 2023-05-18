enum AgentSounds {
  END_OF_UTTERANCE,
  ERROR,
  EXIT_DICTATION
}

const AgentSoundPaths = {
  [AgentSounds.END_OF_UTTERANCE]: "../../../../assets/sounds/end_of_utterance.mp3",
  [AgentSounds.ERROR]: "../../../../assets/sounds/error.mp3",
  [AgentSounds.EXIT_DICTATION]: "../../../../assets/sounds/exit_dictation.mp3"
};

export { AgentSounds, AgentSoundPaths };
