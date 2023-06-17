import MergedArr from '../portfolio/MergedArr';
import SetImages from '../portfolio/SetImages';


export default function Search({text}) {
    //stores the search results
    const foundArr = []
    regSearch(text);

    function regSearch(searchTerm) {
        if (text.length < 3) {
            return null
        }
        const regex = new RegExp(searchTerm, 'i');

        for (let i = 0; i <= MergedArr.length -1; i++) {

            if (regex.test(MergedArr[i].title)) {
                foundArr.push(MergedArr[i]);

            } else if (regex.test(MergedArr[i].sciName)) {
                foundArr.push(MergedArr[i]);

            } else if (regex.test(MergedArr[i].description)) {
                foundArr.push(MergedArr[i]);
            }

        }

    }
    return (
        <div>        

             <SetImages
             //check if searchArr is empty else show all results with MergedArr
             imgArr={(foundArr.length === 0) ? MergedArr: foundArr}
             height={200}
             />
        </div>

    )
}
