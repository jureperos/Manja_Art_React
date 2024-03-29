import BlogLinks from './blogLinks/BlogLinks'
import {BlogArr} from './BlogArr'
import './Blog.css';

function Blog() {
    const blogLinkElements = BlogArr.map(element => {
        return (
            <BlogLinks
                blogId={element.blogId}
                img={element.img}
                title={element.title}
                date={element.date}
                introTxt={element.introText}
            />
        )
    })
    return (
        <>
            <div className='blog-content'>
                <div className='blog-intro'>
                    <img src='/blog_images/blog_intro.png' alt="" className="blog-intro-img" />
                    <h1 className='blog-main-title'> Blog </h1>
                    <p className='blog-descr'>Dobrodošli na mojem blogu. Tu boste lahko prebirali različne tematike o umetniških materialih, barvni teoriji, “step by step tutorial” in še veliko več. Upam, da vam bodo informacije koristile in da se boste tudi kdaj sprobali v risanju. Trenutno je blog še v zametkih, a upam da se bo sčasoma povečalo število objav. Uživajte v branju!</p>
                </div>
                <div className='blog-link-elements'>{blogLinkElements}</div>
            </div>
        </>
    )
}

export default Blog
