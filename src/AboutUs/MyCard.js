import React from "react";
import { MDBContainer } from "mdb-react-ui-kit";

// import "bootstrap/dist/css/bootstrap.min.css"

// import {Container, Row, Col} from "react-bootstrap"

class MyCard extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
          <MDBContainer className="my-5 d-flex flex-column justify-content-center align-items-center">
          <img
            src={this.props.img}
            className="rounded-circle mb-3"
            style={{ width: "150px" }}
            alt="Avatar"
          />
    
          <h5 className="mb-2">
            <strong>{this.props.name}</strong>
          </h5>
          <p className="text-muted">
            {this.props.role} 
          </p>
        </MDBContainer>
        );
    }
}


export default MyCard;