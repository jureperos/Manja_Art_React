import { Outlet } from "react-router-dom";
import './NaprodajLayout.css'

function NaprodajLayout() {
    return (
        <>
            <h1>Prodajni katalog</h1>
            <Outlet />
        </>
    )
}

export default NaprodajLayout