import { create } from "zustand";

export const usePlayerStore = create((set) => ({
    isPlaying: false,
    currentPlaylist: { playlist: null, songs: [], song: null },
    volume: 50, 
    previousVolume: 50,
    setIsPlaying: (isPlaying) => set({ isPlaying }),
    setCurrentPlaylist: (currentPlaylist) => set({ currentPlaylist: currentPlaylist }),
    setVolume: (volume) => set({volume: volume}),
    setPreviousVolume: (previousVolume) => set({ previousVolume: previousVolume }),
}))
