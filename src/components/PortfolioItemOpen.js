import './styles/Portfolio.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import pic from '../resources/placeholder.jpg'

function PortfolioItemOpen({ isOpen }) {
  if(isOpen){
    return (
        <div className='portfolio-open'>
           <Container fluid="md">
                <Row>
                    <Col sm={4}>
                      <div style={{justifyContent: 'center', display: 'flex'}} >
                        <ResponsiveImage
                            src={pic}
                            width={ 200 }
                            height={ 150 } />
                        </div>
                    </Col>
                    <Col sm={4}>
                    <div>
                        <ResponsiveImage
                            src={pic}
                            width={ 200 }
                            height={ 150 } />
                        </div>
                    </Col>
                    <Col sm={4}>
                      <div>
                        <ResponsiveImage
                            src={pic}
                            width={ 200 }
                            height={ 150 } />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm={4}>
                      <div >
                        <ResponsiveImage
                            src={pic}
                            width={ 200 }
                            height={ 150 } />
                        </div>
                    </Col>
                    <Col sm={4}>
                    <div>
                        <ResponsiveImage
                            src={pic}
                            width={ 200 }
                            height={ 150 } />
                        </div>
                    </Col>
                    <Col sm={4}>
                      <div>
                        <ResponsiveImage
                            src={pic}
                            width={ 200 }
                            height={ 150 } />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>     
    )}

    return (
      <div></div>
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