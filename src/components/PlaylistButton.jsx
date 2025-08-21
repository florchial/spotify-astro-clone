import { Play, Pause } from "./Player"
import { usePlayerStore } from "@/store/playerStore"

export function PlaylistButton({id}) {

    const { isPlaying, setIsPlaying, currentPlaylist, setCurrentPlaylist } = usePlayerStore(state => state)
    
    const isCurrentPlaylistPlaying = currentPlaylist?.playlist?.id === id && currentPlaylist.song

    const pause = () => setIsPlaying(false)

    const play = () => setIsPlaying(true)

    const loadPlaylist = (playlistId) => {
        fetch(`/api/playlists/${id}.json`)
            .then((res) => res.json())
            .then((data) => {
                const { playlist, songs } = data
                setCurrentPlaylist({ playlist: playlist, songs: songs, song: songs[0] })
            })
    }

    const togglePlay = () => {
        if (isCurrentPlaylistPlaying && isPlaying) {
            pause()
            return
        }
        if (isCurrentPlaylistPlaying && !isPlaying) {
            play()
            return
        }
        loadPlaylist(id)
    }

    return (
        <button className="card-play-button rounded-full bg-green-500 p-3" onClick={togglePlay}>
            {isCurrentPlaylistPlaying && isPlaying? <Pause /> : <Play />}
        </button>)
}