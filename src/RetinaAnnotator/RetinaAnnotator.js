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
        this.images = [
            {
              "src": "./images/2_06032012101_2.jpg",
              "name": "2_06032012101_2.jpg"
            },
            {
              "src": "./images/2_06032012106_2.jpg",
              "name": "2_06032012106_2.jpg"
            },
            {
              "src": "./images/2_06032012201_2.jpg",
              "name": "2_06032012201_2.jpg"
            },
            {
              "src": "./images/2_06032012202_2.jpg",
              "name": "2_06032012202_2.jpg"
            },
            {
              "src": "./images/2_06032017901_1.jpg",
              "name": "2_06032017901_1.jpg"
            }
          ];
          this.state = {annotatorOpen: false, selectedImage: 0};
          this.OpenAnnotatorClicked = this.OpenAnnotatorClicked.bind(this);
    }
    
    OpenAnnotatorClicked(labels, multi_label) {

        this.multi_label = multi_label;
        this.labels = labels;
        // this.images = something from backennd
        this.setState({
          annotatorOpen: true
        });
    }

    render(){

        

        // return(
        //     <Router>
        //         <Switch>
        //             <Route exact path="/annotator/setting">
        //                 <AnnotatorSetting />
        //             </Route>
        //             <Route path="/annotator/draw">
        //                 <ErrorBoundaryDialog>
        //                     <Annotator
        //                     onExit={(output) => {
        //                         console.log(output.images)
        //                     }}
        //                     taskDescription="Classify Retina Images."
        //                     enabledTools={["select"]}
        //                     regionClsList={this.labels}
        //                     images={this.images}
        //                     allowComments={true}
        //                     selectedImage={0}
        //                     />
        //                 </ErrorBoundaryDialog>
        //             </Route>
        //         </Switch>
        //     </Router>
        // );

        return(
            <div>
                {this.state.annotatorOpen ?(
                  <ErrorBoundaryDialog>
                        <Annotator
                          onExit={(output) => {
                              console.log(output.images)
                          }}
                          taskDescription="Classify Retina Images."
                          enabledTools={["select"]}
                          regionClsList={this.labels}
                          images={this.images}
                          allowComments={true}
                          selectedImage={this.state.selectedImage}
                          onNextImage={ () => {
                            this.setState({selectedImage: (this.state.selectedImage + 1) % this.images.length})
                          }}
                          onPrevImage={ () => {
                            this.setState({selectedImage: (this.state.selectedImage - 1 + this.images.length) % this.images.length})
                          }}
                          />
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