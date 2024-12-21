import './cardGrid.css';
import {ReactNode} from "react";

interface IProps {
    children: ReactNode
}

const CardGridCard = ({children}: IProps) => {
    return (
        <div className={'grid-card'}>
            {children}
        </div>
    );
}

export default CardGridCard;