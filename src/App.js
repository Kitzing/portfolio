import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/Home.js'
import Menu from './components/Menu.js';
import Portfolio from './components/Portfolio.js';
import Footer from './components/Footer.js';
import About from './components/About.js';
import header from './resources/header.svg';
import footer from './resources/footer.svg';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Menu />
        <div style={{backgroundColor: '#BDBACF', marginTop: '-70px'}}>
          <Home />
        </div>
        <img className="header-background" src={header} alt="background" />
        <Portfolio />
        <img className="footer-background" src={footer} alt="background" />
        <div style={{backgroundColor: '#BDBACF'}}>
          <About />
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
