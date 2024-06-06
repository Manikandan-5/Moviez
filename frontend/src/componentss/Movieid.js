import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {toast } from 'react-toastify';
export const Movieid = () => {
  const [product, setProduct] = useState(null); // Set initial value to null
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch("https://moviez-hgv6.onrender.com/api/v1/movie/" + id);
        if (!response.ok) {
          throw new Error('Failed to fetch product');
        }
        const data = await response.json();
        setProduct(data.products);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };
    fetchProduct();
  }, [id]);

  // Check if product is null before rendering the Carousel
  if (product === null) {
    return <div>Loading...</div>;
  }
  const notify = () =>  toast.success(`Thankyou by : ${product.Title} Movie Team`);
  return (
    <>
      <Container>
        <Carousel interval={2000} className='s05z mt-3'>
          {Object.keys(product.Images || {}).map((key, index) => (
            <Carousel.Item key={index}>
              <img src={product.Images ? product.Images[key] : ''} alt={`Slide ${index + 1}`}  className="d-block w-100"/>
              <Carousel.Caption>
                <h1>{product.Title}</h1>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
        <Row className="d-flex justify-content-center align-items-center">
          <Col lg={6}md={6}>
          <Card style={{ width: '18rem' }} className='text-center mt-5 s05z'>
      <Card.Img variant="top" src={product.Poster} />
      <Card.Body>
        <Card.Title>{product.Title}</Card.Title>
        <Button onClick={notify}><i className="bi bi-hand-thumbs-up"></i></Button>
      </Card.Body>
    </Card>

          </Col>
          <Col lg={6}md={6} >
          <Card style={{ width: '80%' }}className='text-center mt-5 s05z'>
      <Card.Body>
      <Card.Title>Director</Card.Title>
     
        <Card.Text>
          {product.Director}
        </Card.Text>
        <hr/>
        <Card.Title >Writer</Card.Title>
        <Card.Text>
        {product.Writer}
        </Card.Text>
        <hr/>
        <Card.Title>Actors</Card.Title>
        <Card.Text>
          {product.Actors}
          </Card.Text>
          <hr/>
           <Card.Title>Plot</Card.Title>
           <Card.Text>
          {product.Plot}
        </Card.Text>
        <hr/>
        <Card.Title>Language</Card.Title>
           <Card.Text>
          {product.Language}
        </Card.Text>
        <hr/>
        <Card.Title>Awards</Card.Title>
           <Card.Text>
          {product.Awards}
        </Card.Text>
        <hr/>
        <Card.Title>imdbRating</Card.Title>
           <Card.Text>
           <i className="bi bi-star-fill text-warning"></i>{product.imdbRating}/10
        </Card.Text>
      </Card.Body>
    </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
