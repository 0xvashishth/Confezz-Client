import React from "react";
import './Confession.css'
import $ from "jquery";
import axios from '../axios.js'
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { useCookies } from 'react-cookie';
import { Redirect } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Loader from '../../components/Loader'
// import "../../App.css";
// import { Profileinlarge1 } from "../ProfileContent/profile";
// import $ from "jquery";
// import { useCookies } from 'react-cookie';
// position-fixed to fix the bottom footer
// let countloginsignup = 0

const Confession = (props) => {

  const { cid } = useParams();

  const [cookies, setCookie] = useCookies(['user']);

  const [confession, setConfession] = useState({});
  const [comments, setComment] = useState([]);
  const [loading,setLoading] = useState(true);
  
  async function addComment() {
    if (cookies.jwttokenloginuser) {
      var commentdata = $('#commentdata').val();
      console.log("Commment click");
      await axios.post(`/api/comment/comment`, {
        id: cid,
        author: cookies.nickname,
        comment: commentdata
      }).then((res) => {
        toast.success("Comment Added Successfully!")
        getConfession();
      })
    } else {
      toast.error("Login to comment!");
    }
  }

  async function getConfession() {
    await axios.get(`/api/confess/c/${cid}`).then((res) => {
      console.log(res.data.confession);
      setConfession(res.data.confession);
      setComment(res.data.comments);
      setLoading(false);
    })
  }

  useEffect(() => {
    getConfession();
    
  }, []);

  return (
    <div class="p-2 container">
      
      <Toaster toastOptions={{ style: { fontSize: "14px" } }} />
      <div class="card">
        {loading ? <div className="d-flex justify-content-center"><Loader></Loader></div> : 
        <div class="card-body">
          <h3 class="card-title">{confession.title}</h3>
          <h5 class="card-subtitle mb-2 text-muted">To : {confession.to}</h5>
          <p class="card-text">{confession.description}</p>
        </div>  
        }
     
          
      </div>
      <div class="pt-4">
        <div>
          <h4>
            Comments
          </h4>
        </div>
        {loading ? <div className="d-flex justify-content-center"><Loader></Loader></div> :
        (comments.map((comment) => (
          <div class="alert alert-dismissible alert-secondary" key={comment._id}>
            {comment.comment}
          </div>
        )))
        }

      </div>
      <div class="p-1">
        <div class="form-group">
          <h4 class="form-label mt-4">Post Your Comment Below</h4>
          <div class="form-group">
            <div class="input-group mb-3">
              <input type="text" class="form-control" id="commentdata" aria-label="Amount (to the nearest dollar)" spellcheck="false" data-ms-editor="true" />
              <span class="input-group-text" onClick={addComment}><i class="fa-regular fa-paper-plane"></i></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

export default Confession;

