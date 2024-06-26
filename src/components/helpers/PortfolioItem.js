import '../styles/Portfolio.css';
import { useState } from 'react';
import { Container, Row, Col, Button, Collapse } from 'react-bootstrap';
import PortfolioItemOpen from './PortfolioItemOpen.js';
import PortfolioInfo from './PortfolioInfo.js';
import ResponsiveImage from './ResponsiveImage.js';

function PortfolioItem({ item, left }) {
  const [isOpen, setIsOpen] = useState(false)
  const randomisedId = Math.random().toString(36).slice(2)

  if(left) {
    return (
      <div className='portfolio-item'>
        <Container fluid="md">
          <Row>
            <Col sm={6}>
              <div className='portfolio-image'>
                <ResponsiveImage
                    src={item.image.src}
                    alt={item.image.alt}
                    width={ 600 }
                    height={ 400 } />
              </div>
            </Col>
            <Col sm={6} style={{display: 'flex'}}>
              <div style={{marginTop: 'auto'}}>
                  <PortfolioInfo name={item.name} date={item.date} info={item.info} left={true} />
                  <div style={{display: 'flex', justifyContent: 'center'}}>
                    <Button variant='dark' 
                      onClick={() => setIsOpen(!isOpen)} 
                      aria-controls={randomisedId} 
                      aria-label={isOpen ? 'Close' : 'See more'}>
                      {isOpen ? 'Close' : 'See more'}
                    </Button>
                  </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Collapse id={randomisedId} in={isOpen}>
          <div aria-hidden={!isOpen}>
            <PortfolioItemOpen moreInfo={item.moreInfo} />
          </div>
        </Collapse>
      </div>     
    )
  }
    return (
      <div className='portfolio-item'>
        <Container fluid="md">
          <Row>
            <Col sm={{span: 6, order: 'first'}} xs={{ order: 'last' }} md={{ order: 'first' }} style={{display: 'flex'}}>
              <div style={{marginTop: 'auto'}}>
                <PortfolioInfo name={item.name} date={item.date} info={item.info} left={false} />
                <div style={{display: 'flex', justifyContent: 'center'}}>
                  <Button variant='dark' 
                    onClick={() => setIsOpen(!isOpen)} 
                    aria-controls={randomisedId} 
                    aria-label={isOpen ? 'Close' : 'See more'}>
                    {isOpen ? 'Close' : 'See more'}
                  </Button>
                </div>
              </div>
            </Col>
            <Col sm={6}>
              <ResponsiveImage
                  src={item.image.src}
                  alt={item.image.alt}
                  width={ 600 }
                  height={ 400 } />
            </Col>
          </Row>
        </Container>
        <Collapse id={randomisedId} in={isOpen}>
          <div aria-hidden={!isOpen}>
            <PortfolioItemOpen moreInfo={item.moreInfo} />
          </div>
        </Collapse>
      </div>
  );
}

export default PortfolioItem;