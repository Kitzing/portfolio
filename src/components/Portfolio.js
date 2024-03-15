import './styles/Portfolio.css';
import PortfolioItem from './helpers/PortfolioItem.js';
import pic from '../resources/placeholder.jpg'

function Portfolio() {
    const portfolioData = [
        {name: 'Designing for Maritime Coordination', date: 'Spring 2021', info: 'Master thesis done at the Interaction design and technologies master. The master thesis was a collaboration with the Swedish Sea Rescue Society, where we investigated how to design a coordination system for maritime rescue.', image: pic, moreImages: [pic, pic, pic]},
        {name: 'Exercise motivation', date: 'Autumn 2020', info: 'An 8 weeklong individual project at Chalmers University of Technology where I came up with an idea and fulfilled it by myself. The research was about designing for motivation to workout.', image: pic, moreImages: [pic, pic, pic]},
        {name: 'Disgeyesed', date: 'Autumn 2020', info: 'A project for the course Interaction design project at Chalmers University of Technology. The project was a collaboration with Universeum on the topic of Quantified self.', image: pic, moreImages: [pic, pic, pic]},
        {name: 'Keychain', date: 'Autumn 2020', info: 'A project for the course Mobile Computing at Chalmers University of Technology. The goal was to design a new, innovative action on the theme of authentication and access.', image: pic, moreImages: [pic, pic, pic]},
        {name: 'Let´s talk sugar', date: 'Spring 2020', info: 'A project for the course Information visualization at Chalmers University of Technology. The idea was to provide information for any subject in an informative way. Our project focused on inform about sugar consumption and how it affects you.', image: pic, moreImages: [pic, pic, pic]},
        {name: 'Wärdshuset Spinnaren', date: 'Autumn 2019', info: 'Individual project for the course Graphical Interfaces at Chalmers University of Technology. The purpose was to design a system for scheduling and room booking for a small hotel. The hotel was 1800s themed, including clothes to wear from that time. Figma was used to create this design.', image: pic, moreImages: [pic, pic, pic]},
        {name: 'Argama', date: 'Spring 2018', info: 'Bachelor thesis done with 5 other students in the Software Engineering program. The purpose was to develop a web application for students where they could create a game by writing a game plan in plain English.', image: pic, moreImages: [pic, pic, pic]},
    ]
    return (
        <div id="portfolio" className='portfolio-section'>
            <h1 className='header'>PORTFOLIO</h1>
            {portfolioData.map((item, index) => (
                    <PortfolioItem item={item} left={!(index % 2)} key={index}/>
                    ))}
        </div>
    );}

export default Portfolio;