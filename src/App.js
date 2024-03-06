import './App.css';
import Home from './components/Home.js'
import Menu from './components/Menu.js';
import Portfolio from './components/Portfolio.js';
import About from './components/About.js';
import { BrowserRouter } from 'react-router-dom';
import { MdEmail } from 'react-icons/md';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Menu />
      <Home />
      <Portfolio />
      <About />
      <div id="contact">
      <div className='contact'>
      <p> <MdEmail size={20}/> contact(a)sarakitzing.se </p>
    </div>
        <p className='footer'>
          This portfolio was created with React <br />
          © 2024 Sara Kitzing
        </p>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
