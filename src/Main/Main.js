// import logo from './logo.svg';
// import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

import HomePage from "../Home/HomePage.js"
import HowItWorks from "../HowItWorks/HowItWorks.js";
import AboutUs from "../AboutUs/AboutUs.js"
import Contact from '../Contact/Contact.js';
import HomeNavBar from "../MyNavBar/HomeNavBar.js"

import React, { Component }  from 'react';

function Main() {
  return (
    <div>
      <section id="MyNavBar">
        <HomeNavBar />
      </section>

      <section id="HomePage">
        <HomePage />
      </section>

      <section id="HowItWorks">
      <HowItWorks />
      </section>

      <section id="AboutUs">
        <AboutUs />
      </section>
      
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
}

export default Main;
