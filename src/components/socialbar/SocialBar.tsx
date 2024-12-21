import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faApple, faBandcamp, faFacebook, faSpotify} from '@fortawesome/free-brands-svg-icons';
import './socialBar.css';
import {Link} from "react-router-dom";

const SocialBar = () => {

    const renderButton = (url: string, icon: any) => (
        <Link
            to={url}
            target={'_blank'}
            className={'social-button expand-on-hover'}
        >
            <FontAwesomeIcon icon={icon} size={'2x'}/>
        </Link>
    )

    return (
        <div className={'social-bar'}>
            {renderButton('https://open.spotify.com/artist/5G946pHaGg1bWL8UjiZPdB?si=b8SbW0eBTtCo-kfQU87_Vg', faSpotify)}
            {renderButton('https://kameronmasullo.bandcamp.com', faBandcamp)}
            {renderButton('https://music.apple.com/us/artist/kameron-masullo/1534444140', faApple)}
            {renderButton('https://www.facebook.com/KameronMasullo', faFacebook)}
            {/*{renderButton('', faInstagram)}*/}
        </div>
    );
}

export default SocialBar;