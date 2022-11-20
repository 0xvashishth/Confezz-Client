import React from "react";
import './AddConfess.css';
import $ from "jquery";
import axios from '../axios.js'
import { useCookies } from 'react-cookie';
import toast, { Toaster } from "react-hot-toast";

const AddConfession = (props) => {

  const [cookies, setCookie] = useCookies(['user']);
  var ContentToCreate = "Login To Create Confession"

  async function postConfession(){
    var title = $('#confessionTitle').val();
    var to = $('#confessionTo').val();
    var description = $('#confessionDesc').val();
    console.log(title,to,description);
    
    axios.post('/api/confess/new',{
      jwttokenloginuser: cookies.jwttokenloginuser,
      title: title,
      to: to,
      description: description
    }).then((res)=>{toast.success("Confession Added Successfully!");})
    .catch((error)=>console.log(error));
    
  }

  
  if (cookies.jwttokenloginuser) {
  ContentToCreate = <div class="">
        <div class="card"> 
          <Toaster toastOptions={{ style: { fontSize: "14px" } }} />
          <div class="card-body row">
            <div class="col-md-3"></div>
            <div class="col-md-6">
              
              <div class="form-group">
                <label class="form-label mt-4" for="confessionTitle">Confession Title</label>
                <input type="text" class="form-control" id="confessionTitle"/>
              </div>
              <div class="form-group">
                <label class="form-label mt-2" for="confessionTo">To Whom:</label>
                <input type="text" class="form-control" id="confessionTo"/>
              </div>
              <div class="form-group">
                <label for="confessionDesc" class="form-label mt-2">Confession Description</label>
                <textarea class="form-control" id="confessionDesc" rows="3"></textarea>
              </div>
              <a class="mt-2 btn btn-outline-dark" onClick={postConfession}>Add Confession</a>
            </div>
           
          </div>
            
        </div>
    
      </div>
  }
  

  
  return (
    <div class="p-2 border circle-border m-2">
      <div class="m-2">
        <h2>Create Confession</h2>
        <hr/>
      </div>
      {ContentToCreate}
    </div>
  );
}

export default AddConfession;