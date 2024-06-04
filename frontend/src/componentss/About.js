import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'

const About = () => {
  return (
    <section id='about'>
    <Container>
<Row>
    <h1 className='text-center'>Welcome <span style={{color:'#f04f23'}}>Cinema</span></h1>
    <Col lg={6} md={6} className='mt-3'>
    <img src={require("./cinem.jpg")}alt="Cimema.Img" className='img-fluid'/>
    </Col>
    <Col lg={6} md={6} className='mt-3 d-flex align-items-center'>
   <h6> Cinema is considered to be the most successful
     form of art in the world. Millions of dollars are spent to make a set and
      shoot a movie. It is the most collaborative expression of art where many actors 
    participate to present the audience with a story. Cinema could be anything 
    ranging from television shows to movies.</h6>
        </Col>
</Row>
    </Container>
    </section>
  )
}

export default About;