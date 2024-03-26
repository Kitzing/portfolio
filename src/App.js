import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { MdEmail } from 'react-icons/md';
import Home from './components/Home.js'
import Menu from './components/Menu.js';
import Portfolio from './components/Portfolio.js';
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
        <div id="contact" style={{paddingBottom: '5px'}}>
          <div className='contact'>
            <p> <MdEmail size={20}/> contact(a)sarakitzing.se </p>
          </div>
          <p className='footer'>
              This portfolio was created with React <br />
              © 2024 Sara Kitzing
          </p>
          <p className='footer'>Mockup templates designed by <a className='link' href='https://www.freepik.com/' target="_blank">Freepik</a>
          </p>
        </div>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
