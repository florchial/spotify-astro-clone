import { usePlayerStore } from "@/store/playerStore"
import { Slider } from './Slider'

const MediumVolumeIcon = () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" color="#9f9fa9" className="icon icon-tabler icons-tabler-outline icon-tabler-volume-2"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M15 8a5 5 0 0 1 0 8" /><path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5" /></svg>)
const HighVolumeIcon = () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" color="#9f9fa9" className="icon icon-tabler icons-tabler-outline icon-tabler-volume" ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M15 8a5 5 0 0 1 0 8" /><path d="M17.7 5a9 9 0 0 1 0 14" /><path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5" /></svg>)
const MutedVolumeIcon = () => <svg width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round" color="#9f9fa9" className="icon icon-tabler icons-tabler-outline icon-tabler-volume-off"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 8a5 5 0 0 1 1.912 4.934m-1.377 2.602a5 5 0 0 1 -.535 .464" /><path d="M17.7 5a9 9 0 0 1 2.362 11.086m-1.676 2.299a9 9 0 0 1 -.686 .615" /><path d="M9.069 5.054l.431 -.554a.8 .8 0 0 1 1.5 .5v2m0 4v8a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l1.294 -1.664" /><path d="M3 3l18 18" /></svg>

export function VolumeControl() {
    const { volume, setVolume, previousVolume, setPreviousVolume } = usePlayerStore(state => state)

    const changeVolume = (value) => {
        const newVolume = value[0]
        setVolume(newVolume)
        setPreviousVolume(newVolume)
    }

    const mute = () => {
        if (volume > 0) {
            setPreviousVolume(volume)
            setVolume(0)
        } else {
            setVolume(previousVolume)
        }
    }

    return (
        <div className="flex items-center gap-2">
            <div onClick={() => mute()}>
                {volume === 0? <MutedVolumeIcon/> :
                volume <= 60 ? <MediumVolumeIcon /> :
                <HighVolumeIcon />}
            </div>

            <div>
                <Slider
                    defaultValue={[volume]}
                    max={100}
                    min={0}
                    className="w-[120px]"
                    onValueChange={changeVolume}
                />
            </div>
        </div>
    )
}