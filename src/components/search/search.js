import MergedArr from '../portfolio/MergedArr';


export default function Search({text}) {
    //stores the search results
    const foundArr = []
    regSearch(text);

    if (!text) {
        return
    }

    function regSearch(searchTerm) {
        const regex = new RegExp(searchTerm, 'i');

        for (let i = 0; i <= MergedArr.length -1; i++) {

            if (regex.test(MergedArr[i].title)) {
                foundArr.push(MergedArr[i].title);
            }
            if (regex.test(MergedArr[i].sciName)) {
                foundArr.push(MergedArr[i].sciName);
            }
            if (regex.test(MergedArr[i].description)) {
                foundArr.push(MergedArr[i].description);
            }

        }

    }
    return (
        <div>        
            {foundArr.map((foundElement) => (
                <p>{foundElement}</p>
            ))
            }
        </div>

    )
}
