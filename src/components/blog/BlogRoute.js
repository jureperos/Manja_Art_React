import { useParams } from "react-router-dom";
import BlogArr from "./BlogArr";

function BlogRoute() {
    const routeBlogId = useParams()
    const blogArrIndex = BlogArr.findIndex( object => object.blogId === routeBlogId.id )



    return (
        BlogArr[blogArrIndex].component
    )
}

export default BlogRoute