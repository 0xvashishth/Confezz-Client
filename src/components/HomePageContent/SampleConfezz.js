import React from "react";
// import "../../App.css";

// import { Profileinlarge1 } from "../ProfileContent/profile";
// import $ from "jquery";
// import { useState } from "react";
// import { useCookies } from 'react-cookie';
// position-fixed to fix the bottom footer
// let countloginsignup = 0

const SampleConfezz = (props) => {

  return (
    <div class="p-1">
      <div class="border p-3 mt-5" style={{ borderRadius: "18px" }}>
        <h2 class="row pb-2">
          <div class="pb-2 d-flex justify-content-around">
            <h2 class="">Recent Confessions !</h2>
          </div>
          <hr />
        </h2>
        <div class="row row-cols-1 row-cols-md-4 row-cols-sm-2 g-3">
          <div class="col">
            <div class="card h-100 border-dark ">
              <div class="card-header">Evento Feature #1</div>
              <div class="card-body">
                <h4 class="card-title">Create Unlimited Events</h4>
                <p class="card-text">Evento provides unlimited events on creating the account in Evento.</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100 border-dark ">
              <div class="card-header">Evento Feature #2</div>
              <div class="card-body">
                <h4 class="card-title">Get All Registrations In One Click</h4>
                <p class="card-text">You will be able to access all the registration that are done in your respective events.</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100 border-dark ">
              <div class="card-header">Evento Feature #3</div>
              <div class="card-body">
                <h4 class="card-title">Get Email Service</h4>
                <p class="card-text">Send Emails to those who are registered in the events with just one click.You can configure the message according to the mail.</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100 border-dark ">
              <div class="card-header">Evento Feature #4</div>
              <div class="card-body">
                <h4 class="card-title">Much More</h4>
                <p class="card-text">Get all other features and get other features on signing up to the Evento.</p>
              </div>
            </div>
          </div>
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

