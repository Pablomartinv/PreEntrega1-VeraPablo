import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import { Button, Container } from 'react-bootstrap';

export const Cart = () => {
  const { cartList, clearCartList, removeProduct, totalQuantity } =
    useContext(CartContext);

  if (totalQuantity === 0) {
    return (
      <Container>
        <h2>No hay productos en el carrito</h2>
        <Link to="/">
          <Button variant="warning">Ir a Productos</Button>
        </Link>
      </Container>
    );
  }

  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio por unidad</th>
            <th>Cantidad</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cartList.map((p) => (
            <tr key={p.id}>
              <td>{p.title}</td>
              <td>{p.price}</td>
              <td>{p.quantity}</td>
              <td>{p.price * p.quantity}</td>
              <td>
                <Button variant="success" onClick={() => removeProduct(p.id)}>
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>TOTAL</td>
            <td>
              <Button variant="success" onClick={() => clearCartList()}>
                Vaciar Carrito
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};
