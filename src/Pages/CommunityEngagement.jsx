import React, {useState, useEffect, useRef} from "react";

import {URL_SERVER} from '../serverurl';
import moment from 'moment';

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

const initial_statePTPO = {
  "reporting_period_start_date" : "",
  "reporting_period_end_date" : "",
  'peer_to_peer_outreach_type': '',
  'peer_to_peer_outreach_title': '',
  'poc_name' : '',
  'poc_email' : '',
  'poc_phone' : '',
  'description': '',
  'educators_training': '',
  'target_audience': '',
  'program_starting_date': '',
  'program_status': '',
  'num_actively_trained_educators': '',
  'num_weeks_program_is_active_annually': '',
  'num_hours_worked_weekly_per_trained_educators': '',
  'num_hours_worked_annualy_by_trained_educators': '',
  'program_url': '',
  'supporting_document': '',
}

const initial_stateSSGPI = {
  "reporting_period_start_date" : "",
  "reporting_period_end_date" : "",
  'student_sust_grp_prog_initiative_type': '',
  'student_sust_grp_prog_initiative_title': '',
  'description': '',
  'poc_name' : '',
  'poc_email' : '',
  'poc_phone' : '',
  'target_audience': '',
  'description_of_measureable_impacts': '',
  'supporting_outreach_materials': '',
  'supporting_outreach_materials_description': '',
  'student_sust_grp_prog_initiative_url': '',
  'supporting_document': '',
}

const initial_stateCEC = {
  "reporting_period_start_date" : "",
  "reporting_period_end_date" : "",
  'continuing_education_course_title' : '',
  'host_unit' : '',
  'course_description' : '',
  'course_type' : '',
  'num_of_times_course_offered' : '',

}

const initial_stateSPD = {
  "reporting_period_start_date" : "",
  "reporting_period_end_date" : "",
  'staff_professional_development_title' : '',
  'description' : '',
  'dates_offered' : '',
  'num_of_staff_participants' : '',
  'internally_or_externally_funded' : '',
  "externally_funded": '',
  'poc_name' : '',
  'poc_email' : '',
  'poc_phone' : '',
  'staff_professional_development_url' : '',
  'supporting_document' : ''
}

const initial_stateCEP = {
  "reporting_period_start_date" : "",
  "reporting_period_end_date" : "",
  'ce_program_title' : '',
  'description' : '',
  'poc_name' : '',
  'poc_email' : '',
  'poc_phone' : '',
  'year_program_started' : '',
  'dates_offered' : ''
}

const initial_stateCP = {
  "reporting_period_start_date" : "",
  "reporting_period_end_date" : "",
  'community_partnership_title' : '',
  'description' : '',
  'supported' : '',
  'timeframe' : '',
  'type_of_partnership' : '',
  'vulnerable_population_engagement' : '',
  'poc_name' : '',
  'poc_email' : '',
  'poc_phone' : '',
  'community_partnership_url' : ''
}



