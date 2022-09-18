import React from "react";

import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import LogedInNavBar from "../../MyNavBar/LogedInNavBar"
import SettingForm from "./SettingForm"

// import Annotator from "../Annotator"
// import ErrorBoundaryDialog from "../DemoSite/ErrorBoundaryDialog"

function AnnotatorSetting(props) {
  return (
    <div>
        <section id="navbar">
            <LogedInNavBar />
        </section>
        <section id="setting">
            <br />
            <br />
            <br />
            <SettingForm OpenAnnotatorClicked={props.OpenAnnotatorClicked}/>
        </section>

    </div>

  );
}

// function AnnotatorSetting() {

//   const classification_labels = ["DR", "AMD", "Retinal Vascular Disorder", "Glaucoma", "Others"];
//   const images = [
//     {
//       "src": "./images/2_06032012101_2.jpg",
//       "name": "2_06032012101_2.jpg"
//     },
//     {
//       "src": "./images/2_06032012106_2.jpg",
//       "name": "2_06032012106_2.jpg"
//     },
//     {
//       "src": "./images/2_06032012201_2.jpg",
//       "name": "2_06032012201_2.jpg"
//     },
//     {
//       "src": "./images/2_06032012202_2.jpg",
//       "name": "2_06032012202_2.jpg"
//     },
//     {
//       "src": "./images/2_06032017901_1.jpg",
//       "name": "2_06032017901_1.jpg"
//     }
//   ];

//   return (
//     <div>
        
//         <ErrorBoundaryDialog
//         >
//           <Annotator
//             onExit={(output) => {
//               console.log(output.images)
//             }}
//             taskDescription="Classify Retina Images."
//             enabledTools={["select"]}
//             regionClsList={classification_labels}
//             images={images}
//             allowComments={true}
//             selectedImage={0}
//           />
//         </ErrorBoundaryDialog>
//     </div>

//   );
// }

export default AnnotatorSetting;