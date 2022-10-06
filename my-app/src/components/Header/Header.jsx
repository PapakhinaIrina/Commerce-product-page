import React from "react";
import { useState } from "react";
import {Container, Navbar, Nav} from 'react-bootstrap';
import Cart from "../Cart/Cart";
import logo from '../Slider/icons/logo.svg';
import avatar from '../Slider/icons/image-avatar.png';
import './Header.scss';


const Header = (cartProductQuantity, setCartProductQuantity) => {
  const [openCart, setOpenCart] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  // If clicked on the backdrop
  const handleClickOutsideMenu = () => {
    document.querySelector('.menu-icon').setAttribute('aria-expanded', 'false');
    document.querySelector('.navbar').dataset.visible = 'false';
    document.body.style.overflow = 'scroll';
    setOpenMenu(false);
  };

  // Toggle menu handler
  const handleMenuToggle = (e) => {
    const currentAttr = e.target.getAttribute('aria-expanded');
    const mobileNavbar = document.querySelector('.navbar');

    if (currentAttr === 'false') {
      e.target.setAttribute('aria-expanded', 'true');
      mobileNavbar.dataset.visible = 'true';
      document.body.style.overflow = 'hidden';
      setTimeout(() => setOpenMenu(true), 250);
    } else {
      e.target.setAttribute('aria-expanded', 'false');
      mobileNavbar.dataset.visible = 'false';
      document.body.style.overflow = 'scroll';
      setOpenMenu(false);
    }
  };
  return (
    <header>
      <Navbar className="navbar flex" bg="light" expand="lg" collapseOnSelect>
      <Container>
      <div
        onClick={handleMenuToggle}
        className="menu-icon"
        aria-expanded="false"
      ></div>
      <img src={logo} alt="Logo" className="logo"/>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto light-box">
            <Nav.Link  href="/collections">Collections</Nav.Link>
            <Nav.Link  href="/men">Men</Nav.Link>
            <Nav.Link  href="/women">Women</Nav.Link>
            <Nav.Link  href="/about">About</Nav.Link>
            <Nav.Link  href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    {openMenu && (
                <div
                  className="navbar-backdrop"
                  onClick={handleClickOutsideMenu}
                ></div>
              )}      
          <div className="flex icon-container">
            <a
              href="/"
              aria-label="Shopping Cart"
              className="position-relative"
              onClick={(e) => e.preventDefault()}
            >
              <svg
                onClick={() => setOpenCart(true)}
                className="icon-cart"
                width="22"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                  fill="#69707D"
                  fillRule="nonzero"
                />
              </svg>
              {cartProductQuantity > 0 && (
                <span className="cart-basket">{cartProductQuantity}</span>
              )}
            </a>
            <img src={avatar} alt="Avatar" className="avatar" />
          </div>

          {openCart && (
            <Cart
              setOpenCart={setOpenCart}
              cartProductQuantity={cartProductQuantity}
              setCartProductQuantity={setCartProductQuantity}
            />
          )}

    </header>
  )
}


export default Header;


