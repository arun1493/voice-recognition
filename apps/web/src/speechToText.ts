
require('dotenv').config();
const _ = require('lodash');
const speech = require('@google-cloud/speech');

// Creates a client
const speechClient = new speech.SpeechClient();

const recognizeStream = () => {

    // The audio file's encoding, sample rate in hertz, and BCP-47 language code
    const config = {
        encoding: 'LINEAR16',
        languageCode: 'en-US',
        sampleRateHertz: 16000,
        audioChannelCount: 2,

    };

    const request = {
        config,
        interimResults: false, // If you want interim results, set this to true
    };

    console.log(config)

    return speechClient
        .streamingRecognize(request)
        .on('error', console.error)
        .on('data', data => {
            console.log(
                `Transcription: ${data.results[0].alternatives[0].transcript}`
            );

        return data.results[0].alternatives[0].transcript
    });
}

const speechToText = (buffer) => {
    buffer.stream()
    .on('error', console.error)
    .pipe(recognizeStream);
}

export default speechToText





