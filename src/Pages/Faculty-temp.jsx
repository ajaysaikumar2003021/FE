import React, {useState} from "react";
import { useEffect } from "react";
import {URL_SERVER} from "../serverurl";
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

const initial_state = {
  // "reporting_academic_year" : "",
  "reporting_period_start_date": "",
  "reporting_period_end_date": "",
  // "project_date" : "",
  "faculty_name" : "",
  "faculty_email" : "",
  // "department_affiliation" : "",
  "college_or_unit": "",
  "department":"",
  "served_higher_edu": "",
  "sust_research_service_dates" : "",
  "title_research_project" : "",
  "key_words" : "",
  "abstract_summary_project" : "",
  "grant_approval": "",
  "sust_research_area" : "",
  "research_interests" : "",
  "peer_reviewed_journal" : "",
  "publication_details" : "",
  "list_names_faculty_collab" : "",
  "publication_deposited" : "",
  "project_conducted_collab_uhcl_faculty" : "",
  "presented_research_at_sust_conference" : "",
  "sust_research_conf_description" : "",
  "support_url" : "",
  "supporting_document" : '',
  "additional_keywords": ''
}

const initial_state2 = {
  "title_research_project" : "",
  "key_words" : "",
  "abstract_summary_project" : "",
  "grant_approval": "",
  "sust_research_area" : "",
  "additional_keywords": '',
  "research_interests" : "",
  "peer_reviewed_journal" : "",
  "publication_details" : "",
  "list_names_faculty_collab" : "",
  "publication_deposited" : "",
  "project_conducted_collab_uhcl_faculty" : "",
  "presented_research_at_sust_conference" : "",
  "sust_research_conf_description" : "",
  "support_url" : "",
  "supporting_document" : ''
}

