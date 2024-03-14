import '../styles/Portfolio.css';
import { Container, Row, Col } from 'react-bootstrap';
import ResponsiveImage from './ResponsiveImage.js'

function PortfolioItemOpen({ images }) {
    return (
        <div className='portfolio-open'>
           <Container fluid="md">
                <Row>
                  {images.map((src, index) => (
                    <Col sm={4} key={index}>
                      <div style={{justifyContent: 'center', display: 'flex'}}>
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

export default PortfolioItemOpen;