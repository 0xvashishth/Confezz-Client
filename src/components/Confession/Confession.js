import React from "react";
import './Confession.css'
import $ from "jquery";
import axios from '../axios.js'
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from "react";

// import "../../App.css";
// import { Profileinlarge1 } from "../ProfileContent/profile";
// import $ from "jquery";
// import { useCookies } from 'react-cookie';
// position-fixed to fix the bottom footer
// let countloginsignup = 0

const Confession = (props) => {

  const {cid} = useParams();

  const [confession,setConfession] = useState();
  
  async function getConfession(){
    await axios.get(`/api/confess/c/${cid}`).then((res) => {
      console.log(res.data);
      // console.log("Len-> ", res.data.response.length);
      setAllResponse(res.data);
      console.
      // console.log(allresponse);
    })
  }

   useEffect(() => {
     getConfession();
   },[]);

  return (
    <div class="p-2">
      <div class="card">
  <div class="card-body">
    <h3 class="card-title">Card title</h3>
    <h5 class="card-subtitle mb-2 text-muted">Card subtitle</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#link" class="card-link">Card link</a>
    <a href="#link" class="card-link">Another link</a>
  </div>
</div>
      <div class="pt-4">
        <div>
          <h4>
            Comments
          </h4>
        </div>
        <div class="alert alert-dismissible alert-secondary">
          <strong>Well done!</strong> You successfully read <a href="#new" class="alert-link">this important message</a>.
        </div>
          <div class="alert alert-dismissible alert-success">
        <strong>Well done!</strong> You successfully read <a href="#new" class="alert-link">this important message</a>.
      </div>
        <div class="alert alert-dismissible alert-primary">
        <strong>Well done!</strong> You successfully read <a href="#new" class="alert-link">this important message</a>.
      </div>
      </div>
      <div class="p-1">
        <div class="form-group">
  <h4 class="form-label mt-4">Post Your Comment Below</h4>
  <div class="form-group">
    <div class="input-group mb-3">
      <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" spellcheck="false" data-ms-editor="true" />
      <span class="input-group-text"><i class="fa-regular fa-paper-plane"></i></span>
    </div>
  </div>
</div>
      </div>
    </div>
  );

}

export default Confession;

