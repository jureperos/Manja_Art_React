import BlogLinks from './blogLinks/BlogLinks'
import BlogArr from './BlogArr'

function Blog() {
    const blogLinkElements = BlogArr.map(element => {
        return (
            <BlogLinks
                blogPath={element.blogPath}
                img={element.img}
                title={element.title}
                date={element.date}
                text={element.text}
            />
        )
    })
    return (
        <>
            <p></p>
            {blogLinkElements}
        </>
    )
}

export default Blog