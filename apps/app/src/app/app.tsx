// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import React, { useEffect, useState } from 'react';
import VoiceInput from './lib/VoiceInput';
import TextArea from './lib/Textarea';
import socketClient from './lib/Websocket'

export function App() {

  const [text, setText] = useState('')

  useEffect(() => {
    socketClient.onmessage = (message) => {
      setText((currentText) => {
        return currentText.concat(message.data)
      })
    }
  }, [])

  const handleRecordedVoice = (data) => {
    socketClient.send(data)
  }

  return (
    <>
      <VoiceInput onDataAvailable={handleRecordedVoice} />
      <TextArea value={text} />
    </>
  );
}

export default App;
