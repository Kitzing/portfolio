import './styles/Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Skills from './Skills.js'
import background from '../resources/header_background.svg';
import pic from '../resources/pic.svg'

function Home() {
  return (
    <div id="home" className="wrapper">
      <img className="background" src={background} alt="background" />
      <Container className='container' fluid="md">
        <Row className="text-container">
          <Col sm={6}> <h1>Sara Kitzing</h1>
            <div className='about-container'>
              <p className='about-text'>A front-end developer with an interest in design and users.  I enjoy the challenge of finding admirable solutions and are looking forward to developing and deepen my knowledge.</p>
            </div>
            <Skills skills={['Vue', 'React', 'TypeScript', 'GraphQL', 'Figma']} />
            <AnchorLink href='#about'>
              <Button variant='dark' className='top-distance'>More information</Button>
            </AnchorLink>
          </Col>
          <Col sm={6} className='image-container'>
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
