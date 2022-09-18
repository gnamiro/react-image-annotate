import React, {useState} from "react";
import {Container, Row, Col, Form, Button} from "react-bootstrap";
import { TagsInput } from "react-tag-input-component";
import "./ClassificationForm.css";

function ClassificationForm() {

    const [selected, setSelected] = useState(["DR", "AMD", "Retinal Vascular Disorder", "Glaucoma", "Others"]);

    return(
        <Container fluid id="classification_form">
            <Row>
                <Col className="text-center" md={{span:12}}>
                    <h1 className="text-center" style={{paddingTop: "2rem"}}>Classification Setting</h1>
                </Col>
            </Row>
            
            <Form>
                <Row style={{paddingTop: "2rem"}}>
                    <Col md={{span: 1, offset:3}}>
                        <Form.Label>
                            Labels:
                        </Form.Label>
                    </Col>
                    <Col md={{span: 5}}>
                        <TagsInput
                        value={selected}
                        onChange={setSelected}
                        name="label"
                        placeHolder="New Label"
                        />
                    </Col>
                </Row>
                <Row style={{paddingTop: "2rem"}}>
                    <Col md={{span:2, offset:3}}>
                        <Form.Check 
                        type="switch"
                        id="custom-switch"
                        label="Mulit-Label"
                        />
                    </Col>
                </Row>
                <Row style={{paddingTop: "2rem"}}>
                    <Col  md={{span:6, offset:3}} className="center text-center">
                        <Button as="input" type="submit" value="Open Annotator" />
                    </Col>
                </Row>
            </Form>
        </Container>
    );
}

export default ClassificationForm;