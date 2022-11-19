import NavBar from '../NavBar/Navbar.js'
import Footer from '../Footer/Footer.js'
import HomePageContent from '../HomePageContent/HomePageContent.js'
import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AddConfession from '../AddConfession/AddConfess'


const HomePage = (props) => {

  return (
    <div>
      <NavBar></NavBar>
      <Router>
        <div>
          <Route exact path='/' component={HomePageContent} />
          <Route exact path='/confess/create' component={AddConfession} />
          <Route exact path='/confess/' component={AddConfession} />
        </div>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default HomePage;