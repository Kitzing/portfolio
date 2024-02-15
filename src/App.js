import './App.css';
import Home from './components/Home.js'
import Menu from './components/Menu.js';
import Portfolio from './components/Portfolio.js';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Menu />
      <Home />
      <Portfolio />
      </BrowserRouter>
    </div>
  );
}

export default App;
