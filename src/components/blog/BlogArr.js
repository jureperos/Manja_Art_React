import Blog_1 from "./blog_1/Blog_1"
import Blog_2 from "./blog_2/Blog_2"
import introTxt from "./introTxt"


export default [
    
    {
        blogId: 'blog2',
        img: require('./blog_2/1.jpg'),
        title: 'Kako pripraviti akvarelno paleto',
        date: 'Četrtek, 18.5.2023',
        introText: introTxt.text2,
        component: <Blog_2 />
    },

    {
        blogId: 'blog1',
        img: require('./blog_1/blog1Img.png'),
        title: 'Akvarel: Barve in pigmenti',
        date: 'Sobota, 4.3.2023',
        introText: introTxt.text1,
        component: <Blog_1 />
    },

    ]
