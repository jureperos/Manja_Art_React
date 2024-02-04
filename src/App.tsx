import './App.css';
import MyHelmet from './components/MyHelmet';
import ScrollToTop from 'react-scroll-to-top';
import Content from './components/Content';

function App() {

  return (
      <div className='app'>
        <MyHelmet />
        <ScrollToTop smooth={true} id='scroll-top'/>
        <Content />
      </div>
  );
}

export default App;
