import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import AnnotatorSetting from "./AnnotatorSetting/AnnotatorSetting";

import Annotator from "../Annotator"
import ErrorBoundaryDialog from "../DemoSite/ErrorBoundaryDialog"

import {Container, Row, Col} from "react-bootstrap"

class RetinaAnnotator extends React.Component{
    constructor(props){
        super(props);
        this.labels = ["DR","AMD"];
        this.multi_label = false;
        // this.images = [
        //     {
        //       "src": "./images/2_06032012101_2.jpg",
        //       "name": "2_06032012101_2.jpg"
        //     }
        //   ];
          this.images = [];
          this.state = {annotatorOpen: false};
          this.OpenAnnotatorClicked = this.OpenAnnotatorClicked.bind(this);
    }
    
    OpenAnnotatorClicked(labels, multi_label, imagesPromise) {

        this.multi_label = multi_label;
        this.labels = labels;
        console.log(imagesPromise) //TODO: add imagesName to this
        // this.images = something from backennd
        imagesPromise.then(response => {
          console.log(response)
          response.imagesName.forEach(element => {
            console.log(element)
              const image = {
                'src':  "./images/images/" + element,
                'name': element
              }
              this.images.push(image)
          });

          console.log(this.images)
          this.setState({
            annotatorOpen: true
          });
        })
    }

    render(){

      console.log(this)


        return(
            <div>
                {this.state.annotatorOpen ?(
                    <ErrorBoundaryDialog>
                      <Container fluid>
                        <Row>
                          <Col md={{span:2}}>
                          
                          </Col>
                          <Col md={{span:10}}>
                            <Annotator
                            onExit={(output) => {
                                console.log(output)
                            }}
                            taskDescription="Classify Retina Images."
                            enabledTools={["select"]}
                            regionClsList={this.labels}
                            images={this.images}
                            allowComments={true}
                            selectedImage={0}
                            />
                          </Col>
                        </Row>
                        </Container>
                    </ErrorBoundaryDialog>
                ):(
                    <AnnotatorSetting OpenAnnotatorClicked={this.OpenAnnotatorClicked}/>
                )
                }
            </div>
        );
    }
}


export default RetinaAnnotator;