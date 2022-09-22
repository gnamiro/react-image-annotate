import React, {useState} from "react"
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
        // this.images = useS
        this.images = [];
    
        this.state = {annotatorOpen: false, selectedImage: 0};
        this.OpenAnnotatorClicked = this.OpenAnnotatorClicked.bind(this);
        this.onSelectJumpHandler = this.onSelectJumpHandler.bind(this);
    }
    
    OpenAnnotatorClicked(labels, multi_label, imagesPromise) {

        this.multi_label = multi_label;
        this.labels = labels;
        console.log(imagesPromise)
        imagesPromise.then(response => {
          response.imagesName.forEach(element => {
              let image = {
                'src':  "./images/images/" + element['image-name'],
                'name': element['image-name'],
                'cls': element['cls'],
                'comment': element['comment']
              }
              this.images.push(image)
              
          });

          console.log(this.images)

          this.setState({
            annotatorOpen: true
          });
        })
    }

    onSelectJumpHandler(selectedImageName){

      let selectedImage = this.images.filter( (image) =>{
        return image.name == selectedImageName
      })[0]

      let selectedImageIndex = this.images.indexOf(selectedImage)

      this.setState({selectedImage: selectedImageIndex})
    }

    render(){

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
                          allImages={this.images}
                          onSelectJump={this.onSelectJumpHandler}
                          selectedImageIndex={this.state.selectedImage}
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