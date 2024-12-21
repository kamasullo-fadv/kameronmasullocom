const SpotifyPlayer = () => {
    return (
        <div className={'spotify-player'}>
            <iframe
                className={'spotify-player-iframe'}
                src="https://open.spotify.com/embed/playlist/2rWN3A0SmxxKOUhguoczxi?utm_source=generator&theme=0"
                width="100%"
                height="352"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
            />
        </div>
    );
}

export default SpotifyPlayer;