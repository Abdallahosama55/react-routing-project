import React, { Fragment } from 'react'
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import {Row,Col} from 'react-bootstrap';
import  img1  from '../assets/port2.png';
import  img2  from '../assets/poert1.png';
function Portfello() {
  return (
    <Fragment>
    <h1 className='text-center pt-5'>Hallo Portfello</h1>
    
    
    
    <Container className='p-4 w-75'>
    <Row>
      <Col xs={6} md={4} className='p-2'>
        <Image src={ img1 } width={180} rounded  />
      </Col>
      <Col xs={6} md={4} className='p-2'>
      <Image src={ img2 } width={180}  rounded />
      </Col>
      <Col xs={6} md={4}>
      <Image src={ img1 } width={180}  rounded />
      </Col>
    </Row>
    <Row>
    <Col xs={6} md={4}  className='p-2'>
    <Image src={ img2 } width={180}  rounded />
    </Col>
    <Col xs={6} md={4}  className='p-2'>
    <Image src={ img1 } width={180}  rounded />
    </Col>
    <Col xs={6} md={4}  className='p-2'>
    <Image src={ img2 } width={180}  rounded />
    </Col>
  </Row>
  <Row>
  <Col xs={6} md={4} className='p-2'>
  <Image src={ img1 } width={180}  rounded />
  </Col>
  <Col xs={6} md={4} className='p-2'>
  <Image src={ img1 } width={180}  rounded />
  </Col>
  <Col xs={6} md={4} className='p-2'>
  <Image src={ img2 } width={180}  rounded />
  </Col>
</Row>

  </Container>
    
    
    
    </Fragment>
  )
}

export default Portfello