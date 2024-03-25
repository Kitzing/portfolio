import '../styles/Portfolio.css';
import { Container, Row, Col } from 'react-bootstrap';
import ResponsiveImage from './ResponsiveImage.js'

function PortfolioItemOpen({ moreInfo }) {
    return (
        <div className='portfolio-open'>
           <Container fluid="md">
            <Row>
              <p>{moreInfo.info}</p>
              <p style={{fontStyle: 'italic', marginBottom: '5px'}}>{moreInfo.area}</p>
            <p style={{fontStyle: 'italic'}}>{moreInfo.skills}</p>
            </Row>
            <Row>
                  {moreInfo.images.map((src, index) => (
                    <Col sm={4} key={index}>
                      <div style={{justifyContent: 'center', display: 'flex'}}>
                        <ResponsiveImage
                            src={src}
                            width={ moreInfo.width ?? 500 }
                            height={ moreInfo.height } />
                      </div>
                    </Col>
                  ))}
                </Row>
            <Row style={{marginTop: '20px'}}>
              <Col sm={8}>
                <p style={{fontWeight: 'bold', marginBottom: '5px'}}>{moreInfo.process != '' ? 'Process' : ''}</p>
                <p>{moreInfo.process}</p>
              </Col>
              <Col sm={4}>
              <p style={{fontWeight: 'bold', marginBottom: '5px'}}>{moreInfo.methods.length > 0 ? 'Methods' : ''}</p>
              <ul>
                {moreInfo.methods.map((method, index) => (
                  <li key={index}>{method}</li>
                ))}
              </ul>
              </Col>
            </Row>
            </Container>
        </div>     
    )  
    ;}

export default PortfolioItemOpen;