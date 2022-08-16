import React from "react";
import "./MyNavBar.css"

class MyNavBar extends React.Component{
    constructor(){
        super();
    }

    render(){
        return (
            <nav class="navbar navbar-expand-lg fixed-top ">
                <div class="container-fluid">
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#AboutUs">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#HowItWorks">How It Works</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#AboutUs">About Us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#Contact">Contact</a>
                    </li>
                    </ul>
                </div>
                </div>
          </nav>
        );
    }
}

export default MyNavBar;