import React, {useEffect} from "react";
import { useCookies } from 'react-cookie';
import { Redirect } from "react-router-dom";

const Logout = (props) => {

  const [cookies, removeCookie] = useCookies(['user']);
  
  useEffect(() => {

  if (cookies.jwttokenloginuser) {
    removeCookie('jwttokenloginuser', '');
  }
  if (cookies.uid) {
     removeCookie('uid', '');
  }
  if (cookies.nickname) {
     removeCookie('nickname', '');
  }
}, []);

  
  return (
    <div>
      <h1>Logout</h1>
      <Redirect to="/" />
    </div>
  );
}

export default Logout;