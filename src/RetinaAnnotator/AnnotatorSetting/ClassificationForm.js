import React, {useState} from "react";
import {Container, Row, Col, Form, Button} from "react-bootstrap";
import { TagsInput } from "react-tag-input-component";
import "./ClassificationForm.css";
import { getImagesName } from "../../utils/get-data-from-server";

function  formSubmitHandler(OpenAnnotatorClicked, event, labels){
    event.preventDefault();
    
    const multi_label = event.target[labels.length+1].checked;
    let imageNames = getImagesName()

    OpenAnnotatorClicked(labels, multi_label, imageNames)
}

function ClassificationForm(props) {

    const [selected, setSelected] = useState(["DR", "AMD", "Retinal Vascular Disorder", "Glaucoma", "Others"]);

    return(
        <Container fluid id="classification_form">
            <Row>
                <Col className="text-center" md={{span:12}}>
                    <h1 className="text-center" style={{paddingTop: "2rem"}}>Classification Setting</h1>
                </Col>
            </Row>
            
            <form onSubmit={(event) => {formSubmitHandler(props.OpenAnnotatorClicked, event, selected)}}>
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
                        label="multilabel"
                        value="multilabel"
                        target="multilabel"
                        />
                    </Col>
                </Row>
                <Row style={{paddingTop: "2rem"}}>
                    <Col  md={{span:6, offset:3}} className="center text-center">
                        <Button as="input" type="submit" value="Open Annotator"/>
                    </Col>
                </Row>
            </form>
        </Container>
    );
}

export default ClassificationForm;