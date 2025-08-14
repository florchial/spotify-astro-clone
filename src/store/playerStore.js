import { create } from "zustand";

export const usePlayerStore = create((set) => ({
    isPlaying: false,
    currentState: { playlist: null, songs: [], song: null },
    setIsPlaying: (isPlaying) => set({ isPlaying }),
    setCurrentState: (currentState) => set({ currentState: currentState }),
}))
