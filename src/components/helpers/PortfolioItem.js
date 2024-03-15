import '../styles/Portfolio.css';
import { useState } from 'react';
import { Container, Row, Col, Button, Collapse } from 'react-bootstrap';
import PortfolioItemOpen from './PortfolioItemOpen.js';
import PortfolioInfo from './PortfolioInfo.js';
import ResponsiveImage from './ResponsiveImage.js';

function PortfolioItem({ name, date, image, moreImages, info, left }) {
  const [isOpen, setIsOpen] = useState(false)
  if(left){
    return (
      <div className='portfolio-item'>
          <Container fluid="md">
            <Row>
              <Col sm={6}>
                <div className='portfolio-image'>
                  <ResponsiveImage
                      src={image}
                      width={ 500 }
                      height={ 300 } />
                </div>
              </Col>
              <Col sm={6} style={{display: 'flex'}}>
                <div style={{marginTop: 'auto'}}>
                    <PortfolioInfo name={name} date={date} info={info} left={true} />
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                      <Button variant='dark' onClick={() => setIsOpen(!isOpen)} aria-controls='collapseId'>{isOpen ? 'Close' : 'See more'}</Button>
                    </div>
                </div>
              </Col>
            </Row>
          </Container>
          <Collapse in={isOpen}>
            <div id='collapseId'>
              <PortfolioItemOpen images={moreImages} />
            </div>
          </Collapse>
      </div>     
    )}

    return (
      <div className='portfolio-item'>
        <Container fluid="md">
          <Row>
            <Col sm={{span: 6, order: 'first'}} xs={{ order: 'last' }} md={{ order: 'first' }} style={{display: 'flex'}}>
              <div style={{marginTop: 'auto'}}>
                <PortfolioInfo name={name} date={date} info={info} left={false} />
                <div style={{display: 'flex', justifyContent: 'center'}}>
                  <Button variant='dark' onClick={() => setIsOpen(!isOpen)} aria-controls='collapseId'>{isOpen ? 'Close' : 'See more'}</Button>
                </div>
              </div>
            </Col>
                <Col sm={6}>
                <ResponsiveImage
                    src={image}
                    width={ 500 }
                    height={ 300 } />
                </Col>
          </Row>
        </Container>
        <Collapse in={isOpen}>
          <div id='collapseId'>
            <PortfolioItemOpen images={moreImages} />
          </div>
        </Collapse>
      </div>
  )
    
    ;}

export default PortfolioItem;