// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import React, { useEffect, useState } from 'react';
import VoiceInput from './lib/VoiceInput';
import TextArea from './lib/Textarea';
// import socketClient from './lib/Websocket'
import SpeechToText from './SpeechToText'

export function App() {

  return (
    <>
      <SpeechToText />
    </>
  );
}

export default App;
