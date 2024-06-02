import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


function Movies({product}) {
 const des= product.Plot.length>21?product.Plot.substring(0,50):product.Plot
  return (
    
    <Card style={{ width: '18rem',marginTop:'10px' }}>
      <Card.Img variant="top" src={product.Poster} fluid/>
      <Card.Body>
        <Card.Title>{product.Title}</Card.Title>
        <Card.Text>
         {des}...
         <h3>Year </h3>
         {product.Year}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item><h4>Actors : </h4>{product.Actors}</ListGroup.Item>
        <ListGroup.Item><h4>Director : </h4>{product.Director}</ListGroup.Item>
        <ListGroup.Item><i class="bi bi-star-fill text-warning"></i>{product.imdbRating}/10</ListGroup.Item>
      </ListGroup>
      <Card.Body>
      <ListGroup.Item><h4>{product.movimg}</h4></ListGroup.Item>
        <Button className="btn btn-success"><Link to={`/movie/${product._id}`} className='text-decoration-none text-white'>Watch Now</Link></Button>
      </Card.Body>
    </Card>
  );
}

export default Movies;