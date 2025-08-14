import { Play, Pause } from "./Player"
import { usePlayerStore } from "@/store/playerStore"

export function CardPlayButton(id) {
    const { isPlaying, setIsPlaying, currentState, setCurrentState } = usePlayerStore(state => state);

    const togglePlay = () => {
        setCurrentState({playlist: {id: id}, song: null});
        setIsPlaying(!isPlaying);
    };

    const isCurrentPlaylistPlaying  = isPlaying && currentState?.playlist?.id === id;

    return (
        <button className="card-play-button rounded-full bg-green-500 p-3" onClick={togglePlay}>
            {isCurrentPlaylistPlaying ? <Pause /> : <Play />}
        </button>)
}