const CommunityEngagement = (props) => {

// PTPO
// SSGPI
// CEC
// SPD
// CEP
// CP

  const [PTPO, setPTPO] = useState(initial_statePTPO);
  const [SSGPI, setSSGPI] = useState(initial_stateSSGPI);
  const [CEC, setCEC] = useState(initial_stateCEC);
  const [SPD, setSPD] = useState(initial_stateSPD);
  const [CEP, setCEP] = useState(initial_stateCEP);
  const [CP, setCP] = useState(initial_stateCP);

  const ssgpi_file_ref = useRef(null)
  const ptpo_file_ref = useRef(null)
  const spd_file_ref = useRef(null)

  const [stateTargetAudience, setStateTargetAudience] = useState([])
  var target_audience = []

  const today = moment(new Date()).format("YYYY-MM-DD")
  useEffect(() => {
    setSSGPI(prevState => ({
      ...prevState,
      reporting_period_start_date: today
    }));

    setPTPO(prevState => ({
      ...prevState,
      reporting_period_start_date: today
    }))

    setCEC(prevState => ({
      ...prevState,
      reporting_period_start_date: today
    }))

    setSPD(prevState => ({
      ...prevState,
      reporting_period_start_date: today
    }))

    setCEP(prevState => ({
      ...prevState,
      reporting_period_start_date: today
    }))

    setCP(prevState => ({
      ...prevState,
      reporting_period_start_date: today
    }))
  }, []);

  const handleTargetAudienceChange = (e) => {

    if (!stateTargetAudience.includes(e.target.value)  ) {
      // impact_area_vals.push(e.target.value)
      console.log("in if block")
      setStateTargetAudience(prev => ([
          ...prev,
          e.target.value
        ]
      ))
    }
    else{
      console.log("in else block")
      target_audience = stateTargetAudience.filter((v) => {
        return v !== e.target.value;
      })
      setStateTargetAudience(target_audience)
      // console.log(stateImp_area);
      // console.log(stateImp_area.includes(e.target.value));
    }

    console.log(stateTargetAudience);
    console.log(stateTargetAudience.includes(e.target.value));
  }

  const handleInputChangeSSGPI = (e) => {
    setSSGPI(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
    console.log(SSGPI);
  }

  const handleInputChangePTPO = (e) => {
    setPTPO(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
    console.log(PTPO);
  }

  const handleInputChangeCEC = (e) => {
    setCEC(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
    console.log(CEC);
  }

  const handleInputChangeSPD = (e) => {
    setSPD(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
    console.log(SPD);
  }

  const handleInputChangeCEP = (e) => {
    setCEP(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
    console.log(CEP);
  }

  const handleInputChangeCP = (e) => {
    setCP(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
    console.log(CP);
  }

  

  const handleSubmitPTPO = (e) => {
    e.preventDefault();
    console.log(PTPO);
    
    const uploadData = new FormData();
    // uploadData.append(...state);
    for (let key in PTPO) {
      uploadData.append(key, PTPO[key]);
    }
    console.log("uploadData: ", uploadData);
    
    fetch(`${URL_SERVER}/campus-and-community/peertopeeroutreach/`, {
        method: 'POST',
        headers: {   
          'Authorization': 'Token ' + props.token
        },
        // headers: {  'Content-Type': 'application/json' },
        // body: JSON.stringify(PTPO)
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
        setPTPO(initial_statePTPO)
        ptpo_file_ref.current.value = '';
    })
    .catch(err => {
        alert(err)
        console.log(err)
    })
    
  }

  const handleSubmitSSGPI = (e) => {
    e.preventDefault();
    console.log(SSGPI);
    
    const uploadData = new FormData();
    // uploadData.append(...state);
    SSGPI.target_audience = stateTargetAudience.join(" , ");

    for (let key in SSGPI) {
      uploadData.append(key, SSGPI[key]);
    }
    console.log("uploadData: ", uploadData);
    

    fetch(`${URL_SERVER}/campus-and-community/studentsustgrpproginitiative/`, {
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
        setSSGPI(initial_stateSSGPI)
        ssgpi_file_ref.current.value = '';
        target_audience = []
        setStateTargetAudience([])
    })
    .catch(err => {
        alert(err)
        console.log(err)
    })
    
  }

  const handleSubmitCEC = (e) => {
    e.preventDefault();
    console.log(CEC);
    
    fetch(`${URL_SERVER}/campus-and-community/continuingeducationcourse/`, {
        method: 'POST',
        headers: {  
          'Content-Type': 'application/json', 
          'Authorization': 'Token ' + props.token
        },
        body: JSON.stringify(CEC)
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
        setCEC(initial_stateCEC)
    })
    .catch(err => {
        alert(err)
        console.log(err)
    })
    
  }

  const handleSubmitSPD = (e) => {
    e.preventDefault();
    console.log(SPD);
    
    const uploadData = new FormData();
    // uploadData.append(...state);
    for (let key in SPD) {
      uploadData.append(key, SPD[key]);
    }
    console.log("uploadData: ", uploadData);
    

    fetch(`${URL_SERVER}/campus-and-community/staffprofessionaldevelopment/`, {
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
        setSPD(initial_stateSPD)
        spd_file_ref.current.value='';
    })
    .catch(err => {
        alert(err)
        console.log(err)
    })
    
  }

  const handleSubmitCEP = (e) => {
    e.preventDefault();
    console.log(CEP);
    
    fetch(`${URL_SERVER}/campus-and-community/communityeducationprogram/`, {
        method: 'POST',
        headers: {  
          'Content-Type': 'application/json', 
          'Authorization': 'Token ' + props.token
        },
        body: JSON.stringify(CEP)
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
        setCEP(initial_stateCEP)
    })
    .catch(err => {
        alert(err)
        console.log(err)
    })
    
  }

  const handleSubmitCP = (e) => {
    e.preventDefault();
    console.log(CP);
    
    fetch(`${URL_SERVER}/campus-and-community/communitypartnership/`, {
        method: 'POST',
        headers: {  
          'Content-Type': 'application/json', 
          'Authorization': 'Token ' + props.token
        },
        body: JSON.stringify(CP)
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
        setCP(initial_stateCP)
    })
    .catch(err => {
        alert(err)
        console.log(err)
    })
    
  }

  return (
    <>
      <div className="container-fluid">
        <h2 className="curriculum-head">Community Sustainability Engagement</h2>

        <div className="row" style={{ padding: "15px" }}>
          <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 tab-workgroup">
            <ul className="nav flex-column tab-workgroup-list" id="myTab">
              <li className="nav-item">
                <a
                  href="#home"
                  className="nav-link active"
                  data-bs-toggle="tab"
                >
                  Student Sustainability Groups, Programs and Initiatives
                </a>
              </li>

              <li className="nav-item">
                <a href="#profile" className="nav-link" data-bs-toggle="tab">
                  Peer-to-Peer Outreach
                </a>
              </li>

              <li className="nav-item">
                <a href="#messages" className="nav-link" data-bs-toggle="tab">
                  Continuing Education Courses
                </a>
              </li>
              <li className="nav-item">
                <a href="#staff" className="nav-link" data-bs-toggle="tab">
                  Staff Professional Development
                </a>
              </li>
              <li className="nav-item">
                <a href="#community" className="nav-link" data-bs-toggle="tab">
                  Community Partnerships
                </a>
              </li>
              <li className="nav-item">
                <a href="#education" className="nav-link" data-bs-toggle="tab">
                  Continuing Education Programs
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 form-curriculum">
            <div className="tab-content">
              {/* SSGPI */}
              <div className="tab-pane fade show active" id="home">
                <h4 className="mt-2 head-academic">
                  Student Sustainability Groups, Programs and Initiatives
                </h4>
                <form className="row g-3">
                <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Reporting Period: Start Date
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      name="reporting_period_start_date"
                      onChange={handleInputChangeSSGPI}
                      value={SSGPI.reporting_period_start_date}
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
                      onChange={handleInputChangeSSGPI}
                      value={SSGPI.reporting_period_end_date}
                    />
                  </div>

                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Groups, Programs, and Initiative Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      // id="inputEmail4"
                      name="student_sust_grp_prog_initiative_title"
                      value={SSGPI.student_sust_grp_prog_initiative_title}
                      onChange={handleInputChangeSSGPI}
                    />
                  </div>

                  <div className="col-md-12">
                    <label for="inputState" className="form-label fw-bold">
                      Type of Student Sustainability Groups, Programs, and
                      Initiatives (Select One)
                    </label>
                    <select id="inputState" className="form-select"
                      name="student_sust_grp_prog_initiative_type"
                      value={SSGPI.student_sust_grp_prog_initiative_type}
                      onChange={handleInputChangeSSGPI}
                    >
                      <option selected>Choose...</option>
                      <option 
                        value="Active Students Groups Focused on Sustainability">
                        Active Students Groups Focused on Sustainability
                      </option>
                      <option 
                        value="Gardens, farms, community supported agriculture (CSA)">
                          
                          Gardens, farms, community supported agriculture (CSA) or fishery programs, and urban{"\n"}
                          agriculture projects where students are able to gain experience in organic agriculture and
                          sustainable food systems
                          
                      </option>
                      <option 
                        value="Student-run enterprises that include sustainability as part of their mission"
                      >
                           Student-run enterprises that include sustainability as part of their mission statements or stated purposes (e.g. cafés through which students gain sustainable business skills)
                      </option>
                      <option 
                        value="Sustainable investment funds, green revolving funds or sustainable microfinance"
                      >
                        Sustainable investment funds, green revolving funds or sustainable microfinance initiatives
                        through which students can develop socially, environmentally and fiscally responsible investment and financial skills
                      </option>
                      <option 
                        value="Conferences, speaker series, symposia, or similar events"
                      >
                        Conferences, speaker series, symposia, or similar events focused on sustainability
                      </option>
                      <option 
                        value="Cultural arts events, installations or performances focused on sustainability"
                      >
                        Cultural arts events, installations or performances focused on sustainability
                      </option>
                      <option 
                        value="Wilderness or outdoors programs"
                      >
                        Wilderness or outdoors programs (e.g., that organize hiking, backpacking, kayaking, or other outings for students) that follow Leave No Trace principles
                      </option>
                      <option 
                        value="Sustainability-focused themes chosen for themed semesters, years"
                      >
                        Sustainability-focused themes chosen for themed semesters, years, or first-year experiences (e.g., choosing a sustainability-focused book for common reading)
                      </option>
                      <option 
                        value="Programs through which students can learn sustainable life skills"
                      >
                        Programs through which students can learn sustainable life skills (e.g., a series of sustainable
                        living workshops, a model room in a residence hall that is open to students during regular
                        visitation hours and demonstrates sustainable living principles, or sustainability-themed housing where residents and visitors learn about sustainability together)
                        Sustainability-focused student employment opportunities offered by the institution
                      </option>
                      <option 
                        value="Graduation pledges through which students pledge"
                      >
                        Graduation pledges through which students pledge to consider social and environmental
                        responsibility in future job and other decisions

                      </option>
                    </select>
                  </div>

                  

                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Brief Description/Mission of the Group, Program, or
                      Initiative
                    </label>
                    <textarea
                      type="text"
                      className="form-control"
                      // id="inputEmail4"
                      name="description"
                      value={SSGPI.description}
                      onChange={handleInputChangeSSGPI}
                    ></textarea>
                  </div>

                  

                  {/*  */}
                  <div className="col-md-12">
                    <label for="inputPassword4" className="form-label fw-bold">
                    Target Audience(s) (Select all that apply)
                    </label>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="imp_area"
                        value="Students"
                        onChange={handleTargetAudienceChange}
                        checked={stateTargetAudience.includes("Students")}
                      />
                      <label className="form-check-label " for="inlineRadio1">
                      Students
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="imp_area"
                        value="Staff"
                        onChange={handleTargetAudienceChange}
                        checked={stateTargetAudience.includes("Staff")}
                      />
                      <label className="form-check-label " for="inlineRadio1">
                      Staff
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="imp_area"
                        value="Faculty"
                        onChange={handleTargetAudienceChange}
                        checked={stateTargetAudience.includes("Faculty")}
                      />
                      <label className="form-check-label " for="inlineRadio1">
                      Faculty
                      </label>
                    </div>

                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="imp_area"
                        value="Alumni"
                        onChange={handleTargetAudienceChange}
                        checked={stateTargetAudience.includes("Alumni")}
                      />
                      <label className="form-check-label " for="inlineRadio1">
                      Alumni
                      </label>
                    </div>

                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="imp_area"
                        value="Community"
                        onChange={handleTargetAudienceChange}
                        checked={stateTargetAudience.includes("Community")}
                      />
                      <label className="form-check-label " for="inlineRadio1">
                      Community
                      </label>
                    </div>
                    
                    
                  </div>

                  {/*  */}

                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Brief Description of the Measurable Impacts and/or
                      Positive Results (required for outreach campaigns):
                    </label>
                    <textarea
                      type="text"
                      className="form-control"
                      // id="inputEmail4"
                      name="description_of_measureable_impacts"
                      value={SSGPI.description_of_measureable_impacts}
                      onChange={handleInputChangeSSGPI}
                    ></textarea>
                  </div>

                  <div className="col-md-12">
                    <label for="inputPassword4" className="form-label fw-bold">
                      Any supporting outreach materials and publications?
                    </label>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="supporting_outreach_materials"
                        value="True"
                        checked={SSGPI.supporting_outreach_materials === "True"}
                        onChange={handleInputChangeSSGPI}
                      />
                      <label className="form-check-label " for="inlineRadio1">
                        Yes
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="supporting_outreach_materials"
                        value="False"
                        checked={SSGPI.supporting_outreach_materials === "False"}
                        onChange={handleInputChangeSSGPI}
                      />
                      <label className="form-check-label" for="inlineRadio2">
                        No
                      </label>
                    </div>
                  </div>
                  {(SSGPI.supporting_outreach_materials === "True") ? (
                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Provide a description
                    </label>
                    <textarea
                      type="text"
                      className="form-control"
                      name="supporting_outreach_materials_description"
                      value={SSGPI.supporting_outreach_materials_description}
                      onChange={handleInputChangeSSGPI}
                    ></textarea>
                  </div>
                  ) : null }
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
                    value={SSGPI.poc_name}
                    onChange={handleInputChangeSSGPI}
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
                    value={SSGPI.poc_email}
                    onChange={handleInputChangeSSGPI}
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
                    value={SSGPI.poc_phone}
                    onChange={handleInputChangeSSGPI}
                  ></input>
                  </div>
                  {/* Point of Contact (POC)  UPDATE */}
                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      URL (If available)
                    </label>
                    <textarea
                      type="text"
                      className="form-control"
                      name="student_sust_grp_prog_initiative_url"
                      value={SSGPI.student_sust_grp_prog_initiative_url}
                      onChange={handleInputChangeSSGPI}
                    ></textarea>
                  </div>

                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Supporting Documents (Optional)
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      name="supporting_document"
                      // value={SSGPI.supporting_doc}
                      ref = {ssgpi_file_ref}
                      onChange={(evt) => setSSGPI({ ...SSGPI, supporting_document: evt.target.files[0] })}

                    />
                  </div>

                  <div className="col-12">
                    <button type="submit" className="btn btn-primary w-100" onClick={handleSubmitSSGPI}>
                      Submit
                    </button>
                  </div>
                </form>
              </div>

              {/*  PTPO*/}
              <div className="tab-pane fade" id="profile">
                <h4 className="mt-2 head-academic">Peer-to-peer Outreach Sustainablity</h4>
                <form className="row g-3">
                <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Reporting Period: Start Date
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      name="reporting_period_start_date"
                      onChange={handleInputChangePTPO}
                      value={PTPO.reporting_period_start_date}
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
                      onChange={handleInputChangePTPO}
                      value={PTPO.reporting_period_end_date}
                    />
                  </div>
                  <div className="col-md-12">
                    <label for="inputState" className="form-label fw-bold">
                      Peer-to-Peer Sustainability Outreach and Education Program
                      Type
                    </label>
                    <select id="inputState" className="form-select"
                      name="peer_to_peer_outreach_type"
                      value={PTPO.peer_to_peer_outreach_type}
                      onChange={handleInputChangePTPO}
                    >
                      <option selected>Choose...</option>
                      <option value="Student to Student">Student to Student</option>
                      <option value="Employee to Employee">Employee to Employee</option>
                    </select>
                  </div>

                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Peer-to-Peer Sustainability Outreach and Education Program
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="peer_to_peer_outreach_title"
                      value={PTPO.peer_to_peer_outreach_title}
                      onChange={handleInputChangePTPO}
                    />
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
                    value={PTPO.poc_name}
                    onChange={handleInputChangePTPO}
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
                    value={PTPO.poc_email}
                    onChange={handleInputChangePTPO}
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
                    value={PTPO.poc_phone}
                    onChange={handleInputChangePTPO}
                  ></input>
                  </div>
                  {/* Point of Contact (POC)  UPDATE */}

                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      A Brief description of the Program
                    </label>
                    <textarea
                      type="text"
                      className="form-control"
                      name="description"
                      value={PTPO.description}
                      onChange={handleInputChangePTPO}
                    ></textarea>
                  </div>

                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      How are the peer educators trained
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="educators_training"
                      value={PTPO.educators_training}
                      onChange={handleInputChangePTPO}
                    />
                  </div>

                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Program's target audience(s)
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="target_audience"
                      value={PTPO.target_audience}
                      onChange={handleInputChangePTPO}
                    />
                  </div>

                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Semester/Year Program Started
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      name="program_starting_date"
                      value={PTPO.program_starting_date}
                      onChange={handleInputChangePTPO}
                    />
                  </div>

                  <div className="col-md-12">
                    <label for="inputState" className="form-label fw-bold">
                      Is the Program Active or Inactive?
                    </label>
                    <select id="inputState" className="form-select"
                      name="program_status"
                      value={PTPO.program_status}
                      onChange={handleInputChangePTPO}
                    >
                      <option selected>Choose...</option>
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  </div>

                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Number of actively trained Educators (Enter Number)
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="num_actively_trained_educators"
                      value={PTPO.num_actively_trained_educators}
                      onChange={handleInputChangePTPO}
                    />
                  </div>
                  <div className="col-md-12">
                    <label for="inputEmail43" className="form-label fw-bold">
                      Number of weeks the educators program is active annually
                      (Enter Number)
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="num_weeks_program_is_active_annually"
                      value={PTPO.num_weeks_program_is_active_annually}
                      onChange={handleInputChangePTPO}
                    />
                  </div>
                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Average or expected number of hours worked weekly per
                      trained educator (Enter Number)
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="num_hours_worked_weekly_per_trained_educators"
                      value={PTPO.num_hours_worked_weekly_per_trained_educators}
                      onChange={handleInputChangePTPO}
                    />
                  </div>
                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Total number of hours worked annually by trained educators
                      (Enter Number)
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="num_hours_worked_annualy_by_trained_educators"
                      value={PTPO.num_hours_worked_annualy_by_trained_educators}
                      onChange={handleInputChangePTPO}
                    />
                  </div>

                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Program URL (if available)
                    </label>
                    <textarea
                      type="text"
                      className="form-control"
                      name="program_url"
                      value={PTPO.program_url}
                      onChange={handleInputChangePTPO}
                    ></textarea>
                  </div>

                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Supporting Documents (Optional)
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      name="supporting_document"
                      // value={PTPO.supporting_document}
                      ref={ptpo_file_ref}
                      onChange={(evt) => setPTPO({ ...PTPO, supporting_document: evt.target.files[0] })}
                    />
                  </div>

                  <div className="col-12">
                    <button type="submit" className="btn btn-primary w-100" onClick={handleSubmitPTPO}>
                      Submit
                    </button>
                  </div>
                </form>
              </div>

              {/* CEC */}
              <div className="tab-pane fade" id="messages">
                <h4 className="mt-2 head-academic">
                  Continuing Education Sustainability Courses
                </h4>
                <form className="row g-3">
                <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Reporting Period: Start Date
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      name="reporting_period_start_date"
                      onChange={handleInputChangeCEC}
                      value={CEC.reporting_period_start_date}
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
                      onChange={handleInputChangeCEC}
                      value={CEC.reporting_period_end_date}
                    />
                  </div>

                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Continuing Education Sustainability Course Title
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="continuing_education_course_title"
                      value={CEC.continuing_education_course_title}
                      onChange={handleInputChangeCEC}
                    />
                  </div>

                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Brief Course Description
                    </label>
                    <textarea
                      type="text"
                      className="form-control"
                      name="course_description"
                      value={CEC.course_description}
                      onChange={handleInputChangeCEC}
                    ></textarea>
                  </div>

                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                    Host Unit [Eg : IHAPS , EIH, Pearland Campus, SHS]
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="host_unit"
                      value={CEC.host_unit}
                      onChange={handleInputChangeCEC}
                    ></input>
                  </div>
                  
                  

                  <div className="col-md-12">
                    <label for="inputState" className="form-label fw-bold">
                      Course Type
                    </label>
                    <select id="inputState" className="form-select"
                      name="course_type"
                      value={CEC.course_type}
                      onChange={handleInputChangeCEC}
                    >
                      <option selected>Choose...</option>
                      <option value="Sustainability Focused">Sustainability Focused</option>
                      <option value="Sustainability Inclusive">Sustainability Inclusive</option>
                    </select>
                  </div>
                  
                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Number of times course offered in reporting year 
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="num_of_times_course_offered"
                      value={CEC.num_of_times_course_offered}
                      onChange={handleInputChangeCEC}
                    ></input>
                  </div>

                  <div className="col-12">
                    <button type="submit" className="btn btn-primary w-100"
                      onClick={handleSubmitCEC}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>

              {/* SPD */}
              <div className="tab-pane fade" id="staff">
                <h4 className="mt-2 head-academic">
                  Staff Professional Development
                </h4>
                <form className="row g-3">
                <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Reporting Period: Start Date
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      name="reporting_period_start_date"
                      onChange={handleInputChangeSPD}
                      value={SPD.reporting_period_start_date}
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
                      onChange={handleInputChangeSPD}
                      value={SPD.reporting_period_end_date}
                    />
                  </div>
                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Name of Sustainbaility Professional Development or
                      Training Opportunity
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="staff_professional_development_title"
                      value={SPD.staff_professional_development_title}
                      onChange={handleInputChangeSPD}
                    />
                  </div>

                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Brief Description of Training
                    </label>
                    <textarea
                      type="text"
                      className="form-control"
                      name="description"
                      value={SPD.description}
                      onChange={handleInputChangeSPD}
                    ></textarea>
                  </div>

                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Date(s) Offered
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="dates_offered"
                      value={SPD.dates_offered}
                      onChange={handleInputChangeSPD}
                    />
                  </div>

                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Number of Staff Participants (Enter Number)
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="num_of_staff_participants"
                      value={SPD.num_of_staff_participants}
                      onChange={handleInputChangeSPD}
                    />
                  </div>

                  <div className="col-md-12">
                    <label for="inputState" className="form-label fw-bold">
                      Internally-Offered or Externally-Supported
                    </label>
                    <select id="inputState" className="form-select"
                      name="internally_or_externally_funded"
                      value={SPD.internally_or_externally_funded}
                      onChange={handleInputChangeSPD}
                    >
                      <option selected>Choose...</option>
                      <option value="internally_funded">Internally Funded</option>
                      <option value="externally_funded">Externally Funded</option>
                      
                    </select>
                  </div>
                  {(SPD.internally_or_externally_funded === "externally_funded") ? (
                  <div className="col-md-12">
                    <label for="inputState" className="form-label fw-bold">
                      Externally Supported
                    </label>
                    <select id="inputState" className="form-select"
                      name="externally_funded"
                      value={SPD.externally_funded}
                      onChange={handleInputChangeSPD}
                    >
                      <option selected>Choose...</option>
                      <option value="payment">payment</option>
                      <option value="reimbursement">reimbursement</option>
                      <option value="subsidy">subsidy</option>
                    </select>
                  </div>
                  ): null}
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
                    value={SPD.poc_name}
                    onChange={handleInputChangeSPD}
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
                    value={SPD.poc_email}
                    onChange={handleInputChangeSPD}
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
                    value={SPD.poc_phone}
                    onChange={handleInputChangeSPD}
                  ></input>
                  </div>
                  {/* Point of Contact (POC)  UPDATE */}
                  <div className="col-md-12">
                    <label className="form-label fw-bold">
                      Supporting Documents (Optional)
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      name="supporting_document"
                      // onChange={handleInputChangeSPD}
                      // value={SPD.supporting_doc}
                      ref={spd_file_ref}
                      onChange={(evt) => setSPD({ ...SPD, supporting_document: evt.target.files[0] })}
                    />
                  </div>

                  <div className="col-12">
                    <button type="submit" className="btn btn-primary w-100"
                      onClick={handleSubmitSPD}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>

              {/* CP */}
              <div className="tab-pane fade" id="community">
                <h4 className="mt-2 head-academic">Community Partnerships</h4>
                <form className="row g-3">
                  
                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Reporting Period: Start Date
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      name="reporting_period_start_date"
                      onChange={handleInputChangeCP}
                      value={CP.reporting_period_start_date}
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
                      onChange={handleInputChangeCP}
                      value={CP.reporting_period_end_date}
                    />
                  </div>

                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Name of the institution’s formal community partnership to
                      advance sustainability
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="community_partnership_title"
                      value={CP.community_partnership_title}
                      onChange={handleInputChangeCP}
                    />
                  </div>

                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      A brief description of the institution’s formal community
                      partnership to advance sustainability.
                    </label>
                    <textarea
                      type="text"
                      className="form-control"
                      name="description"
                      value={CP.description}
                      onChange={handleInputChangeCP}
                    ></textarea>
                  </div>

                  <div className="col-md-12">
                    <label for="inputPassword4" className="form-label fw-bold">
                      Does the institution provide financial or material support
                      for the partnership?
                    </label>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="supported"
                        value="True"
                        checked={CP.supported === "True"}
                        onChange={handleInputChangeCP}
                      />
                      <label className="form-check-label " for="inlineRadio1">
                        Yes
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="supported"
                        value="False"
                        checked={CP.supported === "False"}
                        onChange={handleInputChangeCP}
                      />
                      <label className="form-check-label" for="inlineRadio2">
                        No
                      </label>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <label for="inputState" className="form-label fw-bold">
                      Which of the following best describes the partnership
                      timeframe?
                    </label>
                    <select id="inputState" className="form-select"
                      name="timeframe"
                      value={CP.timeframe}
                      onChange={handleInputChangeCP}
                    >
                      <option selected>Choose...</option>
                      <option value="Short-Term Project/Event">Short-Term Project/Event</option>
                      <option value="Multi-Year/Ongoing">Multi-Year/Ongoing</option>
                    </select>
                  </div>

                  <div className="col-md-12">
                    <label for="inputState" className="form-label fw-bold">
                      Which of the following best describes the partnership?
                    </label>
                    <select id="inputState" className="form-select"
                      name="type_of_partnership"
                      value={CP.type_of_partnership}
                      onChange={handleInputChangeCP}
                    >
                      <option selected>Choose...</option>
                      <option value="Sustainability Focused">Sustainability-focused (The primary and explicit focus is on the concept of sustainability,the interdependence of ecological and social/economic systems, or a major sustainability challenge.)</option>
                      <option value="Sustainability Related">Sustainability-related (It addresses a sustainability challenge, but does not have a primary or explicit focus on sustainability)</option>
                    </select>
                  </div>

                  <div className="col-md-12">
                    <label for="inputPassword4" className="form-label fw-bold">
                      Are underrepresented groups and/or vulnerable populations
                      engaged as equal partners (in strategic planning,
                      decision-making, implementation, and review)?
                    </label>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="vulnerable_population_engagement"
                        value="True"
                        checked={CP.vulnerable_population_engagement === "True"}
                        onChange={handleInputChangeCP}
                      />
                      <label className="form-check-label " for="inlineRadio1">
                        Yes
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="vulnerable_population_engagement"
                        value="False"
                        checked={CP.vulnerable_population_engagement === "False"}
                        onChange={handleInputChangeCP}
                      />
                      <label className="form-check-label" for="inlineRadio2">
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
                    value={CP.poc_name}
                    onChange={handleInputChangeCP}
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
                    value={CP.poc_email}
                    onChange={handleInputChangeCP}
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
                    value={CP.poc_phone}
                    onChange={handleInputChangeCP}
                  ></input>
                  </div>
                  {/* Point of Contact (POC)  UPDATE */}
                  <div className="col-md-12">
                    <label className="form-label fw-bold">
                      Website URL (If available)
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="community_partnership_url"
                      value={CP.community_partnership_url}
                      onChange={handleInputChangeCP}
                    />
                  </div>

                  <div className="col-12">
                    <button type="submit" className="btn btn-primary w-100"
                      onClick={handleSubmitCP}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
              {/* CEP */}

              {/* CEP */}
              <div className="tab-pane fade" id="education">
                <h4 className="mt-2 head-academic">
                  Continuing Education Programs
                </h4>
                <form className="row g-3">
                <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Reporting Period: Start Date
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      name="reporting_period_start_date"
                      onChange={handleInputChangeCEP}
                      value={CEP.reporting_period_start_date}
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
                      onChange={handleInputChangeCEP}
                      value={CEP.reporting_period_end_date}
                    />
                  </div>
                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Name of the sustainability-focused certificate program
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="ce_program_title"
                      value={CEP.ce_program_title}
                      onChange={handleInputChangeCEP}
                    />
                  </div>

                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Brief Course Description
                    </label>
                    <textarea
                      type="text"
                      className="form-control"
                      name="description"
                      value={CEP.description}
                      onChange={handleInputChangeCEP}
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
                    value={CEP.poc_name}
                    onChange={handleInputChangeCEP}
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
                    value={CEP.poc_email}
                    onChange={handleInputChangeCEP}
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
                    value={CEP.poc_phone}
                    onChange={handleInputChangeCEP}
                  ></input>
                  </div>
                  {/* Point of Contact (POC)  UPDATE */}

                  

                  <div className="col-md-12">
                  <label for="inputEmail4" className="form-label fw-bold">
                    Semester/Year Program Started
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputEmail4"
                    name="year_program_started"
                    value={CEP.year_program_started}
                    onChange={handleInputChangeCEP}
                  ></input>
                  </div>
                      
                  <div className="col-md-12">
                  <label for="inputEmail4" className="form-label fw-bold">
                    Dates Offered
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputEmail4"
                    name="dates_offered"
                    value={CEP.dates_offered}
                    onChange={handleInputChangeCEP}
                  ></input>
                  </div>
                  
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary w-100"
                      onClick={handleSubmitCEP}
                    >
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

export default CommunityEngagement;
