import CardGridCard from "../common/grid-card/CardGridCard.tsx";
import {Link} from "react-router-dom";

interface IProps {
    blog: any
}

const BlogCard = ({blog}: IProps) => {

    const {link, content, title} = blog;

    const extractImageFromContent = (content: string): string => {
        const imgMatch = content.match(/<img[^>]+src="([^">]+)"/);
        return imgMatch ? imgMatch[1] : '';
    }

    return (
        <CardGridCard>
            <Link className={'no-dec-link'} to={link ?? ''} target="_blank" rel="noopener noreferrer">
                <div className={'blog-card expand-on-hover'}>
                    <img src={extractImageFromContent(content)} alt={'blog-card-image'} className={'blog-card-image'}/>
                    <h4>{title}</h4>
                </div>
            </Link>
        </CardGridCard>
    );
}

export default BlogCard;