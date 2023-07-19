import React, { useEffect, useState } from "react";

const sampleRate = 16000

const loadPCMWorker = (audioContext: AudioContext) =>
    audioContext.audioWorklet.addModule('/pcmWorker.js')

const getMediaStream = () =>
    navigator.mediaDevices.getUserMedia({
        audio: {
            deviceId: "default",
            sampleRate: sampleRate,
            sampleSize: 16,
            channelCount: 1
        },
        video: false
    })

const captureAudio = (audioContext: AudioContext, stream: MediaStream, output: (data: any) => void) => {
    const source: MediaStreamAudioSourceNode = audioContext.createMediaStreamSource(stream)
    const pcmWorker = new AudioWorkletNode(audioContext, 'pcm-worker', { outputChannelCount: [1] })
    source.connect(pcmWorker)
    pcmWorker.port.onmessage = event =>  { 
        console.log(event.data)
        output(event.data) 
    }
    pcmWorker.port.start()
}

interface WordRecognized {
    final: boolean,
    text: string

}

const SpeechToText: React.FC = () => {

    const [connection, setConnection] = useState<WebSocket>()
    const [currentRecognition, setCurrentRecognition] = useState<string>()
    const [recognitionHistory, setRecognitionHistory] = useState<string[]>([])


    const speechRecognized = (data: WordRecognized) => {
        if (data.final) {
            setCurrentRecognition("...")
            setRecognitionHistory(old => [data.text, ...old])
        } else setCurrentRecognition(data.text + "...")
    }

    const connect = () => {
        connection?.close()
        const conn = new WebSocket("ws://localhost:8080/")
        conn.onmessage = console.log
        // conn.onmessage = event => speechRecognized(JSON.parse(event.data))
        setConnection(conn)
    }

    const disconnect = () => {
        connection?.close()
        setConnection(undefined)
    }

    useEffect(() => {
        if (connection) {
            const audioContext = new window.AudioContext({ sampleRate })
            const stream = Promise.all([loadPCMWorker(audioContext), getMediaStream()])
                .then(([_, stream]) => {
                    captureAudio(audioContext, stream, data => connection.send(data))
                    return stream
                })

            console.log(stream)
            return () => {
                stream.then(stream => stream.getTracks().forEach(track => track.stop()))
                audioContext.close()
            }
        }
    }, [connection])


    return (
        <>
            <div>
                <div>
                    <button onClick={connect}>Start</button>
                    <button onClick={disconnect}>Stop</button>
                </div>
            </div>
            <div>
                <h2>{currentRecognition}</h2>
                {recognitionHistory.map((tx, idx) => <h2 key={idx}>{tx}</h2>)}
            </div>
        </>
    )
}

export default SpeechToText
