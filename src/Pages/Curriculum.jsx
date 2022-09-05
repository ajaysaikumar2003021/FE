import React, { useState, useEffect, useRef } from "react";
import CreatableSelect from 'react-select/creatable';
import { URL_SERVER } from "../serverurl";
import moment from "moment";

let departments= {
  "College of Science and Engineering": [
    "Biology and Biotechnology",
    "Computing Sciences",
    "Engineering",
    "Environmental Science",
    "Mathematics and Statistics",
    "Physical and Applied Sciences"

  ],
  "College of Business": [
    "Accounting",
    "Decision Sciences, Economics, Finance and Marketing",
    "Healthcare Administration",
    "Management",
    "Management Information Systems"
  ],
  "College of Education": [
    "Counseling, Special Education and Diversity",
    "Curriculum and Instruction",
    "Educational Leadership and Policy Analysis",
    "Literacy, Library and Learning Technologies"

  ],
  "College of Human Sciences and Humanities": [
    "Clinical, Health, and Applied Sciences",
    "Communication and Studio Arts",
    "Liberal Arts",
    "Psychology",
    "Social and Cultural Sciences"

  ]
}

function getColleges(){
  const colleges = [];
  for(const c in departments){
    colleges.push(c)
  }
  return colleges;
}

function getDepartments(college){
  return departments[college];
}

const initial_stateAC = {
  sust_course_title: '',
  college_or_unit : '',
  department : '',
  level_of_course : '',
  course_type : '',
  // reporting_academic_year : '',
  reporting_period_start_date : '',
  reporting_period_end_date : '',
  sections_offered : '',
  description : '',

}


const initial_stateAP = {
  'sust_focused_academic_program' : '',
    'college_or_unit' : '',
    'department': '', 
    'level_of_program' : '',
    'program_type' : '',
    'description' : '',
    'website_url' : '',
    'poc_name' : '',
    'poc_email' : '',
    'poc_phone' : '',
    'adopted_sust_focused_learning_outcome' : '',
    'requires_successful_completion_of_sust_focused_course' : '',
    // 'reporting_academic_year' : '',
    'year_program_started' : '',
    reporting_period_start_date: '',
    reporting_period_end_date: '',
    'program_active' : '',
}

const initial_stateCLL = {
  'project_name' : '',
  'poc_name' : '',
  'poc_email' : '',
  'poc_phone' : '',
  'project_type' : '',
  'contribution_to_impact_area' : '',
  'description' : '',
  'project_date' : '',
  // 'reporting_academic_year' : '',
  'reporting_period_start_date' : '',
  'reporting_period_end_date' : '',
  'project_url' : '',
  'supporting_document' :''
}

// const impact_area_options = [
//   {value: '', label: 'Choose...'},
//   {value: 'Campus Engagement', label: 'Campus Engagement'},
//   {value: 'Public Engagement', label: 'Public Engagement'},
//   {value: 'Air & Climate', label: 'Air & Climate'},
//   {value: 'Buildings', label: 'Buildings'},
//   {value: 'Energy', label: 'Energy'},
//   {value: 'Food & Dining', label: 'Food & Dining'},
//   {value: 'Grounds', label: 'Grounds'},
//   {value: 'Purchasing', label: 'Purchasing'},
//   {value: 'Transportation', label: 'Transportation'},
//   {value: 'Waste', label: 'Waste'},
//   {value: 'Water', label: 'Water'},
//   {value: 'Coordination & Planning', label: 'Coordination & Planning'},
//   {value: 'Diversity & Affordability', label: 'Diversity & Affordability'},
//   {value: 'Investment & Finance', label: 'Investment & Finance'},
//   {value: 'Wellbeing & Work', label: 'Wellbeing & Work'}
// ]

const impact_area_vals = []

