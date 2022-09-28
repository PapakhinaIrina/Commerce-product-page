import React from "react";
import {Container, Navbar, Nav} from 'react-bootstrap';


const Header = () => {
  return (
    <header>
      <Navbar bg="light" expand="lg" collapseOnSelect>
      <Container>
        <Navbar.Brand href="#home" className="mr-auto">sneakers</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/collections">Collections</Nav.Link>
            <Nav.Link href="/men">Men</Nav.Link>
            <Nav.Link href="/women">Women</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
          <Nav className="cart">
            <Nav.Link href="/cart"><i className="fas fa-shopping-cart"></i></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  )
}


export default Header;


