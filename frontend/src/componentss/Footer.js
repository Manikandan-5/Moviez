import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
const Footer = () => {
  return (
    <>
    <section id="Follow">
    <Container fluid>
        <Row className='bg-black text-white mt-5'>
    <Col lg={6} md={6}className="text-center p-3">
       <h6>Copyright @ 2024:Designed by<span>Moviz.com</span></h6> 
    </Col>
    <Col lg={6} md={6} className='d-flex gap-3 justify-content-center  p-3'>
    <i className="bi bi-github"></i>
    <i className="bi bi-instagram"></i>
    <i className="bi bi-twitter"></i>
  <i className="bi bi-youtube"></i>
  <i className="bi bi-facebook"></i>
    </Col>
        </Row>
    </Container>
    </section>
    </>
  )
}

export default Footer;