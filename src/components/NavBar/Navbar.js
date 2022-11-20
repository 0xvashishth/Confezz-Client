import React from "react";
import './NavBar.css'
// import axios from '../axios.js';
// import "../../App.css";

// import { Profileinlarge1 } from "../ProfileContent/profile";
// import $ from "jquery";
// import { useState } from "react";
// import { useCookies } from 'react-cookie';

// let countloginsignup = 0

const NavBar = (props) => {

  
  
  return (
    <div class="p-1">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark circle-border">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
      <img src="https://user-images.githubusercontent.com/89864614/202891734-7d82389f-510b-439a-bb53-b423aed61ec9.png" alt="Logo" height="34" class="d-inline-block  align-text-top" />
    Confezz
    </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarColor02">
            <ul class="navbar-nav me-auto">
              <li class="nav-item">
                <a class="nav-link active" href="/">Home
                  <span class="visually-hidden">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#newlink">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#newlink">Privacy Policy</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#newlink" role="button" aria-haspopup="true" aria-expanded="false">Confession</a>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="/confess/create">Create Confession</a>
                  <a class="dropdown-item" href="/confess">View All Confession</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#newlink">Top Confession</a>
                </div>
              </li>
              </ul>
                {props.loginButton}
          </div>

        </div>
      </nav>


    </div>
  );

}

export default NavBar;

