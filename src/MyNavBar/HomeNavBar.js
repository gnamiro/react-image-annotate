import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { Component }  from 'react';

import {Link} from "react-scroll";

import "./HomeNavBar.css" 

function HomeNavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed='top'>
      <Container fluid>
        <Navbar.Brand href="/">
          <img src="./images/nbic_logo.png" className="nvbar_logo_img" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className='navbar'>
          <Nav className="me-auto">
            {/* <Nav.Link href="#HomePage"> */}
              <Link className='my_nvbar' activeClass="active" to="HomePage" spy={true} smooth={true} offset={0} duration={500}>Home</Link>
            {/* </Nav.Link> */}
            
            {/* <Nav.Link href="#HowItWorks"> */}
              <Link className='my_nvbar'  activeClass="active" to="HowItWorks" spy={true} smooth={true} offset={0} duration={500}>How It Works</Link>
            {/* </Nav.Link> */}

            {/* <Nav.Link href="#AboutUs"> */}
              <Link className='my_nvbar'  activeClass="active" to="AboutUs" spy={true} smooth={true} offset={0} duration={500}>About Us</Link>
            {/* </Nav.Link> */}

            {/* <Nav.Link href="#Contact"> */}
              <Link className='my_nvbar'  activeClass="active" to="Contact" spy={true} smooth={true} offset={0} duration={500}>Contact</Link>
            {/* </Nav.Link> */}
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href="/annotator" className='my_nvbar'>
              Annotator
            {/* <Link className='my_nvbar'  activeClass="active" to="login" spy={true} smooth={true} offset={0} duration={500}>Log in</Link> */}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HomeNavBar;