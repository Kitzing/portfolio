import './styles/Portfolio.css';
import { Container, Row, Col, Button, Collapse } from 'react-bootstrap';
import pic from '../resources/placeholder.jpg'
import PortfolioItemOpen from './PortfolioItemOpen.js';
import { useState } from 'react';

function PortfolioItem({ name, date, info, left }) {
  const [isOpen, setIsOpen] = useState(false)
  if(left){
    return (
        <div className='portfolio-item'>
            <Container fluid="md">
                <Row>
                    <Col sm={6}>
                      <div className='portfolio-image'>
                        <ResponsiveImage
                            src={pic}
                            width={ 500 }
                            height={ 300 } />
                        </div>
                    </Col>
                    <Col sm={6} style={{position: 'relative'}}>
                    <div style={{position: 'absolute', bottom: "0px", left: "20px"}}>
                      <div className='portfolio-info'>
                        <h2>{name}</h2>
                        <p className='date-text'>{date}</p>
                        <p>{info}</p>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                          <Button variant='dark' onClick={() => setIsOpen(!isOpen)} aria-controls='collapseId'>{isOpen ? 'Close' : 'See more'}</Button>
                        </div>
                      </div>
                      </div>
                    </Col>
                </Row>
            </Container>
            <Collapse in={isOpen}>
              <div id='collapseId'>
              <PortfolioItemOpen images={[pic, pic, pic]} />
              </div>
            </Collapse>
            
        </div>     
    )}

    return (
      <div className='portfolio-item'>
          <Container fluid="md">
              <Row>
                  <Col sm={6} style={{position: 'relative'}}>
                    <div
                    style={{position: 'absolute', bottom: "0px", right: "20px"}}>
                      <div className='portfolio-info right-align'>
                            <h2>{name}</h2>
                            <p className='right-align date-text'>{date}</p>
                            <p className='right-align'>{info}</p>
                          <div style={{display: 'flex', justifyContent: 'center'}}>
                          <Button variant='dark' onClick={() => setIsOpen(!isOpen)} aria-controls='collapseId'>{isOpen ? 'Close' : 'See more'}</Button>
                          </div>
                          </div>
                      </div>
                  </Col>
                  <Col sm={6}>
                  <ResponsiveImage
                      src={pic}
                      width={ 500 }
                      height={ 300 } />
                  </Col>
              </Row>
          </Container>
          <Collapse in={isOpen}>
              <div id='collapseId'>
              <PortfolioItemOpen images={[pic, pic, pic]} />
              </div>
            </Collapse>
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

export default PortfolioItem;