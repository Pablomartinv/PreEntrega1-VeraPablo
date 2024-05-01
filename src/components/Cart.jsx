import { useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContext';

import { Link } from 'react-router-dom';

import Table from 'react-bootstrap/Table';
import { Button, Container, Row, Col } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

import { getFirestore, collection, addDoc } from 'firebase/firestore';

const initialValues = {
  name: '',
  phone: '',
  email: '',
};

export const Cart = () => {
  const { cartList, clearCartList, removeProduct } = useContext(CartContext);
  const [buyers, setBuyers] = useState(initialValues);
  const [thanks, setThanks] = useState(false);

  const total = () =>
    cartList.reduce((acc, i) => acc + i.price * i.quantity, 0);

  const handleChange = (e) => {
    setBuyers((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = () => {
    const order = {
      buyer: buyers,
      items: cartList,
      total: total(),
    };

    const db = getFirestore();
    const orderCollection = collection(db, 'orders');

    addDoc(orderCollection, order)
      .then(({ id }) => {
        if (id) {
          alert('Su orden: ' + id + 'ha sido completada!');
        }
      })
      .finally(() => {
        setBuyers(initialValues);
        setThanks(true);
      });
  };

  if (cartList.length === 0)
    return (
      <Container>
        <div>
          <h2>No hay productos en el carrito</h2>
          <Link to="/">
            <Button variant="success">ver productos</Button>
          </Link>
        </div>
      </Container>
    );

  return (
    <Container className="mt-4">
      {!thanks ? (
        <>
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
                    <Button
                      variant="success"
                      onClick={() => removeProduct(p.id)}
                    >
                      Eliminar
                    </Button>
                  </td>
                </tr>
              ))}
              <tr>
                <td></td>
                <td></td>
                <td>TOTAL</td>
                <td>{total()}</td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <Button variant="success" onClick={() => clearCartList()}>
                    Vaciar Carrito
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>

          <Form>
            <Row className="g-2">
              <Col md>
                <FloatingLabel label="name" className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="name"
                    value={buyers.name}
                    onChange={handleChange}
                    name="name"
                  />
                </FloatingLabel>
              </Col>
              <Col md>
                <FloatingLabel label="phone" className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="phone"
                    value={buyers.phone}
                    onChange={handleChange}
                    name="phone"
                  />
                </FloatingLabel>
              </Col>
              <Col md>
                <FloatingLabel label="email" className="mb-3">
                  <Form.Control
                    type="email"
                    placeholder="email"
                    value={buyers.email}
                    onChange={handleChange}
                    name="email"
                  />
                </FloatingLabel>
              </Col>
            </Row>
            <Button variant="success" type="button" onClick={handleSubmit}>
              Enviar
            </Button>
          </Form>
        </>
      ) : (
        <>
          <h2>gracias por su compra</h2>
          <Link to="/">
            <Button variant="success">volver a productos</Button>
          </Link>
        </>
      )}
    </Container>
  );
};
