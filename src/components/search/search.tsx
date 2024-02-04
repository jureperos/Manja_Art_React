import { ImageAttributes } from "../portfolio/arrayInterface";

export default function Search(
    text: string,
    findImg: (arg: ImageAttributes) => void,
    imgArr: Array<ImageAttributes>
) {

    if (text.length < 3) {
        return null
    }
    const regex = new RegExp(text, 'i');
    let sciValueCheck: boolean

    for (let i = 0; i <= imgArr.length -1; i++) {

        if (imgArr[i].sciName === undefined) {
            sciValueCheck = false
        } else sciValueCheck = true

        if (regex.test(imgArr[i].title)) {
            findImg(imgArr[i]);

        } else if (sciValueCheck && regex.test(imgArr[i].sciName!)) {
            findImg(imgArr[i]);

        } else if (regex.test(imgArr[i].description)) {
            findImg(imgArr[i]);
        }

    }
}
