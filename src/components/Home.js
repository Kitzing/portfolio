import './styles/Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Skills from './helpers/Skills.js'
import ResponsiveImage from './helpers/ResponsiveImage.js'
import homeimage from '../resources/home_image.svg'

function Home() {
  return (
    <div id="home" className="wrapper">
      <Container className='container' fluid="md">
        <Row className="text-container">
          <Col sm={{span: 6, order: 'first'}} xs={{ order: 'last' }} md={{ order: 'first' }}> <h1>Sara Kitzing</h1>
            <div className='about-container'>
              <p style={{width: '90%'}}>A front-end developer with an interest in UX.  I enjoy the challenge of finding the admirable solution that meets the customers' needs.</p>
            </div>
            <Skills skills={['Vue', 'React', 'TypeScript', 'GraphQL', 'Figma']} />
            <AnchorLink href='#about'>
              <Button variant='dark' className='top-distance'>More information</Button>
            </AnchorLink>
          </Col>
          <Col sm={5} className='image-container'>
            <ResponsiveImage
                src={homeimage}
                width={ 309 }
                height={ 450 } />
      
          </Col>
        </Row>
      </Container>
    </div>
  );
}


export default Home;
