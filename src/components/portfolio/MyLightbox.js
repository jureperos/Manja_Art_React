import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

function MyLightbox () {
    return (
        <>
            <Lightbox 
                open={true}
                close={false}
                slides={[
                    {
                    src: require('./assets/rastline/1_Iris illyrica.jpg'),
                    width: 500,
                    height: 800
                    }
                ]}
            />
        </>
    )
}

export default MyLightbox
