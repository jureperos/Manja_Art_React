import { Outlet } from "react-router-dom";
import './NaprodajLayout.css'

function NaprodajLayout() {
    return (
        <>
            <h1 className="naprodaj-title">PRODAJNI KATALOG</h1>
            <p className="naprodaj-txt">Za naročila me lahko kontaktirate direktno preko socialnih medijev ali preko elektronskega naslova. Za ceno se zmenimo naknadno.</p>
            <Outlet />
        </>
    )
}

export default NaprodajLayout