const reader = new FileReader();
const Faculty = (props) => {
  const [state, setState] = useState(initial_state);
  const [stateKeyWords, setStateKeyWords] = useState([])
  // const today = new Date().toLocaleDateString()
  // const today = dateFormat(new Date, 'yyyy-MM-dd');
  const today = moment(new Date()).format("YYYY-MM-DD")
  useEffect(() => {
    setState(prevState => ({
      ...prevState,
      reporting_period_start_date: today
    }))
  }, [])

  const handleInputChange = (e) => {
    console.log(e.target.value);
    console.log("State", state);

    setState(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  }

  var KeyWords_vals = []
  
  const handleKeyWordsChange = (e) => {

    if (!stateKeyWords.includes(e.target.value)  ) {
      // impact_area_vals.push(e.target.value)
      console.log("in if block")
      setStateKeyWords(prev => ([
          ...prev,
          e.target.value
        ]
      ))
    }
    else{
      console.log("in celse block")
      KeyWords_vals = stateKeyWords.filter((v) => {
        return v !== e.target.value;
      })
      setStateKeyWords(KeyWords_vals)
      // console.log(stateImp_area);
      // console.log(stateImp_area.includes(e.target.value));
    }

    console.log(stateKeyWords);
    console.log(stateKeyWords.includes(e.target.value));
  }

  const handleSubmit = (e) => {
    
    e.preventDefault();
    const uploadData = new FormData();
    state.key_words = stateKeyWords.join(" , ");
    // uploadData.append(...state);
    for (let key in state) {
      uploadData.append(key, state[key]);
    }
    console.log("uploadData: ", uploadData);
    
    fetch(`${URL_SERVER}/research-and-scholarship/facultysustresearchandservice/`, {
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
        // setState(initial_state)
        setState((prevState) => ({
          ...prevState,
          ...initial_state2
        }))
        setStateKeyWords([])
        console.log(state);
    })
    .catch(err => {
        alert(err)
        console.log(err)
    })
    
  }
  return (
    <>
      <div className="container-fluid">
        <h2 className="curriculum-head">Research and Scholarship</h2>

        <div className="row" style={{ padding: "15px" }}>
          <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 tab-workgroup">
            <ul className="nav flex-column tab-workgroup-list" id="myTab">
              <li className="nav-item">
                <a
                  href="#home"
                  className="nav-link active"
                  data-bs-toggle="tab"
                >
                  Research and Scholarship
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 form-curriculum">
            <div className="tab-content">
              <div className="tab-pane fade show active" id="home">
                <h4 className="mt-2 head-academic">
                  Faculty Sustainability Research and Service Profile
                </h4>
                <form className="row g-3" enctype="multipart/form-data">

                <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Description:&nbsp; 
                    </label>
                    <label>
                      The purpose of the below is to collect data on our faculty’s’ sustainability related research interests and activities.
                    </label>
                  </div>

                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                    Reporting Period Start Date
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      name="reporting_period_start_date"
                      value={state.reporting_period_start_date}
                      onChange={handleInputChange}
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
                    value={state.reporting_period_end_date}
                    onChange={handleInputChange}
                    // readonly
                  />
                </div>
                  
                 {/* <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Project Date
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      name="project_date"
                      value={state.project_date}
                      onChange={handleInputChange}
                    />
                  </div>  */}
                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Faculty Name(who conducts sustainability research)
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="faculty_name"
                      value={state.faculty_name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Faculty Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      name="faculty_email"
                      value={state.faculty_email}
                      onChange={handleInputChange}
                    />
                  </div>
                  

                  <div className="col-md-12">
                    <label for="inputState" className="form-label fw-bold">
                      College
                    </label>
                    <select id="inputState" className="form-select"
                      name="college_or_unit"
                      onChange={handleInputChange}
                      value={state.college_or_unit}
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
                      onChange={handleInputChange}
                      value={state.department}
                    >
                      <option selected>Choose...</option>
                    
                      {
                        getDepartments(state.college_or_unit)?.map((d, i) =>(
                          <option key={i} value={d}>{d}</option>
                        ))
                      }
                    </select>
                  </div>


                  {/*<div className="col-md-12">
                    <label for="inputState" className="form-label fw-bold">
                      Departmental Affiliation
                    </label>
                    <select id="inputState" className="form-select" 
                      name="department_affiliation"
                      value={state.department_affiliation}
                      onChange={handleInputChange}
                      >
                      <option selected>Choose...</option>
                      <option value="College of Science">College of Science</option>
                      <option value="College of Education">College of Education</option>
                      <option value="College of Business">College of Business</option>
                      <option value="College of Humanity Sciences">College of Humanity Sciences</option>
                    </select>
                    </div>*/}  

                  <div className="col-md-12">
                    {/*<label for="inputPassword4" className="form-label fw-bold">
                      Serve on a board or committee of an external higher
                      education sustainability network or conference ?
                  </label> */}
                    <label for="inputPassword4" className="form-label fw-bold">
                      Do you serve on an external sustainability-related board, committee, network, or conference? 
                    </label> 
                  <div className="form-check ">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="served_higher_edu"
                        id="inlineRadio1"
                        value="True"
                        onChange={handleInputChange}
                        checked={state.served_higher_edu === "True"}
                      />
                      <label className="form-check-label " for="inlineRadio1">
                        Yes
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="served_higher_edu"
                        id="inlineRadio2"
                        value="False"
                        onChange={handleInputChange}
                        checked={state.served_higher_edu === "False"}
                      />
                      <label className="form-check-label" for="inlineRadio2">
                        No
                      </label>
                    </div>
                  </div>

                  {(state.served_higher_edu === "True" ) ? (
                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      If Yes, Provide a list or brief description of the board
                      or committee appointments, and service dates.
                    </label>
                    <textarea
                      type="text"
                      className="form-control"
                      name="sust_research_service_dates"
                      value={state.sust_research_service_dates}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>
                  ) : null}

                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                     Title of Research Project/Article
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="title_research_project"
                      value={state.title_research_project}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                     Abstract/Summary of the Project (no more than 500 words)
                    </label>
                    <textarea
                      type="text"
                      className="form-control"
                      name="abstract_summary_project"
                      value={state.abstract_summary_project}
                      onChange={handleInputChange}
                      ></textarea>
                  </div>
                  
                  <div className="col-md-12">
                    <label for="inputPassword4" className="form-label fw-bold">
                    Select Key Words
                    </label>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="key_words"
                        value="Circular Economy"
                        onChange={handleKeyWordsChange}
                        checked={stateKeyWords.includes("Circular Economy")}
                      />
                      <label className="form-check-label " for="inlineRadio1">
                      Circular Economy
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="key_words"
                        value="Climate Change"
                        onChange={handleKeyWordsChange}
                        checked={stateKeyWords.includes("Climate Change")}
                      />
                      <label className="form-check-label " for="inlineRadio1">
                      Climate Change
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="key_words"
                        value="Coastal Resilience"
                        onChange={handleKeyWordsChange}
                        checked={stateKeyWords.includes("Coastal Resilience")}
                      />
                      <label className="form-check-label " for="inlineRadio1">
                      Coastal Resilience
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="key_words"
                        value="Corporate Environmental Management"
                        onChange={handleKeyWordsChange}
                        checked={stateKeyWords.includes("Corporate Environmental Management")}
                      />
                      <label className="form-check-label " for="inlineRadio1">
                      Corporate Environmental Management
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="key_words"
                        value="Diversity, Equity, and Inclusion"
                        onChange={handleKeyWordsChange}
                        checked={stateKeyWords.includes("Diversity, Equity, and Inclusion")}
                      />
                      <label className="form-check-label " for="inlineRadio1">
                      Diversity, Equity, and Inclusion
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="key_words"
                        value="Environmental Accounting"
                        onChange={handleKeyWordsChange}
                        checked={stateKeyWords.includes("Environmental Accounting")}
                      />
                      <label className="form-check-label " for="inlineRadio1">
                      Environmental Accounting
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="key_words"
                        value="Environmental Economics"
                        onChange={handleKeyWordsChange}
                        checked={stateKeyWords.includes("Environmental Economics")}
                      />
                      <label className="form-check-label " for="inlineRadio1">
                      Environmental Economics
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="key_words"
                        value="Environmental Ethics"
                        onChange={handleKeyWordsChange}
                        checked={stateKeyWords.includes("Environmental Ethics")}
                      />
                      <label className="form-check-label " for="inlineRadio1">
                      Environmental Ethics
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="key_words"
                        value="Environmental Justice"
                        onChange={handleKeyWordsChange}
                        checked={stateKeyWords.includes("Environmental Justice")}
                      />
                      <label className="form-check-label " for="inlineRadio1">
                      Environmental Justice
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="key_words"
                        value="Environmental Law"
                        onChange={handleKeyWordsChange}
                        checked={stateKeyWords.includes("Environmental Law")}
                      />
                      <label className="form-check-label " for="inlineRadio1">
                      Environmental Law
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="key_words"
                        value="Environmental Reporting/Auditing"
                        onChange={handleKeyWordsChange}
                        checked={stateKeyWords.includes("Environmental Reporting/Auditing")}
                      />
                      <label className="form-check-label " for="inlineRadio1">
                      Environmental Reporting/Auditing
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="key_words"
                        value="Food Security"
                        onChange={handleKeyWordsChange}
                        checked={stateKeyWords.includes("Food Security")}
                      />
                      <label className="form-check-label " for="inlineRadio1">
                      Food Security
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="key_words"
                        value="Global Environmental Institutions/Policy"
                        onChange={handleKeyWordsChange}
                        checked={stateKeyWords.includes("Global Environmental Institutions/Policy")}
                      />
                      <label className="form-check-label " for="inlineRadio1">
                      Global Environmental Institutions/Policy
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="key_words"
                        value="Health Impact"
                        onChange={handleKeyWordsChange}
                        checked={stateKeyWords.includes("Health Impact")}
                      />
                      <label className="form-check-label " for="inlineRadio1">
                      Health Impact
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="key_words"
                        value="Spatial Analysis"
                        onChange={handleKeyWordsChange}
                        checked={stateKeyWords.includes("Spatial Analysis")}
                      />
                      <label className="form-check-label " for="inlineRadio1">
                      Spatial Analysis
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="key_words"
                        value="Sustainable Investments/Finance"
                        onChange={handleKeyWordsChange}
                        checked={stateKeyWords.includes("Sustainable Investments/Finance")}
                      />
                      <label className="form-check-label " for="inlineRadio1">
                      Sustainable Investments/Finance
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="key_words"
                        value="Stakeholder Participation"
                        onChange={handleKeyWordsChange}
                        checked={stateKeyWords.includes("Stakeholder Participation")}
                      />
                      <label className="form-check-label " for="inlineRadio1">
                      Stakeholder Participation
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="key_words"
                        value="Social Welfare and Wellbeing"
                        onChange={handleKeyWordsChange}
                        checked={stateKeyWords.includes("Social Welfare and Wellbeing")}
                      />
                      <label className="form-check-label " for="inlineRadio1">
                      Social Welfare and Wellbeing
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="key_words"
                        value="Waste Management"
                        onChange={handleKeyWordsChange}
                        checked={stateKeyWords.includes("Waste Management")}
                      />
                      <label className="form-check-label " for="inlineRadio1">
                      Waste Management
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="key_words"
                        value="Other"
                        onChange={handleKeyWordsChange}
                        checked={stateKeyWords.includes("Other")}
                      />
                      <label className="form-check-label " for="inlineRadio1">
                      Other
                      </label>
                    </div>
                  </div>
                  
                  {(stateKeyWords.includes("Other")) ? (
                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                    Add Keywords
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="additional_keywords"
                      value={state.additional_keywords}
                      onChange={handleInputChange}
                    />
                  </div>
                  ) : null}

                  <div className="col-md-12">
                    <label for="inputState" className="form-label fw-bold">
                      Sustainability Research Areas
                    </label>
                    <select id="inputState" 
                      className="form-select"
                      name="sust_research_area"
                      value={state.sust_research_area}
                      onChange={handleInputChange}  
                      isMulti
                    >
                      <option selected>Choose...</option>
                      <option value="Environmental">Environmental</option>
                      <option value="Social">Social</option>
                      <option value="Economic">Economic</option>
                      <option value="Educational">Educational</option> 
                    </select>
                  </div>

                  {/*
                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Research interests/topics or a brief description
                      justifying the individual's inclusion
                    </label>
                    <textarea
                      type="text"
                      className="form-control"
                      name="research_interests"
                      value={state.research_interests}
                      onChange={handleInputChange}
                    ></textarea>
                  </div> */}


                    <div className="col-md-12">
                    <label for="inputPassword4" className="form-label fw-bold">
                    Is this project conducted in collaboration with UHCL faculty?
                    </label>
                    <div className="form-check ">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="project_conducted_collab_uhcl_faculty"
                        id="inlineRadio1"
                        value="True"
                        onChange={handleInputChange}
                        checked={state.project_conducted_collab_uhcl_faculty === "True"}
                      />
                      <label className="form-check-label " for="inlineRadio1">
                        Yes
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="project_conducted_collab_uhcl_faculty"
                        id="inlineRadio2"
                        value="False"
                        onChange={handleInputChange}
                        checked={state.project_conducted_collab_uhcl_faculty === "False"}
                      />
                      <label className="form-check-label" for="inlineRadio2">
                        No
                      </label>
                    </div>
                  </div>
                  
                  {(state.project_conducted_collab_uhcl_faculty === "True" ) ? (
                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                    List names of faculty /coauthors/collaborators/co-researchers(optional).
                    </label>
                    <textarea
                      type="text"
                      className="form-control"
                      name="list_names_faculty_collab"
                      value={state.list_names_faculty_collab}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>
                  ) : null}


                  <div className="col-md-12">
                    <label for="inputPassword4" className="form-label fw-bold">
                      Research published in Peer-Reviewed Journal ?
                    </label>
                    <div className="form-check ">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="peer_reviewed_journal"
                        id="inlineRadio3"
                        value="yes"
                        onChange={handleInputChange}
                        checked={state.peer_reviewed_journal === "yes"}
                      />
                      <label className="form-check-label " for="inlineRadio1">
                        Yes
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="peer_reviewed_journal"
                        id="inlineRadio3"
                        value="no"
                        onChange={handleInputChange}
                        checked={state.peer_reviewed_journal === "no"}
                      />
                      <label className="form-check-label" for="inlineRadio2">
                        No
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="peer_reviewed_journal"
                        id="inlineRadio3"
                        value="pending"
                        onChange={handleInputChange}
                        checked={state.peer_reviewed_journal === "pending"}
                      />
                      <label className="form-check-label" for="inlineRadio3">
                        Pending
                      </label>
                    </div>
                  </div>
                  {(state.peer_reviewed_journal === "yes" || state.peer_reviewed_journal === "pending") ? (
                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Provide Publication title, Journal
                      Name, and Date of Publication
                    </label>
                    <textarea
                      type="text"
                      className="form-control"
                      name="publication_details"
                      value={state.publication_title}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>
                  ) : null}

                  {(state.peer_reviewed_journal === "yes" ) ? (
                  <div className="col-md-12">
                    <label for="inputPassword4" className="form-label fw-bold">
                      Is the publication deposited in a designated open
                      access repository ?
                    </label>
                    <div className="form-check ">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="publication_deposited"
                        id="inlineRadio1"
                        value="True"
                        onChange={handleInputChange}
                        checked={state.publication_deposited === "True"}
                      />
                      <label className="form-check-label " for="inlineRadio1">
                        Yes
                      </label>
                    </div>
                    
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="publication_deposited"
                        id="inlineRadio2"
                        value="False"
                        onChange={handleInputChange}
                        checked={state.publication_deposited === "False"}
                      />
                      <label className="form-check-label" for="inlineRadio2">
                        No
                      </label>
                    </div>
                  </div>
                  ) : null}

                  <div className="col-md-12">
                    <label for="inputPassword4" className="form-label fw-bold">
                      Presented Research at a Higher Education sustainability
                      conference ?
                    </label>
                    <div className="form-check ">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="presented_research_at_sust_conference"
                        id="inlineRadio1"
                        value="True"
                        onChange={handleInputChange}
                        checked={state.presented_research_at_sust_conference === "True"}
                      />
                      <label className="form-check-label " for="inlineRadio1">
                        Yes
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="presented_research_at_sust_conference"
                        id="inlineRadio2"
                        value="False"
                        onChange={handleInputChange}
                        checked={state.presented_research_at_sust_conference === "False"}
                      />
                      <label className="form-check-label" for="inlineRadio2">
                        No
                      </label>
                    </div>
                  </div>
                  
                  {(state.presented_research_at_sust_conference === "True" ) ? (
                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      If Yes, Provide a list or brief description of the
                      conferences, presentations, and dates.
                    </label>
                    <textarea
                      type="text"
                      className="form-control"
                      name="sust_research_conf_description"
                      value={state.sust_research_conf_description}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>
                  ) : null}

                 
                    <div className="col-md-12">
                    <label for="inputPassword4" className="form-label fw-bold">
                      Is this project grant supported? 
                    </label>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="grant_approval"
                        id="inlineRadio1"
                        value="yes"
                        onChange={handleInputChange}
                        selected={state.grant_approval === "yes"}
                        checked={state.grant_approval === "yes"}
                      />
                      <label className="form-check-label " for="inlineRadio1">
                        Yes
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="grant_approval"
                        id="inlineRadio2"
                        value="no"
                        onChange={handleInputChange}
                        selected={state.grant_approval === "no"}
                        checked={state.grant_approval === "no"}
                      />
                      <label className="form-check-label" for="inlineRadio2">
                        No
                      </label>
                    </div>
                  </div>


                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Support URL(s) (Optional)
                    </label>
                    <textarea
                      type="text"
                      className="form-control"
                      name="support_url"
                      value={state.support_url}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>
                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fw-bold">
                      Supporting Documents (Optional)
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      onChange={(evt) => setState({ ...state, supporting_document: evt.target.files[0] })}
                      // onChange={handleFileChange}
                      name="supporting_document"
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

export default Faculty;
