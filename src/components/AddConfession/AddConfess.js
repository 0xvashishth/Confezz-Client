import React from "react";



const AddConfession = (props) => {

  return (
    <div class="container">
      <div class="card">
        <div class="card-body row">
          <div class="col-md-3"></div>
          <div class="col-md-6">
            <div class="form-group">
              <label class="form-label mt-4" for="inputValid">Confession Title</label>
              <input type="text" class="form-control" id="inputValid"/>
            </div>
            <div class="form-group">
              <label for="exampleTextarea" class="form-label mt-2">Confession Description</label>
              <textarea class="form-control" id="exampleTextarea" rows="3"></textarea>
            </div>
            <button type="button" class="mt-2 btn btn-outline-primary">Secondary</button>
          </div>
          <div class="col-md-3"></div>
        </div>
      </div>
    </div>
  );
}

export default AddConfession;