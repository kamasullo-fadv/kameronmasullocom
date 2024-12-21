import {albumsList} from "./albumsList.ts";
import './albums.css';
import CardGrid from "../common/grid-card/CardGrid.tsx";
import AlbumCard from "./AlbumCard.tsx";

const Albums = () => {

    return (
        <div className={'albums component-parent'}>
            <div className={'component-header'}>
                <h2>Albums, EPs and Singles</h2>
            </div>
            <CardGrid>
                {albumsList.map(a => (
                    <AlbumCard
                        key={`album-${a.id}`}
                        album={a}
                    />
                ))}
            </CardGrid>
        </div>
    );
}

export default Albums;