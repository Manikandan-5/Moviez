import React, { useEffect, useState } from 'react'
import Movies from './Movies'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Movie = () => {
    const [products, setproducts] = useState([])
    const func=async()=>{
       await fetch("http://localhost:5500")
        .then(res => res.json())
        .then(res=>setproducts(res.products))
        }
    useEffect(()=>{
        func()
    },[])
  return (
    <>
    <Container >
    <Row className='text-center'>
    {
        products.map((product,index)=>{
            return <Col md={6} lg={4} key={index}>
                <Movies product={product}/>
    </Col>
        }
        )
}
    </Row>
</Container>
    </>
  )
}
