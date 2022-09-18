import React from "react";
import {Container, Col, Row} from "react-bootstrap";
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';

import ClassificationForm from "./ClassificationForm";

class SettingForm extends React.Component {
    constructor(){
        super();
    }

    render(){
        return (
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row style={{paddingTop: "1.25rem"}}>
                    <Col md={{span: 2}}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                        <Nav.Link eventKey="first">Classification</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="second" disabled>Detection</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    </Col>
                    <Col md={{span:10}}>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <ClassificationForm OpenAnnotatorClicked={this.props.OpenAnnotatorClicked}/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                        <p>Detection</p>
                        </Tab.Pane>
                    </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        );
    }
}

export default SettingForm;