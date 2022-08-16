import React from 'react';

import "bootstrap/dist/css/bootstrap.min.css"

import {Container, Row, Col} from "react-bootstrap"

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

  
class HowItWorks extends React.Component {
    constructor(){
        super();
    }

    render(){
        return (
            <div section="HowItWorks">
                <Container fluid>
                    <Row>
                        <Col md={{span: 6, offset: 3}}>
                            <Center>
                                <Container>
                                    <Row className='justify-content-md-center'>
                                        <Col md={{span: 6}} style={{alignItems: 'center',display: 'flex',justifyContent: 'center',}}>
                                            <img src="./images/retina.png" style={ {width: "25vh"} } />
                                        </Col>
                                        <Col md={{span: 6}} style={{display: 'flex', justifyContent: 'center', color: "#black"}} className="h3 align-self-center">
                                            <p>Select an image</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={{span: 6}} style={{display: 'flex', justifyContent: 'center', color: "#black"}} className="h3 align-self-center">
                                            <p>Annotate it</p>
                                        </Col>
                                        <Col md={{span: 6}} style={{alignItems: 'center',display: 'flex',justifyContent: 'center',}}>
                                            <img src="./images/retina.png" style={ {width: "25vh"} } />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={{span: 6}} style={{alignItems: 'center',display: 'flex',justifyContent: 'center',}}>
                                            <img src="./images/retina.png"  style={ {width: "25vh"} } />
                                        </Col>
                                        <Col md={{span: 6}} style={{display: 'flex', justifyContent: 'center', color: "#black"}} className="h3 align-self-center">
                                            <p>Submit</p>
                                        </Col>
                                    </Row>
                                </Container>
                            </Center>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default HowItWorks;