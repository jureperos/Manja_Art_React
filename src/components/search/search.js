export default function Search(text, findImg, imgArr) {


    if (text.length < 3) {
        return null
    }
    const regex = new RegExp(text, 'i');

    for (let i = 0; i <= imgArr.length -1; i++) {

        if (regex.test(imgArr[i].title)) {
            findImg(imgArr[i]);

        } else if (regex.test(imgArr[i].sciName)) {
            findImg(imgArr[i]);

        } else if (regex.test(imgArr[i].description)) {
            findImg(imgArr[i]);
        }

    }
}
