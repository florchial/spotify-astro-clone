import { colors } from "./colors";

export interface Playlist {
  id: string;
  albumId: number;
  title: string;
  color: (typeof colors)[keyof typeof colors];
  cover: string;
  artists: string[];
}

export const playlists: Playlist[] = [
      {
        id: "pl1",
        albumId: 1,
        title: "Chill Evening",
        color: colors.orange,
        cover:
          "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=80",
        artists: ["The Waves", "Sunset Riders"],
      },
      {
        id: "pl2",
        albumId: 2,
        title: "City Vibes",
        color: colors.pink,
        cover:
          "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=500&q=80",
        artists: ["Synth Pulse", "Blush Tones"],
      },
      {
        id: "pl3",
        albumId: 3,
        title: "Ocean Sounds",
        color: colors.blue,
        cover:
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80",
        artists: ["Blue Horizon", "Ocean Eyes"],
      },
      {
        id: "pl4",
        albumId: 4,
        title: "Nature Walk",
        color: colors.green,
        cover:
          "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=500&q=80",
        artists: ["Green Leaf", "Fresh Start"],
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
