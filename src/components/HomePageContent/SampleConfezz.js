import React, { useState, useEffect } from "react";
import axios from '../axios.js'
import Loader from '../../components/Loader'

const SampleConfezz = (props) => {

  const [responses, setResponses] = useState();
  const [loader, setloader] = useState(<div className="d-flex justify-content-center pb-3"><Loader></Loader></div>);

  var sampleconfess = [];

  async function getSampleConfession() {
    await axios.get('/api/confess/').then((res) => {
      var len;
      if (res.data.response.length <= 4) {
        len = res.data.response.length;
      } else {
        len = 4;
      }
      for (let i = 0; i < len; i++) {
        sampleconfess[i] = <div class='col'>
          <div class='card h-100 border-dark'>
            <div class='card-header'>To: {res.data.response[i].to}</div>
            <div class='card-body'>
              <h4 class='card-title'>{res.data.response[i].title}</h4>
              <p class='card-text'>{res.data.response[i].description}</p>
            </div>
          </div>
        </div>
      }
      setResponses(sampleconfess);
      setloader();
    });
  }

  useEffect(() => {
    getSampleConfession();
  }, []);



  return (
    <div class="p-1">
      <div class="border p-3 mt-5" style={{ borderRadius: "18px" }}>
        <h2 class="row pb-2">
          <div class="pb-2 d-flex justify-content-around">
            <h2 class="">Recent Confessions !</h2>
          </div>
          <hr />
        </h2>
        {loader}
        <div class="row row-cols-1 row-cols-md-4 row-cols-sm-2 g-3">
          {responses}
        </div>
        <hr />
        <h2 class="row pt-2">
          <div class="d-flex justify-content-around">
            <a href="/confess/" class="btn btn-secondary">View All Confession</a>
          </div>
        </h2>
      </div>
    </div>
  );

}

export default SampleConfezz;

