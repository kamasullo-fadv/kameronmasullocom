import CardGridCard from "../common/grid-card/CardGridCard.tsx";
import {Link} from "react-router-dom";
import {IAlbum} from "./albumsConfig.ts";
import './albums.css';

interface IProps {
    album: IAlbum
}

const AlbumCard = ({album}: IProps) => {

    const {link, img, title, description} = album;

    return (
        <CardGridCard>
            <Link className={'no-dec-link'} to={link ?? ''} target="_blank" rel="noopener noreferrer">
                <div className={'album-card expand-on-hover'}>
                    <img src={img} alt={'album-card-image'} className={'album-card-image'}/>
                    <div className={'album-card-text-container'}>
                        <h5>{title}</h5>
                        <p className={'album-card-body'}>
                            {description}
                        </p>
                    </div>
                </div>
            </Link>
        </CardGridCard>
    );
}

export default AlbumCard;