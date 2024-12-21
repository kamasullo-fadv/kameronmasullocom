import SocialBar from "../socialbar/SocialBar.tsx";
import LogoVertical from '../../../public/images/logo-vertical.png';
import LogoHorizontal from '../../../public/images/logo-horizontal.png';
import './topBar.css';

const TopBar = () => {
    return (
        <div className={'top-bar component-parent'}>
            {!LogoVertical && !LogoHorizontal
                ? <h1>Kameron Masullo</h1>
                : <>
                    <img className={'top-bar-logo logo-horizontal'} src={LogoHorizontal} alt={'Kameron Masullo'}/>
                    <img className={'top-bar-logo logo-vertical'} src={LogoVertical} alt={'Kameron Masullo'}/>
                </>
            }
            <h5>Musician • Composer • Guitarist • Mix Engineer</h5>
            <SocialBar/>
        </div>
    )
};

export default TopBar;