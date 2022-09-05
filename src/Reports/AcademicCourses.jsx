import React, { useState, useEffect, useRef } from "react";
import { URL_SERVER } from "../serverurl";
import { useReactToPrint } from "react-to-print";
// import GetData from './TimeRange'

const AcademicCourses = (props) => {
    const [state, setState] = useState({});
   
    useEffect(() => {
      // e.preventDefault();

      fetch(`${URL_SERVER}/curriculum/acreport/`, {
          method: 'GET',
          headers: {  
            'Content-Type': 'application/json', 
            'Authorization': 'Token ' + props.token
          }
      })
      .then(res => res.json())
      .then(data => {
          setState(data);
          console.log(state)
      })
      .catch(err => console.log(err))

  },[]);

  const componentRef = useRef()
  const handlePrint = useReactToPrint( {
    content: () => componentRef.current,
   })

  return (
    <>
    <div className="container-fluid" id="sust-courses-report" ref={componentRef}>
      <h2 className="curriculum-head">Sustainability Courses Outcomes</h2>
      {/* <GetData onChange={handleDateChange} onClick={getData}/> */}
      <div className="container report-curriculum">
        <table class="table table-striped table-bordered table-curriculum">
          <thead>
            <tr>
              <th scope="col">Outcomes</th>
              <th scope="col">Result</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Total number of undergraduate courses offered by the institution</td>
              <td>{state.data ? state.data['1']: 0}</td>
            </tr>
            <tr>
              <td>Number of undergraduate courses offered that are sustainability-focused</td>
              <td>{state.data? state.data['2']: 0}</td>
            </tr>
            <tr>
              <td>Number of undergraduate courses offered that are sustainability-inclusive</td>
              <td>{state.data? state.data['3']: 0}</td>
            </tr>
            <tr>
              <td>Total number of graduate coursesoffered by the institution</td>
              <td>{state.data? state.data['4']: 0}</td>
            </tr>
            <tr>
              <td>Number of graduate courses offered that are sustainability-focused</td>
              <td>{state.data? state.data['5']: 0}</td>
            </tr>
            <tr>
              <td>Number of graduate courses offered that are sustainability-inclusive</td>
              <td>{state.data? state.data['6']: 0}</td>
            </tr>
            <tr>
              <td>Total number of academic departments that offer courses (at any level)</td>
              <td>{state.data? state.data['7']: 0}</td>
            </tr>
            <tr>
              <td>Number of academic departments with sustainability course offerings</td>
              <td>{state.data? state.data['8']: 0}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>Last Updated AT</td>
              <td>{state.data? new Date(state.data['9']).toString(): "No Time Stamp Found"}</td>
            </tr>
          </tfoot>
        </table>
      </div>
      
    </div>
    
      <div class="container">
      <div class="row">
        <div class="col text-center">
        <button type="submit" className="btn btn-primary w-50"  onClick={handlePrint}>Download</button>
          
        </div>
      </div>
    </div>
    </>

  );
};

export default AcademicCourses;
