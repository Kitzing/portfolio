import './styles/Portfolio.css';
import PortfolioItem from './PortfolioItem.js';

function Portfolio() {
    return (
        <div id="portfolio" className='portfolio-section'>
            <h1 className='header'>PORTFOLIO</h1>
            <PortfolioItem name={'Extercise motivation'} date={'Autumn 2020'} info={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} left={true} />
            <PortfolioItem name={'Title 1'} date={'Summer 2022'} info={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} />
            <PortfolioItem name={'Title 1'} date={'Summer 2022'} info={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} left={true} />
        </div>
    );}

export default Portfolio;