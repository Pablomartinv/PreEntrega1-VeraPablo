import { Button, Card, Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { ItemCount } from './ItemCount';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

export const ItemDetail = (product) => {
  const [quantityAdded, setQuantityAdded] = useState(0);

  const { addToCart, cartList } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);

    const item = {
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: quantity,
      image: product.pictureURL,
    };

    addToCart(item, quantity);
  };

  return (
    <Container key={product.id}>
      <Card.Header>
        {quantityAdded > 0 ? (
          <Link to="/cart">
            <Button variant="warning">Finalizar compra</Button>
          </Link>
        ) : (
          <ItemCount stock={product.stock} initial={1} onAdd={handleOnAdd} />
        )}
      </Card.Header>

      <Card border="warning" style={{ width: '70rem' }}>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>${product.price}</Card.Text>
          <Card.Text>Stock disponible: {product.stock} unidades</Card.Text>
          <Card.Text>{product.description}</Card.Text>
        </Card.Body>
        <Row>
          <Col>
            <Card.Img src={product.pictureURL} />
          </Col>
          <Col>
            <Card.Img src={product.pictureDetail1} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Card.Img src={product.pictureDetail2} />
          </Col>
          <Col>
            <Card.Img src={product.pictureDetail3} />
          </Col>
        </Row>
      </Card>
    </Container>
  );
};
