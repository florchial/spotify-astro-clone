import { create } from "zustand";

export const usePlayerStore = create((set) => ({
    isPlaying: false,
    currentState: { playlist: null, songs: [], song: null },
    volume: 50, 
    setIsPlaying: (isPlaying) => set({ isPlaying }),
    setCurrentState: (currentState) => set({ currentState: currentState }),
    setVolume: (volume) => set({volume: volume}),
}))
