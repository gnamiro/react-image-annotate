import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import { Form, Field, Input } from "@progress/kendo-react-form";


const FORM_ENDPOINT = ""; // TODO - fill on the later step

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };


    return(
        <Container fluid>
            <Row>
                <Col md={{span: 12}}>
                    <form
                    action={FORM_ENDPOINT}
                    onSubmit={handleSubmit}
                    method="POST"
                    target="_blank"
                    >
                        <Row>
                            <Col md={{span:12}}>
                                <input 
                                class="form-control  form-control-lg" 
                                type="text" 
                                placeholder="Your Name" 
                                style={{marginBottom: "2vh"}}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col md={{span:12}}>
                                <input 
                                type="email" 
                                className="form-control  form-control-lg" 
                                id="emailFromContactForm" 
                                placeholder="Email"
                                style={{marginBottom: "2vh"}} 
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col md={{span:12}}>
                                <textarea 
                                className="form-control  form-control-lg"
                                placeholder="Your message" 
                                name="message" 
                                style={{width: "100%", height: "20vh", marginBottom: "2vh", maxHeight: "20vh", minHeight: "20vh"}} 
                                required />
                            </Col>
                        </Row>
                        <Row>
                            <Col md={{span:1, offset:10}}>
                                <input 
                                class="btn btn-primary" 
                                type="submit" 
                                value="Submit" 
                                />
                            </Col>
                        </Row>

                        
                    </form>
                </Col>
            </Row>
        </Container>

    );
};

export default ContactForm;