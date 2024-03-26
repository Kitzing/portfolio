import './styles/Portfolio.css';
import PortfolioItem from './helpers/PortfolioItem.js';
import exjobb from '../resources/exjobb/exjobb.png'
import assistansposition from '../resources/exjobb/assistansposition.png'
import weatherstation from '../resources/exjobb/weatherstation.png'
import list from '../resources/exjobb/list.png'
import exetition from '../resources/exetition/exetition.png'
import home from '../resources/exetition/home.png'
import profiles from '../resources/exetition/profiles.png'
import notifications from '../resources/exetition/notifications.png'
import disgeyesed from '../resources/disgeyesed/disgeyesed.png'
import startpage from '../resources/disgeyesed/start.png'
import game from '../resources/disgeyesed/game.png'
import heatmap from '../resources/disgeyesed/heatmap.png'
import argama from '../resources/argama/argama.png'
import index  from '../resources/argama/index.jpg'
import pongview from '../resources/argama/pongview.jpg'
import advactions from '../resources/argama/advactions.jpg'
import keychain from '../resources/keychain/keychain.png'
import lendedkeys from '../resources/keychain/lendedkeys.png'
import receivedkeys from '../resources/keychain/receivedkeys.png'
import mykeys from '../resources/keychain/mykeys.png'
import spinnaren from '../resources/spinnaren/spinnaren.png'
import start from '../resources/spinnaren/start.png'
import bookroom from '../resources/spinnaren/bookroom.png'
import bookings from '../resources/spinnaren/bookings.png'
import sugar from '../resources/sugar/sugar.png'
import intro from '../resources/sugar/intro.png'
import toomuch from '../resources/sugar/toomuch.png'
import dailyintake from '../resources/sugar/dailyintake.png'
import danger from '../resources/sugar/danger.png'


