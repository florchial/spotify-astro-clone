import { colors } from "@/domain/colors";
import { songs } from "./songs";

export interface Playlist {
  id: string;
  albums: number[];
  title: string;
  color: (typeof colors)[keyof typeof colors];
  cover: string;
  artists: string[];
}

export const playlists: Playlist[] = [
      {
        id: "pl1",
        albums: [1, 2],
        title: "Chill Evening",
        color: colors.orange,
        cover:
          "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=80",
        artists: ["The Waves", "Sunset Riders"],
      },
      {
        id: "pl2",
        albums: [3, 16],
        title: "City Vibes",
        color: colors.pink,
        cover:
          "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=500&q=80",
        artists: ["Blush Tones", "Ocean Eyes"],
      },
      {
        id: "pl3",
        albums: [21, 16],
        title: "Ocean Sounds",
        color: colors.blue,
        cover:
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80",
        artists: ["Nightfall", "Ocean Eyes"],
      },
      {
        id: "pl4",
        albums: [1, 26],
        title: "Nature Walk",
        color: colors.green,
        cover:
          "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=500&q=80",
        artists: ["Daydream", "The Waves"],
      },
      {
        id: "pl5",
        albums: [1, 26, 16],
        title: "Moody Vibes",
        color: colors.blue,
        cover:
          "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=500&q=80",
        artists: ["Ocean Eyes","Daydream", "The Waves"],
      },
      {
        id: "pl6",
        albums: [16, 26],
        title: "Study Beats",
        color: colors.purple,
        cover:
          "https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=500&q=80",
        artists: ["Nightfall", "Daydream"],
      },
      {
        id: "pl7",
        albums: [3, 2],
        title: "Morning Light",
        color: colors.green,
        cover:
          "https://images.unsplash.com/photo-1495567720989-cebdbdd97913?auto=format&fit=crop&w=500&q=80",
        artists: ["Blush Tones", "Sunset Riders"],
      },
    
];

export const morePlaylists = playlists.map((item) => ({
  ...item,
  id: item.id + "_more",
}))

export const sidebarPlaylists = playlists.map((item) => ({
  ...item,
  id: item.id + "_side",
}))

export const allPlaylists = [
  ...playlists,
  ...morePlaylists,
  ...sidebarPlaylists,
]

export const playlistBy = (id: string) => allPlaylists.find((p) => p.id === id);

export const artists = (playlist: Playlist) => playlist.artists.join(", ");

export const songsBy = (playlist: Playlist) =>
  songs.filter((song) => playlist?.albums.includes(song.albumId));

export const amountOfSongs = (playlist: Playlist) => songsBy(playlist).length;

export const duration = (playlist: Playlist): string => {
  const totalSeconds = songsBy(playlist)
    .map(song => {
      const [min, sec] = song.duration.split(":").map(Number);
      return min * 60 + sec;
    })
    .reduce((acc, curr) => acc + curr, 0);

  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);

  return hours > 0
    ? `${hours}h ${minutes}m`
    : `${minutes}m`;
};