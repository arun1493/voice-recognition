import React, { useEffect, useRef, useState } from "react";
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

const VoiceRecorder: React.FC<Props> = ({ onDataAvailable }) => {


    const [stream, setStream] = useState<MediaStream | undefined>(undefined)

    const recorder = useRef(undefined)

    const intrevalRef = useRef<ReturnType<typeof setInterval> | null>(null)


    const startRecording = async () => {
        const stream = await getMicroPhone()

        setStream(stream)

        if (stream) {
            const context = new AudioContext({ sampleRate: 16000, latencyHint: 'interactive' });
            console.log(context)
            const mediaStreamSource = context.createMediaStreamSource(stream);
            recorder.current = new Recorder(mediaStreamSource, {bufferLen: 1024, sampleRate: 16000});

            recorder.current.record()

            intrevalRef.current = setInterval(function () {
                recorder.current.exportWAV(function (blob) {
                    recorder.current.clear();
                    console.log(blob.size)

                    onDataAvailable(blob)
                });
            }, 1000);
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
        intrevalRef.current && clearInterval(intrevalRef.current)
        stream && stream.getTracks().forEach(track => track.stop());
        setStream(undefined);
        recorder.current.stop()
        recorder.current = undefined
    }


    return <>
        <button onClick={toggleMic}>
            {stream ? 'Stop' : 'Record'}
        </button>
        {stream ? <span>Recording...</span> : null}
    </>

}

export default VoiceRecorder