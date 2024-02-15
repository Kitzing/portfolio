import './styles/Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Skills from './Skills.js'
import background from '../resources/header_background.svg';
import pic from '../resources/pic.svg'

function Home() {
  return (
    <div id='home' className="wrapper">
      <img className="background" src={background} alt="background" />
      <Container className='container' fluid="md">
        <Row className="photoCenter">
          <Col sm={6}> <h1>Sara Kitzing</h1>
            <p>A front-end developer with an interest in design and users.  I enjoy the challenge of finding admirable solutions and are looking forward to developing and deepen my knowledge.</p>
            <Skills />
            <Button variant='dark'>More information</Button>
          </Col>
          <Col sm={6}>
            <ResponsiveImage
                src={pic}
                width={ 309 }
                height={ 450 } />
      
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

export default Home;
