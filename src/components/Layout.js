import { Helmet } from 'react-helmet';
import Header from "./Header";
import Footer from "./Footer";
import { Children } from "react";

function Layout () {
    <div>
        <Helmet>
            <title>Tau je moja stran!</title>
        </Helmet>
        <Header />
        {Children}
        <Footer />
    </div>
}

export default Layout