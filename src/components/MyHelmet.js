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
                <link rel="apple-touch-icon" sizes="180x180" href="./favicon/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="./favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="./favicon/favicon-16x16.png" />
                <link rel="manifest" href="./favicon/site.webmanifest" />
                <meta name="theme-color" content="#ffffff"></meta>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=IM+Fell+English&family=IM+Fell+English+SC&family=Italianno&family=Roboto+Slab&display=swap" rel="stylesheet"/>
            </Helmet>
        </>
    )
}

export default MyHelmet