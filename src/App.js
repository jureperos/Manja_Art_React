import './App.css';
import MyHelmet from './components/MyHelmet';
import ScrollToTop from 'react-scroll-to-top';
import Content from './components/Content';

function App() {
    // const fixedElement = document.querySelector('#scroll-top');
    // const fixedElementStyle = fixedElement.fixedElement
    // console.log(fixedElement)

    // window.addEventListener('scroll', function() {
    //   if (window.scrollY <= 500) {
    //     fixedElement.style.color = 'blue';
    //     console.log(fixedElement.style.color)
    //     return this.removeEventListener
    //   } else {
    //     fixedElement.style.bottom = '40';
    //     return this.removeEventListener
    //   }
    //   });

  return (
      <>
        <MyHelmet />
        <ScrollToTop smooth='True' id='scroll-top'/>
        <Content />
      </>
  );
}

export default App;
