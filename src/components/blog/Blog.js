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
                introTxt={element.introText}
            />
        )
    })
    return (
        <>
            <h1> Blog </h1>
            <p>Dobrodošli na mojem blogu. Tu boste lahko prebirali različne tematike o umetniških materialih, barvni teoriji, “step by step tutorial” in še veliko več. Upam, da vam bodo informacije koristile in da se boste tudi kdaj sprobali v risanju. Trenutno je blog še v zametkih, a upam da se bo sčasoma povečalo število objav. Uživajte v branju!</p>
            {blogLinkElements}
        </>
    )
}

export default Blog