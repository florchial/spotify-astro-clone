import { create } from "zustand";

export const usePlayerStore = create((set) => ({
    isPlaying: false,
    currentState: { playlist: null, song: null },
    setIsPlaying: (isPlaying) => set({ isPlaying }),
    setCurrentState: (state) => set({ currentState: state }),
    }))
