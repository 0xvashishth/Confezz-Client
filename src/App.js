import './App.css';
import HomePage from './components/HomePage/HomePage.js';
import {useEffect} from 'react';
import $ from "jquery";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Logout from './components/Logout/Logout'

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
      <Router>
        <div>
          <Route exact path='/logout' component={Logout} />
        </div>
      </Router>
    </div>
  );
}

export default App;

