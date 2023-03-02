import './BlogLinks.css'
import { Link } from 'react-router-dom'

function BlogLinks(props) {

    return(
        <>
            <Link to={`/blog/${props.blogPath}`}>
                <img src=''></img>
                <div>
                    <h1> {props.title} </h1>
                    <span> {props.date} </span>
                </div>
                <p> {props.text} </p>
            </Link>
        </>
    )
}

export default BlogLinks