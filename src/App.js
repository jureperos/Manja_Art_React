import './App.css';
import { Routes, Route, Link } from "react-router-dom"
import Header from './components/Navbar';
import Footer from './components/Footer';
import MyHelmet from './components/MyHelmet';
import Test from './components/Test';

function App() {
  return (
      <>
        <MyHelmet />
        <Header />
        <Footer />
      </>
  );
}

export default App;
