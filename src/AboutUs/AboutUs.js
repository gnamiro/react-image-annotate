import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css"

import {Container, Row, Col} from "react-bootstrap"

import MyCard from './MyCard';

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
            <div section="AboutUs">
            <Container fluid>
                <Row>
                    <Col md={{span: 6, offset: 3}}>
                        <Center>
                            <Container>
                                <Row className='justify-content-md-center'>
                                    <Col md={{span: 4}}>
                                        <MyCard img="./images/dr_reza_rostami.png" name="Dr. Rostami" role="Supervisor" />
                                    </Col>
                                    <Col md={{span: 4}}>
                                        <MyCard img="./images/dr_vahabi.png" name="Dr. Vahabi" role="Supervisor" />
                                    </Col>
                                    <Col md={{span: 4}}>
                                        <MyCard img="./images/dr_masoudnia.jpeg" name="Dr. Masoudnia" role="Supervisor" />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={{span: 6}}>
                                        <MyCard img="./images/ali_hedayatnia.jpeg" name="A. Hedayatnia" role="Developer" />
                                    </Col>
                                    <Col md={{span: 6}} >
                                        <MyCard img="./images/naeem_ghahramanpour.jpeg" name="N. Ghahramanpour" role="Developer" />
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