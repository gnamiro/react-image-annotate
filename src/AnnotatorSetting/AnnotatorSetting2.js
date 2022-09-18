import React from "react";

import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import LogedInNavBar from "../MyNavBar/LogedInNavBar"

function AnnotatorSetting() {
  return (
    <div>
        <section id="SettingNavBar">
            <LogedInNavBar />
        </section>
        <section id="Setting">
            <br />
            <br />
            <br />
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col md={{span: 2}}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    </Col>
                    <Col md={{span:5}}>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                        <p>Hello</p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                        <p>Hi</p>
                        </Tab.Pane>
                    </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </section>

    </div>

  );
}

export default AnnotatorSetting;