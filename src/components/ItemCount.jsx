import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

export const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const agregarProducto = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const quitarProducto = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <Container>
      <Button variant="outline-success" onClick={quitarProducto}>
        Quitar
      </Button>
      <span id="quantity">{quantity}</span>
      <Button variant="outline-success" onClick={agregarProducto}>
        Agregar
      </Button>
      <Button
        id="buttonAdd"
        variant="outline-warning"
        onClick={() => onAdd(quantity)}
        disabled={!stock}
      >
        Agregar al carrito
      </Button>
    </Container>
  );
};
