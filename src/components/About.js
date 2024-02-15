import { Container, Row, Col, Button } from 'react-bootstrap';
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
        <Col sm={6}>
            <h3>Hi!</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
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