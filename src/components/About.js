import './styles/About.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLinkedinIn, FaGithub} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import background from '../resources/footer_background.svg';
import aboutimage from '../resources/about_image.svg'

function About() {
    return (
        <div>
            <img className="background" src={background} alt="background" />
            <h1 className='header'>ABOUT</h1>
            <Container fluid="md">
        <Row>
          <Col sm={4}> 
            <ResponsiveImage
                    src={aboutimage}
                    width={ 309 }
                    height={ 450 } />
        </Col>
        <Col sm={7} className='text-container'>
          <div>
            <h3 className='header-container'>Hi!</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          <p className='education'><b>Education:</b> <br />
            MSc. Interaction design and technologies, Chalmers University of Technology<br />
            BSc. Software engineering, Chalmers University of Technology
          </p>
          <div className='contact-container'>
            <a href="https://www.linkedin.com/in/sara-kitzing/">
                <button type="button" class="btn rounded-circle icon-size">
                    <div> <FaLinkedinIn size={25} color='#ffffff'/> </div>
                </button>
            </a>

            <a href="mailto:contact@sarakitzing.se">
                <button type="button" class="btn rounded-circle icon-size ">
                    <div> <MdEmail size={25} color='#ffffff'/> </div>
                </button>
            </a>

            <a href="https://github.com/Kitzing">
                <button type="button" class="btn rounded-circle icon-size">
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

function ResponsiveImage( { src, width, height } ) {
  return (
    <div
      style={ { 
        width,
      } }
      className="responsive-image">
      <div style={ {
          paddingBottom: ( height / width * 100 ) + '%'
        } } />
      <img
        src={ src }
        className="responsive-image__image" />
    </div>
  );
}
export default About;