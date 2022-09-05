import React, { useState, useEffect, useRef } from  "react";
import { Navigate } from "react-router-dom";
import { URL_SERVER } from "../serverurl";
import GetData from './TimeRange'
import { useReactToPrint } from "react-to-print";
const CampusAsLL = (props) => {


    const [state, setState] = useState({});
    const [startdate, setStartdate] = useState()
    const [enddate, setEnddate] = useState()
    
    console.log(props);
    
    const getData = (e) => {
        e.preventDefault();

        fetch(`${URL_SERVER}/curriculum/cllreport?enddate=${enddate}&startdate=${startdate}`, {
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

    }

    const handleDateChange = (e) => {
        if (e.target.name ==="startdate") {
          setStartdate(e.target.value);
        }
        else if (e.target.name ==="enddate") {
          setEnddate(e.target.value);
        }
      }

  const componentRef = useRef()
  const handlePrint = useReactToPrint( {
    content: () => componentRef.current,
   })
  return (
    <>
    <div className="container-fluid" ref={componentRef}>
      <h2 className="curriculum-head">Applied Student Learning Outcomes</h2>
      <GetData onChange={handleDateChange} onClick={getData}/>
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
                <td>Number of Projects by Impact Area (for date range)</td>
                <td>
                {
                    state.data? Object.keys(state.data['1']).map((key, i) => {
                    return(
                        <dl>
                        <dt>{ key }</dt>
                        <dd>{ state.data['1'][key] }</dd>
                        </dl>
                    )
                }): 0}
              </td>
            </tr>
            
            <tr>
                <td>Number of Projects by Impact Area (for date range)</td>
                <td>
                {
                    state.data? Object.keys(state.data['2']).map((key, i) => {
                    return(
                        <dl>
                        <dt>{ key }</dt>
                        <dd>{ state.data['2'][key] }</dd>
                        </dl>
                    )
                }): 0}
              </td>
            </tr>
            
            <tr>
                <td>Number of Projects by type (for date range)</td>
                <td>
                {
                    state.data? Object.keys(state.data['3']).map((key, i) => {
                    return(
                        <dl>
                        <dt>{ key }</dt>
                        <dd>{ state.data['3'][key] }</dd>
                        </dl>
                    )
                }): 0}
              </td>
            </tr>

          </tbody>
          <tfoot>
            <tr>
              <td>Last Updated AT</td>
              <td>{state.data? new Date(state.data['4']).toString(): "No Time Stamp Found"}</td>
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

export default CampusAsLL;
