/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { WebSocketServer } from 'ws';
import convertSpeechToText from './speechToText';

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws) {
  console.log('Connected')
  ws.on('message', function message(payload) {
    convertSpeechToText(payload).then((text) => {
      ws.send(text);
    })
  });
});
