import { useRef, useEffect } from 'react'
import { usePlayerStore } from "@/store/playerStore"
import { SongTitle } from './SongTitle'
import { Slider } from './Slider'
export const Pause = () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="#000000" className="icon icon-tabler icons-tabler-filled icon-tabler-player-pause"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z" /><path d="M17 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z" /></svg>)
export const Play = () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="#000000" className="icon icon-tabler icons-tabler-filled icon-tabler-player-play"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" /></svg>)


export function Player() {
    const { isPlaying, setIsPlaying, currentState, volume, setVolume } = usePlayerStore(state => state)
    const audioRef = useRef(null)

    useEffect(() => {
        if (isPlaying) {
            const { song } = currentState
            if (!song) return
            audioRef.current.src = `/music/${song?.albumId}/${song?.id}.mp3`
            audioRef.current.volume = volume / 100
            audioRef.current.play()
        } else {
            audioRef.current.pause()
        }
    }, [currentState, isPlaying]);

    const togglePlay = () => {
        const { song } = currentState
        if (!song) return
        setIsPlaying(!isPlaying)
    };

    const changeVolume = (value) => {
        const newVolume = value[0]
        audioRef.current.volume = newVolume / 100
        setVolume(newVolume)
    }

    return (
        <div className="flex flex-row px-4 w-full z-10">
            <div>
                <SongTitle />
            </div>
            <div className="grid place-content-center flex-1">
                <button className="rounded-full p-2 bg-white" onClick={togglePlay}>
                    {isPlaying ? <Pause /> : <Play />}
                </button>
            </div>
            <div className="grid place-content-center">
                <Slider
                    defaultValue={[volume]}
                    max={100}
                    min={0}
                    className="w-[120px]"
                    onValueChange={changeVolume}
                />
            </div>
            <audio ref={audioRef} />

        </div>
    )
}