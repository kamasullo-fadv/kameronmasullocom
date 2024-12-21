import {useEffect, useState} from "react";
import CardGrid from "../common/grid-card/CardGrid.tsx";
import './blogs.css';
import BlogCard from "./BlogCard.tsx";

const Blogs = () => {

    const [blogs, setBlogs] = useState<any[]>([]);

    useEffect(() => {
        fetchBlogs();
    }, []);

    const fetchBlogs = () => {
        const url = encodeURIComponent('https://medium.com/feed/kameron-masullo-music');
        fetch(`https://api.rss2json.com/v1/api.json?rss_url=${url}`)
            .then(res => res.json())
            .then(res => setBlogs(res.items))
    }

    return (
        <div className={'component-parent'}>
            <div className={'component-header'}>
                <h2>Blogs</h2>
            </div>
            <CardGrid>
                {blogs?.map(blog => (
                    <BlogCard
                        key={`blog-${blog.title}`}
                        blog={blog}
                    />
                ))}
            </CardGrid>
        </div>
    );
}

export default Blogs;