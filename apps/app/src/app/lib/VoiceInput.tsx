import React, { useEffect, useRef, useState } from "react";
import socketClient from './Websocket'

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

const VoiceRecorder: React.FC<Props> = (props) => {

    const [stream, setStream] = useState<MediaStream | undefined>(undefined)

    const requestDataId = useRef<ReturnType<typeof setInterval> | null>(null)

    const { onDataAvailable } = props

    const attachHandlers = (recorder: MediaRecorder) => {
        recorder.ondataavailable = (event) => {
            console.log("ondataavailable!", event.data)
            onDataAvailable(event.data)
            socketClient.send(event.data)
        }
        
    }

    
    const startRecording = async () => {
        const stream = await getMicroPhone()
        setStream(stream)
        if (stream) {
            const recorder = new MediaRecorder(stream)
            attachHandlers(recorder)
            recorder.start()
            requestDataId.current = setInterval(() => {
                recorder.requestData()
            }, 100)
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
        stream && stream.getTracks().forEach(track => track.stop());
        setStream(undefined);
    }


    return <>
        <button onClick={toggleMic}>
            {stream ? 'Stop' : 'Record'}
        </button>
    </>

}

export default VoiceRecorder