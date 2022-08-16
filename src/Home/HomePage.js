import React from 'react';
import ReactDOM from 'react-dom';
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

class HomePage extends React.Component{
    constructor(){
        super();
    }

    render(){

        return (
            <div section="Home">
                <Container fluid style={{background: "#072448", height:"100vh", verticalAlign: "middle"}}>
                    <Row>
                        <Col  md={{span: 6, offset: 3}} style={{display: 'flex', justifyContent: 'center', color: "#F2F2F2"}} className="display-2 align-self-center">
                            <Center>
                                <Container>
                                    <Row>
                                        <Col style={{display: 'flex', justifyContent: 'center', color: "#F2F2F2"}} className="display-2 align-self-center">
                                            <p> Retinal <span style={{color: "#F04B4D"}}>Lesion</span> Annotator</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col style={{display: 'flex', justifyContent: 'center', color: "#F2F2F2"}} className="display-5 align-self-center">
                                        <p> Farabi Hospital </p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col style={{display: 'flex', justifyContent: 'center'}}>
                                        <button type="button" class="btn btn-danger">Log in</button>
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

export default HomePage;