import React, {useState, useEffect} from "react";
import {URL_SERVER} from "../serverurl";
import moment from "moment";

const initial_state = {
  // "reporting_academic_year": "",
  "product_name" : "",
  "product_type" : "",
  "single_ingredient" : "",
  "product_description" : "",
  "recognized_standard_met" : "",
  "sfsc" : "",
  "reporting_period_start_date" : "",
  "reporting_period_end_date" : "",
  "expenditure" : "",
  "food_service_provider" : ""
}

const Food = (props) => {

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
    
    fetch(`${URL_SERVER}/food-and-waste/foodbeveragepurchasing/`, {
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
        <h2 className="curriculum-head">
          Food And Waste
        </h2>

        <div className="row" style={{ padding: "15px" }}>
          <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 tab-workgroup">
            <ul className="nav flex-column tab-workgroup-list" id="myTab">
              <li className="nav-item">
                <a
                  href="#home"
                  className="nav-link active"
                  data-bs-toggle="tab"
                >
                  Sustainable Food and Beverage Purchase Inventory
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 form-curriculum">
            <div className="tab-content">
              <div className="tab-pane fade show active" id="home">
                <h4 className="mt-2 head-academic">
                  Sustainable Food and Beverage Purchase Inventory
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
                      Product name, label, or brand
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="product_name"
                      onChange={handleInputChange}
                      value={state.product_name}
                    />
                  </div>

                  <div className="col-md-12">
                    <label for="inputState" className="form-label fw-bold">
                      Product Type (Select One)
                    </label>
                    <select id="inputState" 
                      className="form-select"
                      name="product_type"
                      onChange={handleInputChange}
                      value={state.product_type}
                    >
                      <option selected>Choose...</option>
                      <option value="Sustainably-ethically produced">Sustainably-ethically produced</option>
                      <option value="Plant-based">Plant-based</option>
                    </select>
                  </div>

                  <div className="col-md-12">
                    <label for="inputPassword4" className="form-label fw-bold">
                      Single-Ingredient Product
                    </label>
                    <div className="form-check ">
                      <input
                        className="form-check-input"
                        type="radio"
                        id="inlineRadio1"
                        name="single_ingredient"
                        value="True"
                        checked={state.single_ingredient === "True"}
                        onChange={handleInputChange}
                      />
                      <label className="form-check-label " for="inlineRadio1">
                        Yes
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="single_ingredient"
                        id="inlineRadio2"
                        value="False"
                        checked={state.single_ingredient === "False"}
                        onChange={handleInputChange}
                      />
                      <label className="form-check-label" for="inlineRadio2">
                        No
                      </label>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Product Description
                    </label>
                    <textarea
                      type="text"
                      className="form-control"
                      name="product_description"
                      onChange={handleInputChange}
                      value={state.product_description}
                    ></textarea>
                  </div>

                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Recognized sustainability standard met (e.g., third party
                      certification or ecolabel)
                    </label>
                    <textarea
                      type="text"
                      className="form-control"
                      name="recognized_standard_met"
                      onChange={handleInputChange}
                      value={state.recognized_standard_met}
                    ></textarea>
                  </div>

                  <div className="col-md-12">
                    <label for="inputPassword4" className="form-label fw-bold">
                      Sourced through a short food supply chain (SFSC) that
                      provides full traceability from identified farms, boats,
                      or harvesters to the institution
                    </label>
                    <div className="form-check ">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="sfsc"
                        id="inlineRadio1"
                        value="True"
                        checked={state.sfsc === "True"}
                        onChange={handleInputChange}
                      />
                      <label className="form-check-label " for="inlineRadio1">
                        Yes
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="sfsc"
                        id="inlineRadio2"
                        value="False"
                        checked={state.sfsc === "False"}
                        onChange={handleInputChange}  
                      />
                      <label className="form-check-label" for="inlineRadio2">
                        No
                      </label>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <label for="inputState" className="form-label fw-bold">
                    Offered by what type of Food Service Provider or Source
                    </label>
                    <select 
                      id="inputState" 
                      className="form-select" 
                      name="food_service_provider"
                      onChange={handleInputChange}
                      value={state.food_service_provider}
                      >
                      <option selected>Choose...</option>
                      <option 
                        selected 
                        value="Dining operations and catering services operated by the
                        institution"
                        >
                        Dining operations and catering services operated by the
                        institution
                      </option>
                      <option
                        value="Food service operations operated by a contractor"
                      >
                        Dining operations and catering services operated by a
                        contractor
                      </option>
                      <option
                        value="Student-run food/catering services"
                      >Student-run food/catering services</option>
                      <option
                        value="Franchises (e.g., regional or global brands)"
                      >
                        Franchises (e.g., regional or global brands)
                      </option>
                      <option
                        value="Convenience stores"
                      >
                      Convenience stores
                      </option>
                      <option
                        value="Vending services"
                      >Vending services</option>
                      <option
                        value="Concessions"
                      >
                      Concessions
                      </option>
                    </select>
                  </div>

                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Expenditures for reporting period:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="expenditure"
                      onChange={handleInputChange}
                      value={state.expenditure}
                    />
                  </div>

                  
                  <div className="col-12">
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

export default Food;
