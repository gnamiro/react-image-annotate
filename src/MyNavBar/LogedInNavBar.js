import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { Component }  from 'react';

import {Link} from "react-scroll";

import "./LogedInNavBar.css" 

function LogedInNavBar() {
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
            <p className='my_app_name'> Retinal <span style={{color: "#F04B4D"}}>Lesion</span> Annotator</p>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href="/login" className='my_nvbar'>
              Log in
            {/* <Link className='my_nvbar'  activeClass="active" to="login" spy={true} smooth={true} offset={0} duration={500}>Log in</Link> */}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default LogedInNavBar;