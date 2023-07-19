/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { WebSocketServer } from 'ws';
const fs = require('fs');

const WavFileWriter = require('wav').FileWriter;

let outputFileStream = new WavFileWriter(`check.wav`, {
  sampleRate: 16000,
  bitDepth: 16,
  channels: 1
});

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws) {
  console.log('Connected')


  ws.on('message', function message(payload) {
    console.log(typeof payload)
    outputFileStream.write(payload);
    // speaker.write(payload)
    // convertSpeechToText(speaker)
  });

  ws.on('close', () => {
    outputFileStream.end();
    console.log('end')
  })
});
