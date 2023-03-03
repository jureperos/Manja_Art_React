import './BlogLinks.css'
import { Link } from 'react-router-dom'

function BlogLinks(props) {

    return(
        <>
            <Link to={`/blog/${props.blogPath}`}>
                <img src=''></img>  {/*uredi path*/}
                <div>
                    <h1> {props.title} </h1>
                    <span> {props.date} </span>
                </div>
                <p> {props.introTxt} </p>
            </Link>
        </>
    )
}

export default BlogLinks