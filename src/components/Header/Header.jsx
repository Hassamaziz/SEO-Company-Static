import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../../Assets/Images/logo.png';
import './Header.css';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" fixed="top" className="custom-navbar ">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="Company Logo" className="img-fluid nav-logo-mobile" />
          <img src={logo} alt="Company Logo" className="img-fluid nav-logo-desktop" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNavDropdown" className="custom-toggler" />
        <Navbar.Collapse id="navbarNavDropdown" className="custom-collapse">
          <Nav className="ml-auto  nav-right" data-easing="easeInOutExpo" data-speed="1250" data-offset="65">
            <Nav.Item className="nav-custom-link">
              <Nav.Link href="/">Home <i className="icon ion-ios-arrow-forward icon-mobile"></i></Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-custom-link">
              <Nav.Link href="#features">Features <i className="icon ion-ios-arrow-forward icon-mobile"></i></Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-custom-link">
              <Nav.Link href="#testimonials">Testimonials <i className="icon ion-ios-arrow-forward icon-mobile"></i></Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-custom-link">
              <Nav.Link href="#pricing">Pricing <i className="icon ion-ios-arrow-forward icon-mobile"></i></Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-custom-link btn btn-demo-small">
              <Nav.Link href="#">Try for Free <i className="icon ion-ios-arrow-forward icon-mobile"></i></Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
