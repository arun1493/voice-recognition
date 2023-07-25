const speech = require('@google-cloud/speech');

// Creates a client
const speechClient = new speech.SpeechClient();

// The audio file's encoding, sample rate in hertz, and BCP-47 language code
const config = {
    encoding: 'LINEAR16',
    languageCode: 'en-US',
    sampleRateHertz: 16000,
    audioChannelCount: 1,
};

const request = {
    config,
    interimResults: true, // If you want interim results, set this to true
};

const recognizeStream = (callBack) => speechClient
    .streamingRecognize(request)
    .on('error', (e) => { console.error('error here', e) })
    .on('data', data => {
        const text = data.results[0].alternatives[0].transcript
        const isFinal = data.results[0].isFinal
        const transcription = {
            text,
            isFinal
        }
        console.log(
            `Transcription: ${text}`
        );
        callBack(transcription)
    });

export default recognizeStream