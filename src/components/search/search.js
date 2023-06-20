import MergedArr from '../portfolio/MergedArr';

export default function Search(text, findImg) {


    if (text.length < 3) {
        return null
    }
    const regex = new RegExp(text, 'i');

    for (let i = 0; i <= MergedArr.length -1; i++) {

        if (regex.test(MergedArr[i].title)) {
            findImg(MergedArr[i]);

        } else if (regex.test(MergedArr[i].sciName)) {
            findImg(MergedArr[i]);

        } else if (regex.test(MergedArr[i].description)) {
            findImg(MergedArr[i]);
        }

    }
}
