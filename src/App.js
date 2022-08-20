import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import HomePage from "./Home/HomePage.js"
import HowItWorks from "./HowItWorks/HowItWorks.js";
import AboutUs from "./AboutUs/AboutUs.js"
import Contact from './Contact/Contact.js';
import MyNavBar from "./MyNavBar/MyNavBar.js"
import LogIn from "./LogIn/LogIn.js"
import Main from './Main/Main';
import DemoSite from "./DemoSite"
import React, { Component }  from 'react';
// function App() {
//   return (
//     <div>
//       <section id="MyNavBar">
//         <MyNavBar />
//       </section>

//       <section id="HomePage">
//         <HomePage />
//       </section>

//       <section id="HowItWorks">
//       <HowItWorks />
//       </section>

//       <section id="AboutUs">
//         <AboutUs />
//       </section>
      
//       <section id="Contact">
//         <Contact />
//       </section>
//       <section id="LogIn">
//         <LogIn />
//       </section>
//     </div>
//   );
// }

function App(){
  // console.log('hh')
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/login">
            <LogIn />
          </Route>
          <Route path="/demo">
            <DemoSite />
          </Route>
        </Switch>
    </Router>
    // <Main />
  );
}

export default App;
