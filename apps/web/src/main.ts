/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import recognizeStream from './speechToText';

import wss from './websocketserver'

const WavFileWriter = require('wav').FileWriter;


wss.on('connection', function connection(ws) {

  const outputFileStream = new WavFileWriter(`audio.wav`, {
    sampleRate: 16000,
    bitDepth: 16,
    channels: 1
  });

  const socketCallback = (data) => {
    console.log('sending from server', data)
    ws.send(data)
  }

  console.log('Connected')
  outputFileStream
  .pipe(recognizeStream(socketCallback))

  ws.on('message', function message(payload) {
    outputFileStream.write(payload);
  });

  ws.on('close', () => {
    outputFileStream.end();
    console.log('end')
  })
});
