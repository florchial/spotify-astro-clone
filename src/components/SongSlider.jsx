import { use, useEffect, useState } from "react";
import { usePlayerStore } from "@/store/playerStore"
import { Slider } from './Slider'

export function SongSlider({ audio }) {
    const { song } = usePlayerStore(state => state.currentPlaylist);
    const [currentTime, setCurrentTime] = useState(0);

    useEffect(() => {
        audio.current.addEventListener('timeupdate', updateTime)
        return () => {
            audio.current.removeEventListener('timeupdate', updateTime)
        }
    })

    useEffect(() => {
        setCurrentTime(0)
    }, [song]);

    const updateTime = () => {
        if (audio.current) {
            setCurrentTime(audio.current.currentTime);
        }
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    return (
        <div className="flex justify-between gap-5 items-center">
            <div className="w-8 justify-center">
                <span className="opacity-50">{audio.current ? formatTime(audio.current.currentTime) : "0:00"}</span>
            </div>
            <Slider
                max={audio.current? audio.current.duration : 0}
                min={0}
                value={[currentTime]}
                className="w-[500px]"
                onValueChange={(v) => {
                    const newTime = v[0];
                    setCurrentTime(newTime);
                    if (audio.current) {
                        audio.current.currentTime = newTime;
                    }
                }}
            />
            <div className="w-8 justify-center">
                <span className="opacity-50 w-8 justify-center">{song ? song.duration : "0:00"}</span>
            </div>
        </div>
    )

}