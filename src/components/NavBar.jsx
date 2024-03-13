import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import { CartWidget } from "./CartWidget";

export const NavBar = ()=>{
    return (
        <>
        <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Patagonia Trekking</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#">Montaña</Nav.Link>
            <Nav.Link href="#">Camping</Nav.Link>
            <Nav.Link href="#">Invierno</Nav.Link>
          </Nav>
          <CartWidget/>
        </Container>
        </Navbar>
        
        </>
    )
};