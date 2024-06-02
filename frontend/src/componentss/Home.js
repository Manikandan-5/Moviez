import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Search from './Search';
import { Movie } from './/Movie';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <>
    <section id="nav">
    <Navbar expand="lg">
      <Container fluid>
        <Link to='/'className='text-docoration-none'>
        <Navbar.Brand className='h1 text-white fw-bold'>Moviz.in</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Search/>
          <Button className='btn btn-success me-3'><i class="bi bi-telephone-fill "></i> 0987654321</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Movie/>
    </section>
    </>
  )
}
