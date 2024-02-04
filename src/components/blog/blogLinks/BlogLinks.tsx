import './BlogLinks.css'
import { Link } from 'react-router-dom'

interface BlogLinkProps {
    blogId: string;
    img: string;
    title: string;
    date: string;
    introTxt: string;
}

function BlogLinks(props: BlogLinkProps) {
    return(
            <Link to={`/blog/${props.blogId}`} className='blog-links'>
                <img src={props.img} alt='' className='blog-link-image'></img>
                <div className='blog-link-intro'>
                    <h1> {props.title} </h1>
                    <span className='blog-date'> {props.date} </span>
                </div>
                <p className='links-intro-txt'> {props.introTxt}<span className='read-more'>[...] PREBERI VEČ</span> </p>
            </Link>
    )
}

export default BlogLinks
