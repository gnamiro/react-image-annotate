import React, { Component }  from 'react';
import {Container, Row, Col} from "react-bootstrap";

import {Link} from "react-scroll";

import "./LogedInNavBar.css" 

function LogInNavBar() {
  return (
    <Container fluid className='login_navbar'>
      <Row>
        <Col md={{span:1}}>
          <img src='./images/nbic_logo.png' className="nvbar_logo_img" />
        </Col>
        <Col md={{span: 4}}>
          <p className='my_app_name'> Retinal <span style={{color: "#F04B4D"}}>Lesion</span> Annotator</p>
        </Col>
        <Col>
          <p>Account</p>
        </Col>
      </Row>
    </Container>
  );
}

export default LogInNavBar;