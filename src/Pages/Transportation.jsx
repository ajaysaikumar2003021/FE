import React, { useState, useEffect } from "react";
import {URL_SERVER} from "../serverurl";
import moment from "moment";

const initial_state = {
  // "reporting_academic_year": "",
  "reporting_period_start_date" : "",
  "reporting_period_end_date" : "",
  "campus_fleet_title" : "",
  "num_vechicles" : "",
  "num_gasoline_vehicles" : "",
  "num_diesel_vehicles" : "",
  "num_gasoline_hybrid_vehicles" : "",
  "num_diesel_hybrid_vehicles" : "",
  "num_plugin_hybrid_vehicles" : "",
  "num_electric_vehicles" : "",
  "num_cng_vehicles": "",
  "num_hydrogen_vehicles" : "",
  "num_b20_vehicles":"",
  "num_b5_vehicles" : ""

}
const Transportation = (props) => {
  const [state, setState] = useState(initial_state);

  const today = moment(new Date()).format("YYYY-MM-DD")
  useEffect(() => {
    setState(prevState => ({
      ...prevState,
      reporting_period_start_date: today
    }))
  }, []);

  const handleInputChange = (e) => {
    console.log(e.target.value);
    console.log("State", state);
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    
    fetch(`${URL_SERVER}/air-and-transportation/campusfleet/`, {
        method: 'POST',
        headers: {  
          'Content-Type': 'application/json', 
          'Authorization': 'Token ' + props.token
        },
        body: JSON.stringify(state)
    })
    .then(res => {
      if(res.ok){
        alert('Form Submitted Successfully!!')
        return res.json()
      }
      else{
        return res.text().then(text => { throw new Error(text) })
        // throw new Error(`Form Not Sumitted with Status Code: ${data.status}`)
      }
    })
    .then(data => {
          console.log(data)
          setState(initial_state)
          
    })
    .catch(err => {
        alert(err)
        console.log(err)
    })
    
  }
  return (
    <>
      <div className="container-fluid">
        <h2 className="curriculum-head">AIR AND TRANSPORTATION</h2>

        <div className="row" style={{ padding: "15px" }}>
          <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 tab-workgroup">
            <ul className="nav flex-column tab-workgroup-list" id="myTab">
              <li className="nav-item">
                <a
                  href="#home"
                  className="nav-link active"
                  data-bs-toggle="tab"
                >
                  Campus Fleet and Sustainable Transit
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 form-curriculum">
            <div className="tab-content">
              <div className="tab-pane fade show active" id="home">
                <h4 className="mt-2 head-academic">
                  Campus Fleet and Sustainable Transit
                </h4>
                <form className="row g-3">
                {/* <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Reporting Academic Year [ Eg: FY22]
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="reporting_academic_year"
                      value={state.reporting_academic_year}
                      onChange={handleInputChange}
                    />
                  </div> */}
                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Reporting Period: Start Date
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      name="reporting_period_start_date"
                      onChange={handleInputChange}
                      value={state.reporting_period_start_date}
                    />
                  </div>

                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Reporting Period: End Date
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      name="reporting_period_end_date"
                      onChange={handleInputChange}
                      value={state.reporting_period_end_date}
                    />
                  </div>

                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Total number of vehicles in the institution’s fleet
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="num_vechicles"
                      onChange={handleInputChange}
                      value={state.num_vechicles}
                    />
                  </div>

                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Number of gasoline-only vehicles in the fleet
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="num_gasoline_vehicles"
                      onChange={handleInputChange}
                      value={state.num_gasoline_vehicles}
                    />
                  </div>

                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Number of diesel-only vehicles in the fleet
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="num_diesel_vehicles"
                      onChange={handleInputChange}
                      value={state.num_diesel_vehicles}
                    />
                  </div>

                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Number of gasoline-electric, non-plug-in hybrid vehicles
                      in the fleet
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="num_gasoline_hybrid_vehicles"
                      onChange={handleInputChange}
                      value={state.num_gasoline_hybrid_vehicles}
                    />
                  </div>

                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Number of diesel-electric, non-plug-in hybrid vehicles in
                      the fleet
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="num_diesel_hybrid_vehicles"
                      onChange={handleInputChange}
                      value={state.num_diesel_hybrid_vehicles}
                    />
                  </div>

                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Number of plug-in hybrid vehicles in the fleet
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="num_plugin_hybrid_vehicles"
                      onChange={handleInputChange}
                      value={state.num_plugin_hybrid_vehicles}
                    />
                  </div>

                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Number of 100 percent electric vehicles (including
                      electric assist utility bicycles and tricycles)
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="num_electric_vehicles"
                      onChange={handleInputChange}
                      value={state.num_electric_vehicles}
                    />
                  </div>

                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Number of vehicles fueled with Compressed Natural Gas
                      (CNG) in the fleet
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="num_cng_vehicles"
                      onChange={handleInputChange}
                      value={state.num_cng_vehicles}
                    />
                  </div>

                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Number of hydrogen fueled vehicles in the fleet
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="num_hydrogen_vehicles"
                      onChange={handleInputChange}
                      value={state.num_hydrogen_vehicles}
                    />
                  </div>

                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Number of vehicles fueled with B20 or higher biofuel for
                      more than 4 months of the year
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="num_b20_vehicles"
                      onChange={handleInputChange}
                      value={state.num_b20_vehicles}
                    />
                  </div>

                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Number of vehicles fueled with locally produced, low-level
                      biofuel (e.g., B5)
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="num_b5_vehicles"
                      onChange={handleInputChange}
                      value={state.num_b5_vehicles}
                    />
                  </div>

                  <div className="col-md-12">
                    <button type="submit" className="btn btn-primary w-100" onClick={handleSubmit}>
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Transportation;
