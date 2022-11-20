import React, {useEffect,useState} from 'react';
import "./AllConfessions.css"
import axios from '../axios.js'
import { Link, useParams } from "react-router-dom";
import Loader from '../../components/Loader'

const AllConfessions = (props) => {
  
  // const [loader, setloader] = useState(<div className="d-flex justify-content-center pb-3"><Loader></Loader></div>);
  
  const [allresponse,setAllResponse] = useState([<div className="d-flex justify-content-center pb-3"><Loader></Loader></div>]);
  async function getAllConfession() {
    await axios.get("/api/confess/").then((res) => {
      console.log(res.data.response.length);
      setAllResponse(res.data.response);
      console.log(allresponse);
    })
  }
  useEffect(() => {
    getAllConfession();
  },[]);
  
  return(
    <div class="container p-2">

      {
        allresponse.map((response) => (
            <div class="row">
              <div class="col-md-2"></div>
              <div class="col-md-8">
                <Link className="toLink" to={`/confess/view/${response._id}`}>
                  <div class="card border-dark mb-3">
                      <div class="card-header">To: {response.to}</div>
                    <div class="card-body">
                    <h4 class="card-title">{response.title}</h4>
                    <p class="card-text">{response.description}</p>
                    </div>
                  </div>
                </Link>
              </div>
              <div class="col-md-2"></div>
            </div>
        ))
      }

    </div>
  )
}

export default AllConfessions;