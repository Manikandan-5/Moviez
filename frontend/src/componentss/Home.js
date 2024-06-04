import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


export const Home = () => {
  return (
    <>
     <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/"><h2 style={{color:'#f04f23'}}>Moviz</h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link disabled style={{color:'#f04f23'}}>Home</Nav.Link>
            <Nav.Link href="#about"><h5 style={{color:'#f04f23'}}>About</h5></Nav.Link>
            <Nav.Link href="#Follow"><h5 style={{color:'#f04f23'}}>Follow</h5></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    </>
  )
}
