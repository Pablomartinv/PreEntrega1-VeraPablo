import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export const Item = ({ product }) => {
  return (
    <Container id="cardItem">
      <Card border="success">
        <div id="cardImage">
          <Card.Img variant="top" src={product.pictureURL} />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>${product.price}</Card.Text>
          <Link to={`/item/${product.id}`}>
            <Button variant="outline-success">Ver detalle</Button>
          </Link>
        </Card.Body>
      </Card>
    </Container>
  );
};