function Portfolio() {
    const portfolioData = [
        {name: 'Designing for Maritime Coordination', 
            date: 'Spring 2021', 
            info: 'Master thesis done at the Interaction design and technologies master. The master thesis was a collaboration with the Swedish Sea Rescue Society, where we investigated how to design a coordination system for maritime rescue.', 
            image: exjobb, 
            moreInfo: {
                info: 'The purpose of this thesis was to explore how to best present information to an operator at a maritime coordination centre. To research this, a collaboration with the Swedish Sea Rescue Society (SSRS) was made. SSRS is a volunteer rescue society that aids with rescue operations on Swedish and bordering countries’ waters. Over the years, they have grown to the point where they need a physical coordination centre to properly perform their work. This project contributes to the centre by investigating how to design a system for such a centre and resulted in Guidelines for Presenting Information in a Maritime Coordination Centre for Rescue Societies.',
                area: 'Interaction design // Information Visualization // Maritime coordination centre',
                skills: 'Figma',
                images: [assistansposition, list, weatherstation],
                height: 281,
                process: 'The project was executed through a literature study and an initial pre-study to collect the relevant information needed. An iterative design process was then applied, including three iterations. For each iteration, a prototype was created, and guidelines were refined. The final prototype included two monitors, one for event information and the other for a map view, which was connected through shortcuts. User tests showed the prototype being understandable and usable for the on-call workers at SSRS.',
                methods: ['Litterature Study', 'Interviews', 'Personas', 'Low-fidelity Prototype', 'Evaluation', 'MoSCoW', 'Sketches', 'Six Thinking Hats', 'Cognitive Walkthrough', 'Heuristic Evaluation', 'Interactive Prototype', 'Usability Testing', 'Think-aloud Protocol']
            },
        },
        {name: 'Exercise motivation', 
            date: 'Autumn 2020', 
            info: 'An 8 weeklong individual project course where I came up with an idea and fulfilled it by myself.  The research was about designing for motivation to work out and ended in a mobile application design where the participants competed against each other by achieving their own goals.', 
            image: exetition, 
            moreInfo: {
                info: 'I executed this project on my own, with support from my supervisor. The research question was "How do you design a mobile application to motivate and support goal achievement in the context of exercising?" which was answered by creating a prototype. The target group for the project was students.',
                area: 'Mobile application design // Designing for motivation',
                skills: 'Adobe XD',
                images: [home, profiles, notifications],
                height: 487,
                process: 'The project was divided into three iterations, each two weeks long, and used the Design Thinking process. It ended with a one-week-long evaluation period where the test subjects got to use a mock-up of the application while competing against a friend on how well they achieved their own goals.',
                methods: ['Semi-structured interviews', 'Brainstorming', 'Mood board', 'Literature study', 'Sketching', 'A/B-evaluation', 'Mission impossible', 'Low-fidelity prototyping', 'High-fidelity prototyping', 'Usability testing', 'Interview in pairs' ],
            },
        },
        {name: 'Disgeyesed', 
            date: 'Autumn 2020', 
            info: 'The project was a collaboration with Universeum on the topic \"The Quantified Self\". My group created a simple game focused on finding stars hidden in a social media context. The application shows a heatmap of where the user has looked when all stars are found. The target group was 12-16 year old.',
            image: disgeyesed, 
            moreInfo: {
                info: 'The main idea was to teach young adults how their brains work and how attention may be affected by the social media context. The product was a game that uses an ordinary web camera to track the user\'s eyes when searching for icons in a social media context.',
                area: 'Interaction design // Eye-tracking',
                skills: 'Figma // HTML // SVG // JavaScript',
                images: [startpage, game, heatmap],
                height: 281,
                process: 'The project was eight weeks long and divided into three iterations. The final result was created using HTML, SVG files, JavaScript, and GazeRecorder\'s GazeCloudAPI and heatMap.js for the eye-tracking function.',
                methods: ['Brainstormig', 'Brainwriting', 'Storyboard', 'Mood board', 'Crazy Eight\'s', 'Low-fidelity prototyping', 'Morphological matrix', 'Think-aloud protocol', 'KJ analysis', 'Implementation'],
                url: 'https://www.idxpo.se/2020/disgeyesed/index.html'
            },
        },
        {name: 'Keychain', 
            date: 'Autumn 2020', 
            info: 'A project for the course Mobile Computing at Chalmers University of Technology. The goal was to design a new, innovative action on the theme authentication and access. Our idea was an application for sharing keys with others through your phone.', 
            image: keychain, 
            moreInfo: {
                info: 'This specific project focused on physical access with the approach of Designing for the real world. The result was the prototype Keychain - an app that makes it possible to share keys with anyone - right through the phone!',
                area: 'Mobile computing // Authentication and access',
                skills: 'Figma // Android studios // Kotlin',
                images: [lendedkeys, receivedkeys, mykeys],
                height: 535,
                width: 247,
                process: 'The project was conducted in two iterations, each a weeklong. Where the goal was to find the features needed and evaluate our idea. The result of the iterations then got implemented in Kotlin, creating an application with a functioning interaction flow.',
                methods: ['Brainstorming', 'Low-fidelity prototyping', 'Heuristic evaluation', 'Brainwriting', 'Interactive prototype', 'Evaluation interview', 'Implementation' ],
                url: 'https://kitzing.github.io/TemporaryDigitalKeys',
            },
        },
        {name: 'Let\'s talk sugar', 
            date: 'Spring 2020', 
            info: 'A project for the course Information Visualization at Chalmers University of Technology. The purpose was to provide information on any subject in an informative way. We decided to focus on informing you about sugar consumption and how it affects you.', 
            image: sugar, 
            moreInfo: {
                info: '',
                area: 'Information Visualization',
                skills: 'Figma // SVG // JavaScript',
                images: [toomuch, dailyintake, danger],
                height: 355,
                process: '',
                methods: []
            },
        },
        {name: 'Wärdshuset Spinnaren', 
            date: 'Autumn 2019', 
            info: 'Individual project for the course Graphical Interfaces at Chalmers University of Technology. The purpose was to design a system for scheduling and room booking for a small hotel for the visitors and the staff. The hotel was 1800s-themed, including clothes to wear from that time.',
            image: spinnaren, 
            moreInfo: {
                info: '',
                area: 'Graphical interfaces',
                skills: 'Figma',
                images: [start, bookroom, bookings],
                height: 312,
                process: '',
                methods: []
            },
        },
        {name: 'Argama', 
            date: 'Spring 2018', 
            info: 'Bachelor thesis done with five other students in the Software Engineering program. The purpose was to develop a web application for students where they could create a game by writing a game plan in plain English.',
            image: argama, 
            moreInfo: {
                info: 'Developing a user friendly and pedagogical web application that uses a controlled natural language to interpret a game description and translate it into code. The goals were to use modern coding practices and principles in the development, and the application should contain similar functionality as the existing website GameChangineer while being more user-friendly. The outcome of the project was a web application using mostly modern practices and principles, with a functionality close to the GameChangineer website, but less complex. The final user test showed that the application’s user experience improved compared to GameChangineer.',
                area: 'Front-end // Game generation',
                skills: 'HTML // CSS // JavaScript',
                images: [index, pongview, advactions],
                height: 262,
                process: '',
                methods: []
            },
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