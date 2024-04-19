import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export const Item = ({ product }) => {
  return (
    <Container>
      <Card border="success" style={{ width: '14rem' }}>
        <Card.Img variant="top" src={product.pictureURL} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>${product.price}</Card.Text>
          <Link to={`/item/${product.id}`}>
            <Button variant="success">Ver detalle</Button>
          </Link>
        </Card.Body>
      </Card>
    </Container>
  );
};
