import { Play, Pause } from "./Player"
import { usePlayerStore } from "@/store/playerStore"

export function CardPlayButton({id}) {

    const { isPlaying, setIsPlaying, currentPlaylist, setCurrentPlaylist } = usePlayerStore(state => state)
    
    const isCurrentPlaylistPlaying = isPlaying && currentPlaylist?.playlist?.id === id

    const pause = () => setIsPlaying(false)

    const play = () => {setIsPlaying(true)}

    const togglePlay = () => {
        if (isCurrentPlaylistPlaying) {
            pause()
            return
        }
        
        fetch(`/api/playlists/${id}.json`)
            .then((res) => res.json())
            .then((data) => {
                const { playlist, songs } = data
                setCurrentPlaylist({ playlist: playlist, songs: songs, song: songs[0] })
                play()
            })
    }

    return (
        <button className="card-play-button rounded-full bg-green-500 p-3" onClick={togglePlay}>
            {isCurrentPlaylistPlaying ? <Pause /> : <Play />}
        </button>)
}