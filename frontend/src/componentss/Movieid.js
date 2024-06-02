import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export const Movieid = () => {
  const [product, setproduct] = useState({});
  const {id}=useParams()
  const func=async()=>{
    await fetch("http://localhost:5000/api/v1/movie/"+id)
     .then(res => res.json())
     .then(res=>setproduct(res.products))
     }
 useEffect(()=>{
     func()
 },[id])
  return (
    <>
       <Container>
       <Card style={{ width: '18rem' }} className='text-center'>
      <Card.Img variant="top" src={product.Poster} />
      <Card.Body>
        <Card.Title>{product.Title}</Card.Title>
        <Card.Text>
          {product.Plot}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item><h4>Year</h4>{product.Year}</ListGroup.Item>
        <ListGroup.Item><h4>Rated</h4>{product.Rated}</ListGroup.Item>
        <ListGroup.Item><h4>Runtime</h4>{product.Runtime}</ListGroup.Item>
        <ListGroup.Item><h4>Genre</h4>{product.Genre}</ListGroup.Item>
        <ListGroup.Item><h4>Director</h4>{product.Director}</ListGroup.Item>
        <ListGroup.Item><h4>Actor</h4>{product.Actors}</ListGroup.Item>
        <ListGroup.Item><h4>Language</h4>{product.Language}</ListGroup.Item>
        <ListGroup.Item><h4>Country</h4>{product.Country}</ListGroup.Item>
        <ListGroup.Item><h4>Awards</h4>{product.Awards}</ListGroup.Item>
        <ListGroup.Item><i class="bi bi-star-fill text-warning"></i>{product.imdbRating}/10</ListGroup.Item>
        <ListGroup.Item><h4>{product.movimg}</h4></ListGroup.Item>
      </ListGroup>
    </Card>

    </Container>

    </>
  );
};
