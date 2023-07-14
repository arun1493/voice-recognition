import React, { useEffect, useRef, useState } from "react";
import socketClient from './Websocket'
import Recorder from './Recorder'

const getMicroPhone = async () => {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({
            audio: true,
            video: false
        });
        return stream
    }
    catch (e) {
        console.error(e)
    }
}


interface Props {
    onDataAvailable: (data: Blob) => void
}

var recorder;

const VoiceRecorder: React.FC<Props> = (props) => {

    const [stream, setStream] = useState<MediaStream | undefined>(undefined)

    const requestDataId = useRef<ReturnType<typeof setInterval> | null>(null)

    
    const startRecording = async () => {
        const stream = await getMicroPhone()

        
        setStream(stream)

        if(stream) {
            const context = new AudioContext();
            const mediaStreamSource = context.createMediaStreamSource(stream);
            recorder = new Recorder(mediaStreamSource);
            recorder.record()

            requestDataId.current = setInterval(function() {

                recorder.exportWAV(function(blob) {
                    console.log('YAY', blob)
                    recorder.clear();
                    socketClient.send(blob);
                    Recorder.forceDownload(blob, 'test.wav')
                });
            }, 2000);
            


        }
      
    }

    const toggleMic = () => {
        if (stream) {
            stopMic()
            return
        }
        startRecording()
    }

    const stopMic = () => {
        requestDataId.current && clearInterval(requestDataId.current)
        // stream && stream.getTracks().forEach(track => track.stop());
        setStream(undefined);
        recorder.stop()
    }


    return <>
        <button onClick={toggleMic}>
            {stream ? 'Stop' : 'Record'}
        </button>
    </>

}

export default VoiceRecorder