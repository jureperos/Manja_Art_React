import { Helmet } from 'react-helmet';

function MyHelmet () {
    return (
        <>
            <Helmet>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Portfolio za znanstveno ilustracijo,  umetnost, portrete, linorez in drugo" />
                <meta name="keywords" content="slike, znanost, ilustracija, umetnost, umetnine, pasteli, portreti, naročila" />
                <meta name="robots" content="index,follow" />
                <title>ManjaTislerArt</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            </Helmet>
        </>
    )
}

export default MyHelmet