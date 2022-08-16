import React from "react"
import { Container, Row, Col } from "react-bootstrap";
import Address from "./Address.js";
import ConntactForm from "./ContactForm.js"


function Center({children}) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        {children}
      </div>
    );
  }

class Contact extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <Container fluid>
                <Row  style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}>
                    <Col>
                        <Row className='justify-content-md-center'>
                            <Col md={{span: 2}}>
                                <img src="./images/nbic-logo.jpeg" />
                            </Col>
                            <Col md={{spna:4}}>
                                <ConntactForm />
                            </Col>
                            <Col md={{span: 4}}>
                                <Address />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );

        // return(
        //     <Address />
        // );
    }
}

export default Contact;