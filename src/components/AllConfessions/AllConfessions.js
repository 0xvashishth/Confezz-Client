import React from 'react';
import "./AllConfessions.css"


const AllConfessions = (props) => {

  return(
    <div class="container p-2">
      
      <div class="row">
        <div class="col-md-2"></div>
        <div class="col-md-8">
          <div class="card border-dark mb-3">
            <div class="card-header">Header</div>
            <div class="card-body">
            <h4 class="card-title">Dark card title</h4>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet libero et nunc               pulvinar blandit. Nullam eget maximus sem.</p>
            </div>
          </div>
        </div>
        <div class="col-md-2"></div>
      </div>

      <div class="row">
        <div class="col-md-8">
          <div class="card border-dark mb-3">
            <div class="card-header">Header</div>
            <div class="card-body">
            <h4 class="card-title">Dark card title</h4>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet libero et nunc               pulvinar blandit. Nullam eget maximus sem.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-8">
          <div class="card border-dark mb-3">
            <div class="card-header">Header</div>
            <div class="card-body">
            <h4 class="card-title">Dark card title</h4>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet libero et nunc               pulvinar blandit. Nullam eget maximus sem.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default AllConfessions;