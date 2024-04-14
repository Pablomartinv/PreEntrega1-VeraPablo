import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

import { CartWidget } from './CartWidget';

export const NavBar = () => {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand to="/" as={NavLink}>
            Patagonia Trekking
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to="category/bolsas" as={NavLink}>
              Bolsas de dormir
            </Nav.Link>
            <Nav.Link to="category/camping" as={NavLink}>
              Camping
            </Nav.Link>
            <Nav.Link to="category/mochilas" as={NavLink}>
              Mochilas
            </Nav.Link>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
    </>
  );
};
