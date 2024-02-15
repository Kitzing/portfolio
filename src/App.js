import './App.css';
import Home from './components/Home.js'
import Menu from './components/Menu.js';
import Portfolio from './components/Portfolio.js';
import About from './components/About.js';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Menu />
      <Home id="home" />
      <Portfolio id="portfolio" />
      <About id="about" />
      </BrowserRouter>
    </div>
  );
}

export default App;
