import { useParams } from "react-router-dom";
import NotFound from "../NotFound";
import {BlogArr} from "./BlogArr";

function BlogRoute() {
    const routeBlogId = useParams()
    const blogArrIndex = BlogArr.findIndex( object => object.blogId === routeBlogId.id )

    function blogComponent() {
        if (blogArrIndex >= 0) {
            const blogComponent = BlogArr[blogArrIndex].component
            return blogComponent
        } else return <NotFound />
    }

    return (
        <>
            {blogComponent()}
        </>
    )
}

export default BlogRoute
