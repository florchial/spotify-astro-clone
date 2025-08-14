import { playlistBy, songsBy } from "@/domain/playlists";

export async function GET({ params }) {
    
    const playlist = playlistBy(params.id);
    
    return new Response(JSON.stringify({ playlist, songs: songsBy(playlist) }), {
        headers: {
            "Content-Type": "application/json"
        }
    })
}