import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const NavBar = () => {
  return (
    <header>
     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Innovatic Tecno Tech</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Inicio</Nav.Link>
      <Nav.Link href="#pricing">Tienda</Nav.Link>
      <NavDropdown title="Catalogo" id="collasible-nav-catalogo">
        <NavDropdown.Item href="#action/3.1">Consolas</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Pc Gamer</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Notebook</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Netbooks</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">Registrarse</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Iniciar Sesion
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

    </header>
  )
}

export default NavBar