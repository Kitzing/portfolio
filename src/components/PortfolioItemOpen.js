import './styles/Portfolio.css';
import { Container, Row, Col } from 'react-bootstrap';

function PortfolioItemOpen({ images }) {
    return (
        <div className='portfolio-open'>
           <Container fluid="md">
                <Row>
                {images.map((src, index) => (
                  <Col sm={4} key={index}>
                  <div style={{justifyContent: 'center', display: 'flex'}} >
                    <ResponsiveImage
                        src={src}
                        width={ 200 }
                        height={ 150 } />
                    </div>
                </Col>
             ))}
                </Row>
            </Container>
        </div>     
    )  
    ;}

    function ResponsiveImage( { src, width, height } ) {
        return (
          <div
            style={ { 
              width,
            } }
            className="responsive-image image">
            <div style={ {
                paddingBottom: ( height / width * 100 ) + '%'
              } } />
            <img
              src={ src }
              className="responsive-image__image" />
          </div>
        );
      }

export default PortfolioItemOpen;