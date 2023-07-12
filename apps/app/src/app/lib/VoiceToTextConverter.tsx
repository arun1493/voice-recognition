import React, { useEffect, useRef, useState } from "react";

const getRecorder = async () => {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
        
        const recorder = new MediaRecorder(stream)

        recorder.onstart = () => {
            console.log('start')
            console.log(stream)
        }

        recorder.ondataavailable = (event) => {
            console.log(event)
            console.log("ondataavailable!")
        }

        recorder.onstop = () => {
            const tracks = stream.getTracks();
            tracks.forEach(track => {
                track.stop()
                console.log('stopped')
            })
        }

        return recorder
    }
    catch (e) {
        console.error(e)
    }
}

const VoiceToTextConverter = () => {

    const requestDataId = useRef<ReturnType<typeof setInterval> | null>(null)

    const recorder = useRef<MediaRecorder | undefined>(undefined)

    const handleRecord = async () => {
        recorder.current = await getRecorder()
        if (!recorder.current) {
            console.error('Recorder not available')
            return
        }
        recorder.current.start()
        requestDataId.current = setInterval(() => {
            recorder.current?.requestData()
        }, 100)
    }

    const handleStop = () => {
        requestDataId.current && clearInterval(requestDataId.current)
        recorder.current?.stop()
    }

    return <>
        <button onClick={handleRecord}> Record </button>
        <button onClick={handleStop}> Stop </button>
    </>

}

export default VoiceToTextConverter