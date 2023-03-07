import './BlogLinks.css'
import { Link } from 'react-router-dom'

function BlogLinks(props) {

    return(
            <Link to={`/blog/${props.blogPath}`} className='blog-links'>
                <img src={props.img}></img>
                <div>
                    <h1> {props.title} </h1>
                    <span> {props.date} </span>
                </div>
                <p className='links-intro-txt'> {props.introTxt} </p>
            </Link>
    )
}

export default BlogLinks