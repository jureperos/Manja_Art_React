import './App.css';
import { Routes, Route } from "react-router-dom"
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
      <Routes>
        <Route path='/' element= { <Header/> } />
      </Routes>
  );
}

export default App;
