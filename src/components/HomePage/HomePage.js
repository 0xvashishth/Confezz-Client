import NavBar from '../NavBar/Navbar.js'
import Footer from '../Footer/Footer.js'
import HomePageContent from '../HomePageContent/HomePageContent.js'
import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AddConfession from '../AddConfession/AddConfess'
import AllConfessions from '../AllConfessions/AllConfessions'
import Confession from '../Confession/Confession'
import $ from "jquery";
import axios from '../axios.js';
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useCookies } from 'react-cookie';

const HomePage = (props) => {

  const [cookies, setCookie] = useCookies(['user']);
  
  var buttoncontent;
  if (cookies.jwttokenloginuser) {
    var nickname = cookies.nickname;
    buttoncontent = <a href="/logout" class="btn btn-outline-secondary">Logout</a>
  }else{
    buttoncontent = <button type="button" class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#loginModal" data-bs-whatever="@mdo">Login</button>
  }
  
  const [loginButton, setloginButton] = useState(buttoncontent);

  async function postSignupData(){
    var email = $('#recipient-email').val();
    var password = $('#recipient-pass').val();
    var nickname = "Anonymous";
    console.log(email,password);
    await axios.post('/api/user/signup', {
      email,nickname,password
    }).then((res)=> {
      toast.success("User Created Successfully! Now Login Again 😁")
    }).catch((error)=>{
      toast.error("Something Went Wrong 😥")
    });
  }

    async function postLoginData(){
    var email = $('#recipient-email').val();
    var password = $('#recipient-pass').val();
    console.log(email,password);
    await axios.post('/api/user/login', {
      email,password
    }).then((res)=> {
      toast.success("Logged In Successfully! ", res.data.user.nickname, " 😁");
      setCookie('jwttokenloginuser', res.data.token, {
              path: "/",
              expires: new Date(Date.now() + 60000000),
      });
      setCookie('nickname', res.data.user.nickname, {
              path: "/",
              expires: new Date(Date.now() + 60000000),
      });
      setCookie('uid', res.data._id, {
              path: "/",
              expires: new Date(Date.now() + 60000000),
      });
      setloginButton(<a href="/logout" class="btn btn-outline-secondary">Logout</a>);
    }).catch((error)=>{
      toast.error("Something Went Wrong 😥");
    });
  }
  
  return (
    <div>
      <NavBar loginButton={loginButton} />
      <Toaster toastOptions={{ style: { fontSize: "14px" } }} />
      <Router>
        <div>
          <Route exact path='/' component={HomePageContent} />
          <Route exact path='/confess/create' component={AddConfession} />
          <Route exact path='/confess/' component={AllConfessions} />
          <Route exact path='/confess/view/:cid' component={Confession} />
        </div>
      </Router>
      <Footer></Footer>

      {/* Login/Signup Modal */}
      <div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Login/Signup To Confezz</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form>
                  <label for="recipient-email" class="col-form-label">Email:</label>
                  <input type="text" class="form-control" id="recipient-email" />
                  <label for="recipient-pass" class="col-form-label">Password:</label>
                  <input type="password" class="form-control" id="recipient-pass" />
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-outline-secondary" onClick={postSignupData}>Signup</button>
              <button type="button" class="btn btn-outline-success" onClick={postLoginData}>Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;