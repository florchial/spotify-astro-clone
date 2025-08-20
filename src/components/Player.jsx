import { useRef, useEffect } from 'react'
import { usePlayerStore } from "@/store/playerStore"
import { SongTitle } from './SongTitle'
import { VolumeControl } from './VolumeControl'
export const Pause = () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="#000000" className="icon icon-tabler icons-tabler-filled icon-tabler-player-pause"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z" /><path d="M17 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z" /></svg>)
export const Play = () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="#000000" className="icon icon-tabler icons-tabler-filled icon-tabler-player-play"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" /></svg>)


export function Player() {
    const { isPlaying, setIsPlaying, currentPlaylist, volume} = usePlayerStore(state => state)
    const audioRef = useRef(null)

    useEffect(() => {
        if (isPlaying) {
            const { song } = currentPlaylist
            if (!song) return
            audioRef.current.src = `/music/${song?.albumId}/${song?.id}.mp3`
            audioRef.current.volume = volume / 100
            audioRef.current.play()
        } else {
            audioRef.current.pause()
        }
    }, [currentPlaylist, isPlaying]);

    useEffect(() => {
        audioRef.current.volume = volume / 100
    }, [volume]);

    const togglePlay = () => {
        const { song } = currentPlaylist
        if (!song) return
        setIsPlaying(!isPlaying)
    };

    return (
        <div className="flex flex-row px-4 w-full z-10">
            <SongTitle />
            <div className="grid place-content-center flex-1">
                <button className="rounded-full p-2 bg-white" onClick={togglePlay}>
                    {isPlaying ? <Pause /> : <Play />}
                </button>
            </div>
            <VolumeControl />
            <audio ref={audioRef} />
        </div>
    )
}