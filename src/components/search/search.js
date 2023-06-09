import RastlineArr from '../portfolio/RaslineArr';


export default function Search(props) {
    //stores the search results
    const foundArr = []
    regSearch(props.text);
    if (!props.text) {
        return
    }
    function regSearch(searchTerm) {
        const regex = new RegExp(searchTerm, 'i');
        
        for (let i = 0; i <= RastlineArr.length -1; i++) {

            if (regex.test(RastlineArr[i].title)) {
                foundArr.push(RastlineArr[i].title);
            }
            if (regex.test(RastlineArr[i].sciName)) {
                foundArr.push(RastlineArr[i].sciName);
            }
            if (regex.test(RastlineArr[i].description)) {
                foundArr.push(RastlineArr[i].description);
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
