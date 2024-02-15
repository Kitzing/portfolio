import './styles/Portfolio.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import pic from '../resources/placeholder.jpg'

function PortfolioItem() {
    return (
        <div>
            <Container fluid="md">
                <Row>
                    <Col className='image' sm={6}>
                    <ResponsiveImage
                        src={pic}
                        width={ 300 }
                        height={ 450 } />
                    </Col>
                    <Col sm={6}>
                      <h2>Name</h2>
                      <p>Date</p>
                      <p>Information</p>
                      <Button variant='dark'>Learn more</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );}

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

export default PortfolioItem;