import './BlogLinks.css'
import { Link } from 'react-router-dom'

function BlogLinks(props) {
    return(
            <Link to={`/blog/${props.blogId}`} className='blog-links'>
                <img src={props.img} className='blog-link-image'></img>
                <div className='blog-info-ctn'>
                    <h1> {props.title} </h1>
                    <span className='blog-date'> {props.date} </span>
                </div>
                <p className='links-intro-txt'> {props.introTxt} </p>
            </Link>
    )
}

export default BlogLinks