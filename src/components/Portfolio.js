import './styles/Portfolio.css';
import PortfolioItem from './PortfolioItem.js';

function Portfolio() {
    return (
        <div>
            <h1 className='header'>PORTFOLIO</h1>
            <PortfolioItem />
            <PortfolioItem />
            <PortfolioItem />
        </div>
    );}

export default Portfolio;