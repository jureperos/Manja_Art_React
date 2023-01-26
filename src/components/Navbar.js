import './Navbar.css';
import { Routes, Route, Link } from "react-router-dom"
import Test from './Test';



function Navbar() {
    return (
        <>
        <Routes>
            <Route index element={<Test />}  />
        </Routes>
        </>
    )
}

export default Navbar