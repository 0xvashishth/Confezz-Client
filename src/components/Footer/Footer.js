import React from "react";
import './Footer.css'
// import "../../App.css";

// import { Profileinlarge1 } from "../ProfileContent/profile";
// import $ from "jquery";
// import { useState } from "react";
// import { useCookies } from 'react-cookie';
// position-fixed to fix the bottom footer
// let countloginsignup = 0

const Footer = (props) => {

  return (
      <footer class="p-1 text-muted footer bg-dark">
        <div class="container container-footer">
          &copy; 2022 - Confezz By <a href="https://github.com/vasu-1/">Vashishth Patel</a> - <a href="#privacy">Privacy</a>
        </div>
      </footer>
  );

}

export default Footer;

