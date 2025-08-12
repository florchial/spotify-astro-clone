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
        color: colors.indigo,
        cover:
          "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=500&q=80",
        artists: ["The Waves", "Sunset Riders"],
      },
      {
        id: "pl2",
        albums: [3, 16],
        title: "City Vibes",
        color: colors.coral,
        cover:
          "https://images.pexels.com/photos/5198580/pexels-photo-5198580.jpeg",
        artists: ["Blush Tones", "Ocean Eyes"],
      },
      {
        id: "pl3",
        albums: [21, 16],
        title: "Summer Sounds",
        color: colors.rose,
        cover:
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80",
        artists: ["Nightfall", "Ocean Eyes"],
      },
      {
        id: "pl4",
        albums: [1, 26],
        title: "Nature Walk",
        color: colors.emerald,
        cover:
          "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=500&q=80",
        artists: ["Daydream", "The Waves"],
      },
      {
        id: "pl5",
        albums: [1, 26, 16],
        title: "Moody Vibes",
        color: colors.green,
        cover:
          "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=500&q=80",
        artists: ["Ocean Eyes","Daydream", "The Waves"],
      },
      {
        id: "pl6",
        albums: [16, 26],
        title: "Study Beats",
        color: colors.yellow,
        cover:
          "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
        artists: ["Ocean Eyes","Daydream"],
      },
      {
        id: "pl7",
        albums: [3, 2],
        title: "Morning Light",
        color: colors.orange,
        cover:
          "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=500&q=80",
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