import { usePlayerStore } from "@/store/playerStore"
import { useEffect, useState } from "react"
const ClockIcon = () => (<svg width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-clock"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 7v5l3 3" /></svg>)
const PlayingIcon = () => (<svg  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-music"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M13 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M9 17v-13h10v13" /><path d="M9 8h10" /></svg>)

export function SongsTable({id}) {
    const { currentPlaylist } = usePlayerStore(state => state)
    const [songs, setSongs]  = useState([])
    const [selectedSong, setSelectedSong] = useState(null)

    useEffect(() => {
        fetch(`/api/playlists/${id}.json`)
            .then((res) => res.json())
            .then((data) => {
                setSongs(data.songs)
            })
    }, [])

    useEffect(() => {
        setSelectedSong(currentPlaylist.song)
    }, [currentPlaylist.song])

    const isSelected = (song) => {
        return selectedSong? currentPlaylist.playlist?.id === id && selectedSong.id === song.id: false
    } 

    return (
        <table className="table auto text-left min-w-full divide-y-2 divide-zinc-500/20 text-base">
          <thead>
            <tr className="text-gray-400">
              <th className="px-4 py-2">#</th>
              <th className="px-4 py-2">TITLE</th>
              <th className="px-4 py-2">ALBUM</th>
              <th className="px-4 py-2"><ClockIcon/></th>
            </tr>
          </thead>
          <tbody>
            {songs.map((song, index) => (
              <tr className={isSelected(song)? "bg-zinc-500/20":"text-gray-400"} key={song.id}>
              {isSelected(song)? 
                <td className="text-green-500 px-2 py-2"><PlayingIcon/></td> :
                <td className="px-4 py-2">{index + 1}</td>
              }
              <td className="px-4 py-2">
                <div className="flex flex-row gap-5">
                <img src={song.coverUrl} alt={`Cover of ${song.title}`} className="w-12 h-12 object-cover" />
                <div className="flex flex-col justify-between">
                  <span className={isSelected(song)? "text-green-500": "text-white"}>{song.title}</span>
                  <span className="text-gray-400">{song.artist}</span>
                </div>
                </div>
              </td>
              <td className="px-4 py-2">{song.album}</td>
              <td className="px-4 py-2">{song.duration}</td>
              </tr>
            ))
          }
          </tbody>
        </table>
    )
}