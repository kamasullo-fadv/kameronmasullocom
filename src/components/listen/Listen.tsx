import SpotifyPlayer from "./SpotifyPlayer.tsx";
import './listen.css';

const Listen = () => {
    return (
        <div className={'listen component-parent'}>
            <h2>Listen</h2>
            <SpotifyPlayer/>
        </div>
    )
}

export default Listen;