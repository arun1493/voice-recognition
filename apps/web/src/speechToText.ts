
require('dotenv').config();
const _ = require('lodash');
const speech = require('@google-cloud/speech');

// Creates a client
const speechClient = new speech.SpeechClient();

const convertSpeechToText = (audioBuffer) => {
    const audio = {
        content: audioBuffer.toString('base64'),
    };

    // The audio file's encoding, sample rate in hertz, and BCP-47 language code
    const config = {
        encoding: 'LINEAR16',
        languageCode: 'en-US',
        sampleRateHertz: 16000,
        audioChannelCount: 2,
        
    };

    const request = {
        audio,
        config,
    };

    console.log(config)

    // Detects speech in the audio file
    return speechClient
        .recognize(request)
        .then((data) => {
            const results = _.get(data[0], 'results', []);
            const transcription = results
                .map(result => result.alternatives[0].transcript)
                .join('\n');
            console.log('trans', transcription)
            return transcription

        })
        .catch(err => {
            console.error('ERROR:', err);
        });
}

export default convertSpeechToText




