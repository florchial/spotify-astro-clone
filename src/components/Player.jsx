import { useRef, useEffect, useState } from 'react'
import { usePlayerStore } from "@/store/playerStore"
import { SongTitle } from './SongTitle'
import { VolumeControl } from './VolumeControl'
import { SongSlider } from './SongSlider'
import { amountOfSongs } from '@/domain/playlists'
export const Pause = () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="#000000" className="icon icon-tabler icons-tabler-filled icon-tabler-player-pause"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z" /><path d="M17 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z" /></svg>)
export const Play = () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="#000000" className="icon icon-tabler icons-tabler-filled icon-tabler-player-play"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" /></svg>)
export const Next = () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-player-skip-forward"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 5v14a1 1 0 0 0 1.504 .864l12 -7a1 1 0 0 0 0 -1.728l-12 -7a1 1 0 0 0 -1.504 .864z" /><path d="M20 4a1 1 0 0 1 .993 .883l.007 .117v14a1 1 0 0 1 -1.993 .117l-.007 -.117v-14a1 1 0 0 1 1 -1z" /></svg>)
export const Previous = () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-player-skip-back"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M19.496 4.136l-12 7a1 1 0 0 0 0 1.728l12 7a1 1 0 0 0 1.504 -.864v-14a1 1 0 0 0 -1.504 -.864z" /><path d="M4 4a1 1 0 0 1 .993 .883l.007 .117v14a1 1 0 0 1 -1.993 .117l-.007 -.117v-14a1 1 0 0 1 1 -1z" /></svg>)
export const Shuffle = () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-arrows-shuffle"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 4l3 3l-3 3" /><path d="M18 20l3 -3l-3 -3" /><path d="M3 7h3a5 5 0 0 1 5 5a5 5 0 0 0 5 5h5" /><path d="M21 7h-5a4.978 4.978 0 0 0 -3 1m-4 8a4.984 4.984 0 0 1 -3 1h-3" /></svg>)
export const Repeat = () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-repeat"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 12v-3a3 3 0 0 1 3 -3h13m-3 -3l3 3l-3 3" /><path d="M20 12v3a3 3 0 0 1 -3 3h-13m3 3l-3 -3l3 -3" /></svg>)

export function Player() {
    const { isPlaying, setIsPlaying, currentPlaylist, volume, setCurrentPlaylist } = usePlayerStore(state => state)
    const playingSong = currentPlaylist?.song
    const audioRef = useRef(null)
    const isNotPlayable = !currentPlaylist || !currentPlaylist.song || currentPlaylist.songs.length === 0
    const [shuffle, setShuffle] = useState(false);
    const [repeat, setRepeat] = useState(false);

    useEffect(() => {
        if (!isPlaying) {
            pauseAudio()
        } else {
            playAudio()
        }
    }, [isPlaying]);

    useEffect(() => {
        if (!playingSong) {
            cleanPlayer()
        } else {
            playSong(playingSong)
        }
    }, [playingSong]);

    useEffect(() => {
        audioRef.current.volume = volume / 100
    }, [volume]);

    useEffect(() => {
        audioRef.current.addEventListener('ended', playNextSong)
        return () => {
            audioRef.current.removeEventListener('ended', playNextSong)
        }
    })

    const togglePlay = () => {
        if (!playingSong) return
        setIsPlaying(!isPlaying)
    }

    const cleanPlayer = () => {
        setIsPlaying(false)
        pauseAudio()
    }

    const pauseAudio = () => {
        if (audioRef.current) {
            audioRef.current.pause()
        }
    }

    const loadSong = (song) => {
        audioRef.current.src = `/music/${song.albumId}/${song.id}.mp3`
        audioRef.current.load()
    }

    const playAudio = () => {
        if (audioRef.current) {
            audioRef.current.play()
        }
    }

    const playSong = (song) => {
        loadSong(song)
        setIsPlaying(true)
        playAudio()
    }

    const findNextSong = (offset) => {
        const { songs } = currentPlaylist
        const currentIndex = songs.findIndex(s => s.id === currentPlaylist.song.id)
        const nextIndex = (currentIndex + offset) % songs.length
        return nextIndex < 0 ? null : songs[nextIndex]
    }

    const changeSong = (offset) => {
        if (isNotPlayable) return
        offset = shuffle ?  shuffleOfsset(currentPlaylist.playlist) : offset
        const newSong = findNextSong(offset)
        setCurrentPlaylist({ ...currentPlaylist, song: newSong })
    }

    const shuffleOfsset = (playlist) => {
        let offset = 0
        while (offset === 0) {
            offset = Math.floor(Math.random() * amountOfSongs(playlist))
        }
        return offset
    }

    const nextSong = () => {
        playNextSong(1)
    }

    const previousSong = () => {
        playNextSong(-1)
    }

    const clickShuffle = () => {
        setShuffle(!shuffle)
    }

    const clickRepeat = () => {
        setRepeat(!repeat)
    }

    const playNextSong = (offset = 1) => {
        if (repeat) {
            repeatSong()
        } else {
            changeSong(offset)
        }
    }

    const repeatSong = () => { playSong(playingSong) }

    return (
        <div className="flex flex-row px-4 w-full z-10 gap-2 mt-1">
            <SongTitle />
            <div className="grid place-content-center flex-1 gap-2">
                <div className='flex justify-center w-full gap-4'>
                    <button className={shuffle ? "p-2 text-green-500" : "p-2 opacity-50 hover:opacity-100"} onClick={clickShuffle}>
                        <Shuffle />
                    </button>
                    <button className="p-2 opacity-50 hover:opacity-100" onClick={previousSong}>
                        <Previous />
                    </button>
                    <button className="rounded-full p-2 bg-white" onClick={togglePlay}>
                        {isPlaying ? <Pause /> : <Play />}
                    </button>
                    <button className="p-2 opacity-50 hover:opacity-100" onClick={nextSong}>
                        <Next />
                    </button>
                    <button className={repeat ? "p-2 text-green-500" : "p-2 opacity-50 hover:opacity-100"} onClick={clickRepeat}>
                        <Repeat />
                    </button>
                </div>
                <div className="flex justify-between items-center w-ful">
                    <SongSlider audio={audioRef} />
                </div>
            </div>
            <VolumeControl />
            <audio ref={audioRef} />
        </div>
    )
}