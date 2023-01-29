import './App.css';
import MyHelmet from './components/MyHelmet';
import ScrollToTop from 'react-scroll-to-top';
import Content from './components/Content';

function App() {
  return (
      <>
        <MyHelmet />
        <ScrollToTop smooth='True' />
        <Content />
      </>
  );
}

export default App;