const Curriculum = (props) => {
  const [stateAC, setStateAC] = useState(initial_stateAC);
  const [stateAP, setStateAP] = useState(initial_stateAP);
  const [stateCLL, setStateCLL] = useState(initial_stateCLL);
  const [stateImp_area, setStateImp_area] = useState([])

  const cll_file_ref = useRef(null)

  var impact_area_vals = []
  const today = moment(new Date()).format("YYYY-MM-DD")
  useEffect(() => {
    setStateAC(prevState => ({
      ...prevState,
      reporting_period_start_date: today
    }))

    setStateAP(prevState => ({
      ...prevState,
      reporting_period_start_date: today
    }))

    setStateCLL(prevState => ({
      ...prevState,
      reporting_period_start_date: today
    }))
  }, [])
  const handleImpactAreaChange = (e) => {

    if (stateImp_area.length < 3 && !stateImp_area.includes(e.target.value)  ) {
      // impact_area_vals.push(e.target.value)
      console.log("in if block")
      setStateImp_area(prev => ([
          ...prev,
          e.target.value
        ]
      ))
    }
    else{
      console.log("in else block")
      impact_area_vals = stateImp_area.filter((v) => {
        return v !== e.target.value;
      })
      setStateImp_area(impact_area_vals)
      // console.log(stateImp_area);
      // console.log(stateImp_area.includes(e.target.value));
    }

    console.log(stateImp_area);
    console.log(stateImp_area.includes(e.target.value));
  }
  const check_impact_area_vals = (v) => {
    console.log(`checking ${v}`);
    if (impact_area_vals.includes(v))
      return true
    else
      return false
  }
  const handleInputChangeAC = (e) => {
    console.log(e.target.value);
    console.log("State", stateAC);
    setStateAC(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  }
  
  const handleInputChangeAP = (e) => {
    console.log(e.target.value);
    console.log("State", stateAP);
    setStateAP(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  }

  const handleInputChangeCLL = (e) => {
    console.log(e.target.value);
    console.log("State", stateCLL);
    
    setStateCLL(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  }
  
  const handleSubmitAC = (e) => {
    e.preventDefault();
    console.log(stateAC);
    
    fetch(`${URL_SERVER}/curriculum/academiccourse/`, {
        method: 'POST',
        headers: {  
          'Content-Type': 'application/json', 
          'Authorization': 'Token ' + props.token
        },
        body: JSON.stringify(stateAC)
        // body: state
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
        setStateAC(initial_stateAC);
    })
    .catch(err => {
        alert(err)
        console.log(err)
    })
    
  }

  const handleSubmitAP = (e) => {
    e.preventDefault();
    console.log(stateAP);
    
    fetch(`${URL_SERVER}/curriculum/academicprogram/`, {
        method: 'POST',
        headers: {  
          'Content-Type': 'application/json', 
          'Authorization': 'Token ' + props.token
        },
        body: JSON.stringify(stateAP)
        // body: state
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
        setStateAP(initial_stateAP)
    })
    .catch(err => {
        alert(err)
        console.log(err)
    })
    
  }

  const handleSubmitCLL = (e) => {
    e.preventDefault();
    console.log(stateCLL);
    const uploadData = new FormData();
    // uploadData.append(...state);
    stateCLL.contribution_to_impact_area = stateImp_area.join(" , ");

    for (let key in stateCLL) {
      uploadData.append(key, stateCLL[key]);
    }

    console.log("uploadData: ", uploadData);

    fetch(`${URL_SERVER}/curriculum/campusaslivinglab/`, {
        method: 'POST',
        headers: { 
          'Authorization': 'Token ' + props.token
        },
        body: uploadData
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
        setStateCLL(initial_stateCLL)
        setStateImp_area([]);
        cll_file_ref.current.value = '';
    })
    .catch(err => {
        alert(err)
        console.log(err)
    })
    
  }


  return (
    <>
      <div className="container-fluid">
        <h2 className="curriculum-head">Curriculum</h2>

        <div className="row" style={{ padding: "15px" }}>
          <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 tab-workgroup">
            <ul className="nav flex-column tab-workgroup-list" id="myTab">
              <li className="nav-item">
                <a
                  href="#home"
                  className="nav-link active"
                  data-bs-toggle="tab"
                >
                  Sustainability Courses
                </a>
              </li>
              <br />
              <li className="nav-item">
                <a href="#profile" className="nav-link" data-bs-toggle="tab">
                  Campus as a Living Lab
                </a>
              </li>
              <br />
              <li className="nav-item">
                <a href="#messages" className="nav-link" data-bs-toggle="tab">
                Sustainability Programs
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 form-curriculum">
            <div className="tab-content">
            {/* academic cources */}
              <div className="tab-pane fade show active" id="home">
                <h4 className="mt-2 head-academic">Sustainability Courses</h4>
                <form className="row g-3">

                <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                    Reporting Period Start Date
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      name="reporting_period_start_date"
                      value={stateAC.reporting_period_start_date}
                      onChange={handleInputChangeAC}
                      // readonly
                    />
                </div>

                <div className="col-md-12">
                  <label for="inputEmail4" className="form-label fw-bold">
                    Reporting Period End Date
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    name="reporting_period_end_date"
                    value={stateAC.reporting_period_end_date}
                    onChange={handleInputChangeAC}
                    // readonly
                  />
                </div>
                  
                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Sustainability Course Title [Eg: CSCI 5369]
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputEmail4"
                      name="sust_course_title"
                      value={stateAC.sust_course_title}
                      onChange={handleInputChangeAC}
                    />
                  </div>

                  <div className="col-12">
                    <label for="inputAddress" className="form-label fw-bold">
                      Brief Course Description
                    </label>
                    <textarea
                      type="text"
                      className="form-control"
                      id="inputAddress"
                      placeholder=""
                      name="description"
                      value={stateAC.description}
                      onChange={handleInputChangeAC}
                    ></textarea>
                  </div>

                  <div className="col-md-12">
                    <label for="inputState" className="form-label fw-bold">
                      College
                    </label>
                    <select id="inputState" className="form-select"
                      name="college_or_unit"
                      onChange={handleInputChangeAC}
                      value={stateAC.college_or_unit}
                    >
                      <option selected>Choose...</option>
                      
                      {
                        getColleges().map((c, i) =>(
                          <option key={i} value={c}>{c}</option>
                        ))
                      }
                    </select>
                  </div>
                  <div className="col-md-12">
                    <label for="inputState" className="form-label fw-bold">
                      Department
                    </label>
                    <select id="inputState" className="form-select"
                      name="department"
                      onChange={handleInputChangeAC}
                      value={stateAC.department}
                    >
                      <option selected>Choose...</option>
                    
                      {
                        getDepartments(stateAC.college_or_unit)?.map((d, i) =>(
                          <option key={i} value={d}>{d}</option>
                        ))
                      }
                    </select>
                  </div>
                  <div className="col-md-12">
                    <label for="inputPassword4" className="form-label fw-bold">
                      Level of Course
                    </label>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="level_of_course"
                        id="inlineRadio1"
                        value="ug"
                        onChange={handleInputChangeAC}
                        selected={stateAC.level_of_course === "ug"}
                        checked={stateAC.level_of_course === "ug"}
                      />
                      <label className="form-check-label " for="inlineRadio1">
                        Undergraduate
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="level_of_course"
                        id="inlineRadio2"
                        value="pg"
                        onChange={handleInputChangeAC}
                        selected={stateAC.level_of_course === "pg"}
                        checked={stateAC.level_of_course === "pg"}
                      />
                      <label className="form-check-label" for="inlineRadio2">
                        Graduate
                      </label>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <label for="inputState" className="form-label fw-bold">
                      Course Type
                    </label>
                    <select 
                      id="inputState" 
                      className="form-select"
                      name="course_type"
                      onChange={handleInputChangeAC}
                      value={stateAC.course_type}  
                    >
                      <option selected>Choose...</option>
                      <option value="Sustainability-Focused">Sustainability-Focused</option>
                      <option value="Sustainability-Inclusive">Sustainability-Inclusive</option>
                    </select>
                  </div>
                  
                  <div className="col-md-12">
                    <label className="form-label fw-bold">No. of Sections Offered</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputEmail4"
                      name="sections_offered"
                      value={stateAC.sections_offered}
                      onChange={handleInputChangeAC}
                    />
                  </div>

                  

                  <div className="col-12">
                    <button type="submit" className="btn btn-primary w-100" onClick={handleSubmitAC}>
                      Submit
                    </button>
                  </div>
                </form>
              </div>

              {/* campus as a living lab */}
              <div className="tab-pane fade" id="profile">
                <h4 className="mt-2 head-academic">Campus as a Living Lab</h4>
                <form className="row g-3">
                  
                <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                    Reporting Period Start Date
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      name="reporting_period_start_date"
                      value={stateCLL.reporting_period_start_date}
                      onChange={handleInputChangeCLL}
                      // readonly
                    />
                </div>

                <div className="col-md-12">
                  <label for="inputEmail4" className="form-label fw-bold">
                    Reporting Period End Date
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    name="reporting_period_end_date"
                    value={stateCLL.reporting_period_end_date}
                    onChange={handleInputChangeCLL}
                    // readonly
                  />
                </div>
                  
                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Project Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputEmail4"
                      name="project_name"
                      value={stateCLL.project_name}
                      onChange={handleInputChangeCLL}
                    />
                  </div>
                  
                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Provide a brief description of the projects and how they
                      contribute to understanding or advancing sustainability in
                      relation to the impact area:
                    </label>
                    <textarea
                      type="text"
                      className="form-control"
                      id="inputEmail4"
                      name="description"
                      value={stateCLL.description}
                      onChange={handleInputChangeCLL}
                    ></textarea>
                  </div>

                  {/* Point of Contact (POC)  UPDATE */}
                  
                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Point of Contact (POC)  Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputEmail4"
                      name="poc_name"
                      value={stateCLL.poc_name}
                      onChange={handleInputChangeCLL}
                    ></input>
                  </div>
                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Point of Contact (POC)  Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail4"
                      name="poc_email"
                      value={stateCLL.poc_email}
                      onChange={handleInputChangeCLL}
                    ></input>
                  </div>
                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Point of Contact (POC)  Phone
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputEmail4"
                      name="poc_phone"
                      value={stateCLL.poc_phone}
                      onChange={handleInputChangeCLL}
                    ></input>
                  </div>
                  {/* Point of Contact (POC)  UPDATE */}


                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Type of Project ( eg: class Projects, thesis projects, term projects, published projects )
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputEmail4"
                      name="project_type"
                      value={stateCLL.project_type}
                      onChange={handleInputChangeCLL}
                    ></input>
                  </div>
                 
                  <div className="col-md-12">
                    <label for="inputPassword4" className="form-label fw-bold">
                    Contributes to the following impact areas ( upto 3 can be selected )
                    </label>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="imp_area"
                        value="Campus Engagement"
                        onChange={handleImpactAreaChange}
                        checked={stateImp_area.includes("Campus Engagement")}
                      />
                      <label className="form-check-label " for="inlineRadio1">
                      Campus Engagement
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="imp_area"
                        value="Public Engagement"
                        onChange={handleImpactAreaChange}
                        checked={stateImp_area.includes("Public Engagement")}
                      />
                      <label className="form-check-label " for="inlineRadio1">
                      Public Engagement
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="imp_area"
                        value="Air and Climate"
                        onChange={handleImpactAreaChange}
                        checked={stateImp_area.includes("Air and Climate")}
                      />
                      <label className="form-check-label " for="inlineRadio1">
                      Air and Climate
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="imp_area"
                        value="Buildings"
                        onChange={handleImpactAreaChange}
                        checked={stateImp_area.includes("Buildings")}
                      />
                      <label className="form-check-label " for="inlineRadio1">
                      Buildings
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="imp_area"
                        value="Energy"
                        onChange={handleImpactAreaChange}
                        checked={stateImp_area.includes("Energy")}
                      />
                      <label className="form-check-label " for="inlineRadio1">
                      Energy
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="imp_area"
                        value="Food and Dining"
                        onChange={handleImpactAreaChange}
                        checked={stateImp_area.includes("Food and Dining")}
                      />
                      <label className="form-check-label " for="inlineRadio1">
                      Food and Dining
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="imp_area"
                        value="Grounds"
                        onChange={handleImpactAreaChange}
                        checked={stateImp_area.includes("Grounds")}
                      />
                      <label className="form-check-label " for="inlineRadio1">
                      Grounds
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="imp_area"
                        value="Purchasing"
                        onChange={handleImpactAreaChange}
                        checked={stateImp_area.includes("Purchasing")}
                      />
                      <label className="form-check-label " for="inlineRadio1">
                      Purchasing
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="imp_area"
                        value="Transportation"
                        onChange={handleImpactAreaChange}
                        checked={stateImp_area.includes("Transportation")}
                      />
                      <label className="form-check-label " for="inlineRadio1">
                      Transportation
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="imp_area"
                        value="Waste"
                        onChange={handleImpactAreaChange}
                        checked={stateImp_area.includes("Waste")}
                      />
                      <label className="form-check-label " for="inlineRadio1">
                      Waste
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="imp_area"
                        value="Water"
                        onChange={handleImpactAreaChange}
                        checked={stateImp_area.includes("Water")}
                      />
                      <label className="form-check-label " for="inlineRadio1">
                      Water
                      </label>
                    </div>                    
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="imp_area"
                        value="Coordination and Planning"
                        onChange={handleImpactAreaChange}
                        checked={stateImp_area.includes("Coordination and Planning")}
                      />
                      <label className="form-check-label " for="inlineRadio1">
                      Coordination and Planning
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="imp_area"
                        value="Diversity and Affordability"
                        onChange={handleImpactAreaChange}
                        checked={stateImp_area.includes("Diversity and Affordability")}
                      />
                      <label className="form-check-label " for="inlineRadio1">
                      Diversity and Affordability
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="imp_area"
                        value="Investment and Finance"
                        onChange={handleImpactAreaChange}
                        checked={stateImp_area.includes("Investment and Finance")}
                      />
                      <label className="form-check-label " for="inlineRadio1">
                      Investment and Finance
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="imp_area"
                        value="Wellbeing and Work"
                        onChange={handleImpactAreaChange}
                        // checked={check_impact_area_vals("Wellbeing and Work")}
                        checked={stateImp_area.includes("Wellbeing and Work")}
                      />
                      <label className="form-check-label " for="inlineRadio1">
                      Wellbeing and Work
                      </label>
                    </div>
                  </div>

                  {/*  */}


                  <div className="col-md-12">
                    <label className="form-label fw-bold">Project Date</label>
                    
                    <input
                      type="date"
                      className="form-control"
                      name="project_date"
                      onChange={handleInputChangeCLL}
                      value={stateCLL.project_date}
                    />
                  </div>
                  

                  <div className="col-md-12">
                    <label className="form-label fw-bold">
                      Upload Relevant Documents
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      id="inputEmail4"
                      name="supporting_document"
                      onChange={(evt) => setStateCLL({ ...stateCLL, supporting_document: evt.target.files[0] })}
                      ref={cll_file_ref}
                    />
                  </div>

                  <div className="col-md-12">
                    <label for="inputAddress" className="form-label fw-bold">
                      Url (If Available)
                    </label>
                    <textarea
                      type="text"
                      className="form-control"
                      id="inputAddress"
                      placeholder=""
                      name="project_url"
                      value={stateCLL.project_url}
                      onChange={handleInputChangeCLL}
                    ></textarea>
                  </div>

                  <div className="col-md-12">
                    <button type="submit" className="btn btn-primary w-100" onClick={handleSubmitCLL}>
                      Submit
                    </button>
                  </div>
                </form>
              </div>

              {/* academic program */}
              <div className="tab-pane fade" id="messages">
                <h4 className="mt-2 head-academic">Sustainability Programs</h4>
                <form className="row g-3">
                  
                <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                    Reporting Period Start Date
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      name="reporting_period_start_date"
                      value={stateAP.reporting_period_start_date}
                      onChange={handleInputChangeAP}
                      // readonly
                    />
                </div>

                <div className="col-md-12">
                  <label for="inputEmail4" className="form-label fw-bold">
                    Reporting Period End Date
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    name="reporting_period_end_date"
                    value={stateAP.reporting_period_end_date}
                    onChange={handleInputChangeAP}
                    // readonly
                  />
                </div>

                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Sustainability-Focused Academic Program Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputEmail4"
                      name="sust_focused_academic_program"
                      value={stateAP.sust_focused_academic_program}
                      onChange={handleInputChangeAP}
                    />
                  </div>

                  <div className="col-md-12">
                    <label for="inputAddress" className="form-label fw-bold">
                      Brief Course Description
                    </label>
                    <textarea
                      type="text"
                      className="form-control"
                      id=""
                      placeholder=""
                      name="description"
                      onChange={handleInputChangeAP}
                      value={stateAP.description}
                    ></textarea>
                  </div>

                  <div className="col-md-12">
                    <label for="inputState" className="form-label fw-bold">
                      College
                    </label>
                    <select id="inputState" className="form-select"
                      name="college_or_unit"
                      onChange={handleInputChangeAP}
                      value={stateAP.college_or_unit}
                    >
                      <option selected>Choose...</option>
                      
                      {
                        getColleges().map((c, i) =>(
                          <option key={i} value={c}>{c}</option>
                        ))
                      }
                    </select>
                  </div>
                  <div className="col-md-12">
                    <label for="inputState" className="form-label fw-bold">
                      Department
                    </label>
                    <select id="inputState" className="form-select"
                      name="department"
                      onChange={handleInputChangeAP}
                      value={stateAP.department}
                    >
                      <option selected>Choose...</option>
                      {
                        getDepartments(stateAP.college_or_unit)?.map((d, i) =>(
                          <option key={i} value={d}>{d}</option>
                        ))
                      }
                    </select>
                  </div>
                  <div className="col-md-12">
                    <label for="inputPassword4" className="form-label fw-bold">
                      Level of Program
                    </label>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="level_of_program"
                        id="inlineRadio1"
                        value="ug"
                        onChange={handleInputChangeAP}
                        selected={stateAP.level_of_program === "ug"}
                      />
                      <label className="form-check-label " for="inlineRadio1">
                        Undergraduate
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="level_of_program"
                        id="inlineRadio2"
                        value="pg"
                        onChange={handleInputChangeAP}
                        selected={stateAP.level_of_program === "pg"}
                      />
                      <label className="form-check-label" for="inlineRadio2">
                        Graduate
                      </label>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <label for="inputState" className="form-label fw-bold">
                      Sustainability Program Type
                    </label>
                    <select id="inputState" className="form-select"
                      name="program_type"
                      onChange={handleInputChangeAP}
                      value={stateAP.program_type}
                    >
                      <option selected>Choose...</option>
                      <option value="Major">Major</option>
                      <option value="Minor">Minor</option>
                      <option value="Degree">Degree</option>
                      <option value="Concentration">Concentration</option>
                      <option value="An Immersive Experience">An Immersive Experience That is one week or more as a sustainability-focused educational study program that is one week or more in length</option>
                    </select>
                  </div>

                  <div className="col-md-12">
                    <label for="inputPassword4" className="form-label fw-bold">
                      Adopted one or more sustainability-focused learning
                      outcome(s)
                    </label>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="adopted_sust_focused_learning_outcome"
                        id="inlineRadio1"
                        value="True"
                        onChange={handleInputChangeAP}
                        selected={stateAP.adopted_sust_focused_learning_outcomes === "True"}
                      />
                      <label className="form-check-label " for="inlineRadio1">
                        Yes
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="adopted_sust_focused_learning_outcome"
                        id="inlineRadio2"
                        value="False"
                        onChange={handleInputChangeAP}
                        selected={stateAP.adopted_sust_focused_learning_outcomes === "False"}
                      />
                      <label className="form-check-label" for="inlineRadio2">
                        No
                      </label>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <label for="inputPassword4" className="form-label fw-bold">
                      Requires the successful completion of a
                      sustainability-focused course
                    </label>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="requires_successful_completion_of_sust_focused_course"
                        id="inlineRadio1"
                        value="True"
                        onChange={handleInputChangeAP}
                        selected={stateAP.requires_successful_completion_of_sust_focused_course === "True"}
                      />
                      <label className="form-check-label " for="inlineRadio1">
                        Yes
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="requires_successful_completion_of_sust_focused_course"
                        id="inlineRadio1"
                        value="False"
                        onChange={handleInputChangeAP}
                        selected={stateAP.requires_successful_completion_of_sust_focused_course === "False"}
                      />
                      <label className="form-check-label" for="inlineRadio2">
                        No
                      </label>
                    </div>
                  </div>
                    
                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Year Program Started
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      // id="inputEmail4"
                      name="year_program_started"
                      onChange={handleInputChangeAP}
                      value={stateAP.year_program_started}
                    />
                  </div>
                  
                  <div className="col-md-12">
                    <label for="inputState" className="form-label fw-bold">
                      Program Active or Inactive
                    </label>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="program_active"
                        // id="inlineRadio1"
                        value="True"
                        onChange={handleInputChangeAP}
                        selected={stateAP.program_active === "True"}
                      />
                      <label className="form-check-label " for="inlineRadio1">
                        Yes
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="program_active"
                        // id="inlineRadio1"
                        value="False"
                        onChange={handleInputChangeAP}
                        selected={stateAP.program_active === "False"}
                      />
                      <label className="form-check-label " for="inlineRadio1">
                        No
                      </label>
                    </div>
                  </div>

                  
                  

                  {/* Point of Contact (POC)  UPDATE */}
                  
                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Point of Contact (POC)  Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputEmail4"
                      name="poc_name"
                      value={stateAP.poc_name}
                      onChange={handleInputChangeAP}
                    ></input>
                  </div>
                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Point of Contact (POC)  Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail4"
                      name="poc_email"
                      value={stateAP.poc_email}
                      onChange={handleInputChangeAP}
                    ></input>
                  </div>
                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Point of Contact (POC)  Phone
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputEmail4"
                      name="poc_phone"
                      value={stateAP.poc_phone}
                      onChange={handleInputChangeAP}
                    ></input>
                  </div>

                  {/* Point of Contact (POC)  UPDATE */}

                  <div className="col-md-12">
                    <label for="inputAddress" className="form-label fw-bold">
                      Website Url for Program
                    </label>
                    <textarea
                      type="text"
                      className="form-control"
                      // id="inputAddress"
                      placeholder=""
                      name="website_url"
                      onChange={handleInputChangeAP}
                      value={stateAP.website_url}
                    ></textarea>
                  </div>

                  

                  <div className="col-md-12">
                    <button type="submit" className="btn btn-primary w-100" onClick={handleSubmitAP}>
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

export default Curriculum;
