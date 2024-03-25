import './styles/Portfolio.css';
import PortfolioItem from './helpers/PortfolioItem.js';
import pic from '../resources/placeholder.jpg'
import exjobb from '../resources/exjobb.png'
import exetition from '../resources/exetition.png'
import disgeyesed from '../resources/disgeyesed.png'
import argama from '../resources/argama.png'
import keychain from '../resources/keychain.png'
import spinnaren from '../resources/spinnaren.png'
import sugar from '../resources/sugar.png'

function Portfolio() {
    const portfolioData = [
        {name: 'Designing for Maritime Coordination', 
            date: 'Spring 2021', 
            info: 'Master thesis done at the Interaction design and technologies master. The master thesis was a collaboration with the Swedish Sea Rescue Society, where we investigated how to design a coordination system for maritime rescue.', 
            image: exjobb, 
            moreImages: [pic, pic, pic]
        },
        {name: 'Exercise motivation', 
            date: 'Autumn 2020', 
            info: 'An 8 weeklong individual project course where I came up with an idea and fulfilled it by myself.  The research was about designing for motivation to work out and ended in a mobile application design where the participants competed against each other by achieving their own goals.', 
            image: exetition, 
            moreImages: [pic, pic, pic]
        },
        {name: 'Disgeyesed', 
            date: 'Autumn 2020', 
            info: 'The project was a collaboration with Universeum on the topic Quantified Self. My group created a simple game focused on finding stars hidden in a social media context. The application shows a heatmap of where the user has looked when all stars are found. The target group was 12-16 year old.',
            image: disgeyesed, 
            moreImages: [pic, pic, pic]
        },
        {name: 'Keychain', 
            date: 'Autumn 2020', 
            info: 'A project for the course Mobile Computing at Chalmers University of Technology. The goal was to design a new, innovative action on the theme authentication and access. Our idea was an application for sharing keys with others through your phone.', 
            image: keychain, 
            moreImages: [pic, pic, pic]
        },
        {name: 'Let´s talk sugar', 
            date: 'Spring 2020', 
            info: 'A project for the course Information Visualization at Chalmers University of Technology. The purpose was to provide information on any subject in an informative way. We decided to focus on informing you about sugar consumption and how it affects you.', 
            image: sugar, 
            moreImages: [pic, pic, pic]
        },
        {name: 'Wärdshuset Spinnaren', 
            date: 'Autumn 2019', 
            info: 'Individual project for the course Graphical Interfaces at Chalmers University of Technology. The purpose was to design a system for scheduling and room booking for a small hotel for the visitors and the staff. The hotel was 1800s-themed, including clothes to wear from that time.', 
            image: spinnaren, 
            moreImages: [pic, pic, pic]
        },
        {name: 'Argama', 
            date: 'Spring 2018', 
            info: 'Bachelor thesis done with five other students in the Software Engineering program. The purpose was to develop a web application for students where they could create a game by writing a game plan in plain English.', 
            image: argama, 
            moreImages: [pic, pic, pic]
        },
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