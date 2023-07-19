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
    pcmWorker.port.onmessage = event => {
        output(event.data)
    }
    pcmWorker.port.start()
}

const SpeechToText: React.FC = () => {

    const [connection, setConnection] = useState<WebSocket>()
    const [recognitionHistory, setRecognitionHistory] = useState<string[]>([])


    const speechRecognized = (data: string) => {
        if (data) {
            setRecognitionHistory(old => [...old, data])
        }
    }

    const connect = () => {
        connection?.close()
        const conn = new WebSocket("ws://localhost:8080/")
        conn.onmessage = event => speechRecognized(event.data)
        setConnection(conn)
    }

    const disconnect = () => {
        setTimeout(() => {
            connection?.close()
            setConnection(undefined)
        }, 3000)
    }

    useEffect(() => {
        if (connection) {
            const audioContext = new window.AudioContext({ sampleRate })
            const stream = Promise.all([loadPCMWorker(audioContext), getMediaStream()])
                .then(([_, stream]) => {
                    captureAudio(audioContext, stream, data => connection.send(data))
                    return stream
                })

            return () => {
                stream.then(stream => stream.getTracks().forEach(track => track.stop()))
                audioContext.close()
            }
        }
    }, [connection])


    return (
        <>
            <div>
                <button onClick={connect}>Start</button>
                <button onClick={disconnect}>Stop</button>
            </div>
            <div>
                {recognitionHistory.map((tx, idx) => <h2 key={idx}>{tx}</h2>)}
            </div>
        </>
    )
}

export default SpeechToText
