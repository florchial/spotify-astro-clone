import { usePlayerStore } from "@/store/playerStore"

export function SongTitle() {
    const { currentPlaylist } = usePlayerStore(state => state)
    const { song } = currentPlaylist

    return (
        song ?
            <div className="flex items-center gap-4 relative overflow-hidden">
                <picture className="w-16 h-16 bg-zinc-800 rounded-lg shadow-lg">
                    <img className="rounded-lg object-cover w-full h-full" src={song.coverUrl} alt={song.title} />
                </picture>
                <div>
                    <h3 className="block">
                        {song.title}
                    </h3>
                    <p className="text-sm text-zinc-400">
                        {song.artist}
                    </p>
                </div>

            </div>
            : <div className="flex items-center gap-4 relative overflow-hidden">
                <picture className="w-16 h-16 bg-zinc-800 rounded-md shadow-lg overflow-hidden">
                    <img src="/images/placeholder-zinc.svg" alt="No song playing" />
                </picture>
                <h3 className="block">
                    No song playing
                </h3>
            </div>
    )

}