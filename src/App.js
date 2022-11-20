import './App.css';
import HomePage from './components/HomePage/HomePage.js';
import {useEffect} from 'react';
import $ from "jquery";

function App() {

  useEffect(()=>{
    let vh = $(window).innerHeight();
    let oh = $('.random').outerHeight();
    console.log(vh,oh);
    if(oh<vh){
      console.log("This is done")
      $('.footer').addClass('fixed-bottom');
    }
  });
  
  return (
    <div class='random'>
      <HomePage />
    </div>
  );
}

export default App;

