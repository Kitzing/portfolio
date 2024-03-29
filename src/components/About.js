import './styles/About.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLinkedinIn, FaGithub} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import ResponsiveImage from './helpers/ResponsiveImage.js'
import aboutimage from '../resources/about_image.svg'

function About() {
    return (
      <div id="about">
        <h1 className='header'>ABOUT</h1>
        <Container fluid="md">
          <Row>
            <Col sm={4}> 
              <ResponsiveImage
                      src={aboutimage}
                      alt='Picture of Sara'
                      width={ 309 }
                      height={ 450 } />
            </Col>
            <Col sm={7} className='about-text'>
              <div>
                <h3 className='header-container'>Hi!</h3>
                <p>
                  I'm Sara, a positive and ambitious person seeking new ways to express my creativity. Whether it's crocheting, whipping up something in the kitchen, or discovering new objects to photograph, I'm constantly motivated by my passion for creativity.
                  That's also why I appreciate the combination of programming and design; it merges problem-solving with the freedom of creativity. In my work, I enjoy focusing on the users and how to make a product appealing and easy to use for them.
                </p>
                <p style={{fontSize: '15px'}}>
                  <b>Education:</b> 
                  <br />
                  MSc. Interaction design and technologies, Chalmers University of Technology
                  <br />
                  BSc. Software engineering, Chalmers University of Technology
                </p>
                <div className='contact-container'>
                  <a href="https://www.linkedin.com/in/sara-kitzing/" target="_blank">
                      <button type="button" className="btn rounded-circle icon-size" aria-label='LinkedIn'>
                          <div> <FaLinkedinIn size={25} color='#ffffff'/> </div>
                      </button>
                  </a>
                  <a href="mailto:contact@sarakitzing.se">
                      <button type="button" className="btn rounded-circle icon-size" aria-label='Email'>
                          <div> <MdEmail size={25} color='#ffffff'/> </div>
                      </button>
                  </a>
                  <a href="https://github.com/Kitzing" target="_blank">
                      <button type="button" className="btn rounded-circle icon-size" aria-label='Github'>
                          <div> <FaGithub size={25} color='#ffffff' /> </div>
                      </button> 
                      </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
    </div>
  );
}

export default About;