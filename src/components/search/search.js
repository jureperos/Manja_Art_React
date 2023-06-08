import RastlineArr from '../portfolio/RaslineArr';


export default function Search(props) {
    const foundArr = []
    regSearch(props.text);

    function regSearch(searchTerm) {
        const regex = new RegExp(searchTerm, 'i');

        for (let i = 0; i <= RastlineArr.length -1; i++) {

            if (regex.test(RastlineArr[i].title)) {
                foundArr.push(RastlineArr[i].title);
            }
            if (regex.test(RastlineArr[i].sciName)) {
                console.log(RastlineArr[i].sciName);
            }
            if (regex.test(RastlineArr[i].description)) {
                console.log(RastlineArr[i].description);
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
