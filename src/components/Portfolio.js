import './styles/Portfolio.css';
import PortfolioItem from './PortfolioItem.js';

function Portfolio() {
    return (
        <div id="portfolio" className='portfolio-section'>
            <h1 className='header'>PORTFOLIO</h1>
            <PortfolioItem />
            <PortfolioItem />
            <PortfolioItem />
        </div>
    );}

export default Portfolio;