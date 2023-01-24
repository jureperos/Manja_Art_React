import './App.css';
import { Routes, Route, Link } from "react-router-dom"
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
      <div>
          <Header/>
          <Routes>
            <Route index element={<Home />}  />
            <Route path="about" element={<About />}  />
          </Routes>
        <Footer/>
      </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <Link to="/about">About</Link>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
      <Link to="/">Home</Link>
    </div>
  );
}

export default App;
