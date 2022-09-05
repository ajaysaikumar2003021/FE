import React from "react";
// import { propTypes } from "react-bootstrap/esm/Image";

const TimeRange = (props) => {

  

  return (
    <div className="container">
      <form action="" className="row g-3">
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">
            Start Date
          </label>
          <input
            type="date"
            class="form-control"
            id="inputEmail4"
            name="startdate"
            onChange={(e) => props.onChange(e)}
          />
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">
            End Date
          </label>
          <input
            type="date"
            class="form-control"
            id="inputPassword4"
            name="enddate"
            onChange={(e) => props.onChange(e)}
          />
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary" onClick={(e) => props.onClick(e)}>
            Get Data
          </button>
        </div>
      </form>
    </div>
  );
};

export default TimeRange;
