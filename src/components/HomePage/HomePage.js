import NavBar from '../NavBar/Navbar.js'
import Footer from '../Footer/Footer.js'
import HomePageContent from '../HomePageContent/HomePageContent.js'
import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AddConfession from '../AddConfession/AddConfess'
import AllConfessions from '../AllConfessions/AllConfessions'
import Confession from '../Confession/Confession'

const HomePage = (props) => {

  return (
    <div>
      <NavBar></NavBar>
      <Router>
        <div>
          <Route exact path='/' component={HomePageContent} />
          <Route exact path='/confess/create' component={AddConfession} />
          <Route exact path='/confess/' component={AllConfessions} />
          <Route exact path='/confess/view/:id' component={Confession} />
        </div>
      </Router>
      <Footer></Footer>

      {/* Login Modal */}
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Login To Confezz</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="mb-3">
                  <label for="recipient-email" class="col-form-label">Email:</label>
                  <input type="text" class="form-control" id="recipient-email" />
                </div>
                <div class="mb-3">
                  <label for="recipient-pass" class="col-form-label">Password:</label>
                  <input type="password" class="form-control" id="recipient-pass" />
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;