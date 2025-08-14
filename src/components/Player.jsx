import { useState, useRef, useEffect } from 'react';
import { usePlayerStore } from "@/store/playerStore"
export const Pause = () => (<svg width="24"  height="24"  viewBox="0 0 24 24"  fill="#000000"  className="icon icon-tabler icons-tabler-filled icon-tabler-player-pause"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z" /><path d="M17 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z" /></svg>)
export const Play = () => (<svg width="24"  height="24"  viewBox="0 0 24 24"  fill="#000000"  className="icon icon-tabler icons-tabler-filled icon-tabler-player-play"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" /></svg>)


export function Player() {
    const { isPlaying, setIsPlaying } = usePlayerStore(state => state);
    const audioRef = useRef(null);
    const [currentSong, setCurrentSong] = useState(null);

    useEffect(() => {
        audioRef.current.src = `/music/1/01.mp3`;
    }, []); 

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="flex flex-row justify-between px-4 w-full z-10">
            <div>
                Song Title
            </div>
            <div className="grid place-content-center flex-1">
                <button className="rounded-full p-2 bg-white" onClick={togglePlay}>
                    {isPlaying ? <Pause /> : <Play />}
                </button>
            </div>
            <div>
                Volume
            </div>
            <audio ref={audioRef}/>
        </div>
    )
}