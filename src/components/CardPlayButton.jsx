import { Play, Pause } from "./Player"
import { usePlayerStore } from "@/store/playerStore"

export function CardPlayButton({id}) {

    const { isPlaying, setIsPlaying, currentState, setCurrentState } = usePlayerStore(state => state)
    
    const isCurrentPlaylistPlaying = isPlaying && currentState?.playlist?.id === id

    const pause = () => setIsPlaying(false)

    //TODO: Implement play function to set current song and playlist
    // For now, just set isPlaying to true
    const play = (playlist) => {setIsPlaying(true)}

    const togglePlay = () => {
        if (isCurrentPlaylistPlaying) {
            pause()
            return
        }
        
        fetch(`/api/playlists/${id}.json`)
            .then((res) => res.json())
            .then((data) => {
                const { playlist, songs } = data
                play()
                setCurrentState({ playlist, songs: songs, song: songs[0] })
            })
    }

    return (
        <button className="card-play-button rounded-full bg-green-500 p-3" onClick={togglePlay}>
            {isCurrentPlaylistPlaying ? <Pause /> : <Play />}
        </button>)
}