import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import React, { Component }  from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import LogIn from "./LogIn/LogIn.js"
import Main from './Main/Main';
import DemoSite from "./DemoSite";
import RetinaAnnotator from './RetinaAnnotator/RetinaAnnotator';

function App(){
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/login">
            <LogIn />
          </Route>
          <Route path="/annotator_demo">
            <DemoSite />
          </Route>
          <Route path="/annotator">
            <RetinaAnnotator />
          </Route>
          {/* <Route path="/setting">
            <AnnotatorSetting />
          </Route> */}
        </Switch>
    </Router>
    // <Main />
  );
}

export default App;
