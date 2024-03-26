import '../styles/Portfolio.css';
import { Container, Row, Col } from 'react-bootstrap';
import ModalImage from "react-modal-image"

function PortfolioItemOpen({ moreInfo }) {
    return (
        <div className='portfolio-open'>
           <Container fluid="md">
            <Row style={{marginTop: '10px'}}>
              <p>{moreInfo.info}</p>
              <p style={{fontSize: '15px'}}>
                  <b>Areas and technologies:</b> <br />
                  <i>{moreInfo.area} <br />
                  {moreInfo.skills}
                  </i>
              </p>
            </Row>
            <Row style={{marginTop: '20px'}}>
                  {moreInfo.images.map((src, index) => (
                    <Col style={{paddingBottom: '20px'}} sm={4} key={index}>
                      <div style={{justifyContent: 'center', display: 'flex'}}>
                      <ModalImage
                        small={src}
                        large={src}
                        alt=""
                      />
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
              {moreInfo.url && 
              <p style={{fontSize: '16px'}}>
                See <a className='link' href={moreInfo.url} target="_blank"> project website</a> for more information
              </p>}
            </Row>
            </Container>
        </div>     
    )  
    ;}

export default PortfolioItemOpen;