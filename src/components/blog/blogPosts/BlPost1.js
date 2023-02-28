import { useState } from 'react'

function BlPost1() {
    const [moreText, setmoreText] = useState(false);

    return(
        <>
            <img></img>
            <h1>To je moj naslov</h1>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique amet est at tempora velit iure consequatur blanditiis modi, veniam odit ea itaque? Magni aliquid velit aperiam dolore modi assumenda veritatis!
                    <span
                    onClick={() => {setmoreText(!moreText)}}
                    className={`read-more ${moreText ? 'closed' : 'open'}`}> 
                    ... read more</span>

                    <span
                    onClick={() => {setmoreText(!moreText)}}
                    className={`more-text ${moreText ? 'open': 'closed'}`}
                    >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit molestias sed repellendus, reprehenderit consequatur quia quas ipsum enim magnam. Saepe repudiandae libero autem qui. Quod eius magnam aliquam alias. Tempore.
                    </span>

                    <span 
                    onClick={() => {setmoreText(!moreText)}}
                    className={`read-less ${moreText ? 'open': 'closed'}`}>
                    Show less</span>
                </p>
            </div>
        </>
    )
}

export default BlPost1