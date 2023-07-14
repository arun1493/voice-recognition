
require('dotenv').config();

const _ = require('lodash');
const speech = require('@google-cloud/speech');
const fs = require('fs');

// Creates a client
const speechClient = new speech.SpeechClient();

const filePath = 'apps/web/src/test.wav';

	
const file = fs.readFileSync(filePath);
console.log('file buf', file)
const audioBytes = file.toString('base64');
// console.log(audioBytes)
const audio = {
  content: audioBytes,
};

const transcribe = (audioBytes) => {
    const audioBuffer = audioBytes
    console.log(audioBuffer)
    // console.log(typeof audioBytes, audioBytes.toString('base64'))
    // Reads a local audio file and converts it to base64
    // const audio = {
    //     content: audioBuffer.toString('base64'),
    // };

    fs.writeFile('demo.wav', Buffer.concat([audioBuffer]), (err) => {console.log(err)})
    // The audio file's encoding, sample rate in hertz, and BCP-47 language code
    const config = {
        encoding: 'LINEAR16',
        // sampleRateHertz: 48000,
        languageCode: 'en-US',
        
    };

    const request = {
        audio,
        config,
    };

    // Detects speech in the audio file
    // return speechClient
    //     .recognize(request)
    //     .then((data) => {
    //         console.log(data)
    //         const results = _.get(data[0], 'results', []);
    //         console.log(results)
    //         const transcription = results
    //             .map(result => result.alternatives[0].transcript)
    //             .join('\n');
    //         console.log(`Transcription: ${transcription}`);
    //     })
    //     .catch(err => {
    //         console.error('ERROR:', err);
    //     });
}

export default transcribe




