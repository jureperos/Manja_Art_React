import Blog1 from "./blog_1/Blog_1.js"
import Blog2 from "./blog_2/Blog_2.js"
import Blog3 from "./blog_3/Blog_3.js"
import introTxt from "./introTxt"


export const BlogArr = [

    {
        blogId: 'blog3',
        img: require('./blog_3/jacksons_img.jpg'),
        title: 'Moji materiali',
        date: 'Sobota, 16.12.2023',
        introText: introTxt.text3,
        component: <Blog3 />
    },
    {
        blogId: 'blog2',
        img: require('./blog_2/1.jpg'),
        title: 'Kako pripraviti akvarelno paleto',
        date: 'Četrtek, 18.5.2023',
        introText: introTxt.text2,
        component: <Blog2 />
    },

    {
        blogId: 'blog1',
        img: require('./blog_1/blog1Img.png'),
        title: 'Akvarel: Barve in pigmenti',
        date: 'Sobota, 4.3.2023',
        introText: introTxt.text1,
        component: <Blog1 />
    },

]
