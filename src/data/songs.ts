export type Song = {
  id: number;
  title: string;
  artist: string;
  album: string;
  albumId: number;
  coverUrl: string;
  duration: string;
  color: string;
};

export const songs: Song[] = [
  {
    id: 1,
    title: "Sunset Drive",
    artist: "The Waves",
    album: "Evening Glow",
    albumId: 1,
    coverUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=80",
    duration: "3:45",
    color: "orange"
  },
  {
    id: 2,
    title: "Neon Nights",
    artist: "Synth Pulse",
    album: "City Lights",
    albumId: 2,
    coverUrl: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=500&q=80",
    duration: "4:12",
    color: "pink"
  },
  {
    id: 3,
    title: "Ocean Breeze",
    artist: "Blue Horizon",
    album: "Waves",
    albumId: 3,
    coverUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80",
    duration: "5:03",
    color: "blue"
  },
  {
    id: 4,
    title: "Forest Whisper",
    artist: "Green Leaf",
    album: "Nature Sounds",
    albumId: 4,
    coverUrl: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=500&q=80",
    duration: "3:32",
    color: "green"
  },
  {
    id: 5,
    title: "Purple Haze",
    artist: "Mystic Vibes",
    album: "Dreamscape",
    albumId: 5,
    coverUrl: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=500&q=80",
    duration: "4:20",
    color: "purple"
  },
  {
    id: 6,
    title: "Golden Hour",
    artist: "Sunset Riders",
    album: "Light Trails",
    albumId: 6,
    coverUrl: "https://images.unsplash.com/photo-1494783367193-149034c05e8f?auto=format&fit=crop&w=500&q=80",
    duration: "3:50",
    color: "yellow"
  },
  {
    id: 7,
    title: "Crimson Sky",
    artist: "Red Horizon",
    album: "Firelight",
    albumId: 7,
    coverUrl: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=500&q=80",
    duration: "4:10",
    color: "red"
  },
  {
    id: 8,
    title: "Teal Dreams",
    artist: "Aqua Beats",
    album: "Underwater",
    albumId: 8,
    coverUrl: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=500&q=80",
    duration: "3:56",
    color: "teal"
  },
  {
    id: 9,
    title: "Indigo Night",
    artist: "Blue Moon",
    album: "Midnight Tunes",
    albumId: 9,
    coverUrl: "https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=500&q=80",
    duration: "4:25",
    color: "indigo"
  },
  {
    id: 10,
    title: "Emerald Forest",
    artist: "Nature Calls",
    album: "Earthbound",
    albumId: 10,
    coverUrl: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=500&q=80",
    duration: "5:00",
    color: "emerald"
  },
  {
    id: 11,
    title: "Rose Glow",
    artist: "Blush Tones",
    album: "Soft Lights",
    albumId: 11,
    coverUrl: "https://images.unsplash.com/photo-1495567720989-cebdbdd97913?auto=format&fit=crop&w=500&q=80",
    duration: "3:44",
    color: "rose"
  },
  {
    id: 12,
    title: "Gray Skies",
    artist: "Monochrome",
    album: "Shades",
    albumId: 12,
    coverUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=500&q=80",
    duration: "4:18",
    color: "gray"
  },
  {
    id: 13,
    title: "Orange Sunset",
    artist: "Warmth",
    album: "Evenings",
    albumId: 13,
    coverUrl: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=500&q=80",
    duration: "3:37",
    color: "orange"
  },
  {
    id: 14,
    title: "Pink Skies",
    artist: "Soft Breeze",
    album: "Dawn",
    albumId: 14,
    coverUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=80",
    duration: "4:05",
    color: "pink"
  },
  {
    id: 15,
    title: "Yellow Fields",
    artist: "Sunflowers",
    album: "Golden Days",
    albumId: 15,
    coverUrl: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&w=500&q=80",
    duration: "4:22",
    color: "yellow"
  },
  {
    id: 16,
    title: "Blue Horizon",
    artist: "Ocean Eyes",
    album: "Deep Blue",
    albumId: 16,
    coverUrl: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=500&q=80",
    duration: "5:12",
    color: "blue"
  },
  {
    id: 17,
    title: "Purple Rain",
    artist: "Storm",
    album: "Weather",
    albumId: 17,
    coverUrl: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=500&q=80",
    duration: "4:33",
    color: "purple"
  },
  {
    id: 18,
    title: "Green Meadow",
    artist: "Spring",
    album: "Fresh Air",
    albumId: 18,
    coverUrl: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=500&q=80",
    duration: "3:49",
    color: "green"
  },
  {
    id: 19,
    title: "Red Ember",
    artist: "Firelight",
    album: "Burning",
    albumId: 19,
    coverUrl: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=500&q=80",
    duration: "4:44",
    color: "red"
  },
  {
    id: 20,
    title: "Teal Waves",
    artist: "Seafoam",
    album: "Tides",
    albumId: 20,
    coverUrl: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=500&q=80",
    duration: "3:55",
    color: "teal"
  },
  {
    id: 21,
    title: "Indigo Dreams",
    artist: "Nightfall",
    album: "Stars",
    albumId: 21,
    coverUrl: "https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=500&q=80",
    duration: "4:27",
    color: "indigo"
  },
  {
    id: 22,
    title: "Emerald Glow",
    artist: "Jungle Beat",
    album: "Wild",
    albumId: 22,
    coverUrl: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=500&q=80",
    duration: "4:05",
    color: "emerald"
  },
  {
    id: 23,
    title: "Rose Petals",
    artist: "Bloom",
    album: "Love Notes",
    albumId: 23,
    coverUrl: "https://images.unsplash.com/photo-1495567720989-cebdbdd97913?auto=format&fit=crop&w=500&q=80",
    duration: "3:59",
    color: "rose"
  },
  {
    id: 24,
    title: "Gray Mist",
    artist: "Fog",
    album: "Quiet",
    albumId: 24,
    coverUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=500&q=80",
    duration: "4:15",
    color: "gray"
  },
  {
    id: 25,
    title: "Orange Glow",
    artist: "Twilight",
    album: "Sunset",
    albumId: 25,
    coverUrl: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=500&q=80",
    duration: "3:45",
    color: "orange"
  },
  {
    id: 26,
    title: "Pink Clouds",
    artist: "Daydream",
    album: "Soft Skies",
    albumId: 26,
    coverUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=80",
    duration: "4:07",
    color: "pink"
  },
  {
    id: 27,
    title: "Yellow Glow",
    artist: "Sunbeam",
    album: "Bright Days",
    albumId: 27,
    coverUrl: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&w=500&q=80",
    duration: "4:20",
    color: "yellow"
  },
  {
    id: 28,
    title: "Blue Sky",
    artist: "Clear Day",
    album: "Open Air",
    albumId: 28,
    coverUrl: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=500&q=80",
    duration: "5:00",
    color: "blue"
  },
  {
    id: 29,
    title: "Purple Twilight",
    artist: "Evening Mood",
    album: "Nightfall",
    albumId: 29,
    coverUrl: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=500&q=80",
    duration: "4:35",
    color: "purple"
  },
  {
    id: 30,
    title: "Green Horizon",
    artist: "Fresh Start",
    album: "Morning Dew",
    albumId: 30,
    coverUrl: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=500&q=80",
    duration: "3:53",
    color: "green"
  }
];

