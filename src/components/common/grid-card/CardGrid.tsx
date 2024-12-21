import {ReactNode} from "react";
import './cardGrid.css';

interface IProps {
    children: ReactNode
}

const CardGrid = ({children}: IProps) => {
    return (
        <div className={'card-grid'}>
            {children}
        </div>
    );
}

export default CardGrid;