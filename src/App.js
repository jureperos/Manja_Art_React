import './App.css';
import MyHelmet from './components/MyHelmet';
import ScrollToTop from 'react-scroll-to-top';
import Content from './components/Content';

function App() {

  return (
      <div>
        <MyHelmet />
        <ScrollToTop smooth='True' id='scroll-top'/>
        <Content />
      </div>
  );
}

export default App;
