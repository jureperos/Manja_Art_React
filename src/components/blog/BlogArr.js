import Blog_1 from "./blog_1/Blog_1"
import introTxt from "./introTxt"

//intro stored in another file to make the code readable

export default [
    {
        blogId: 'blog1',
        img: require('./blog_1/blog1Img.png'),
        title: 'Akvarel: Barve in pigmenti',
        date: 'Sobota, 4.3.2023',
        introText: introTxt.text1,
        component: <Blog_1 />
    },
]