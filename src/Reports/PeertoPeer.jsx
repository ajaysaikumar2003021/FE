import React, { useState, useRef } from "react";
import { URL_SERVER } from "../serverurl";
import GetData from './TimeRange'
import { useReactToPrint } from "react-to-print";

const PeertoPeer = (props) => {
    const [state, setState] = useState({});
    const [startdate, setStartdate] = useState()
    const [enddate, setEnddate] = useState()

    const getData = (e) => {
        e.preventDefault();

        fetch(`${URL_SERVER}/campus-and-community/p2preport?startdate=${startdate}&enddate=${enddate}`, {
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
      <h2 className="curriculum-head">Peer-to-Peer Outreach Outcomes</h2>
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

              <td>Number of sustainability outreach and education program(s)</td>
              <td>{state.data? state.data['1']: 0}</td>
            
            </tr>
            <tr>
                <td>Total number of trained student and/or employee educators across all programs</td>
                <td><td>{state.data? state.data['2']: 0}</td></td>
            </tr>
            <tr>
                <td>Total number of hours worked by student and/or employee educators</td>
                <td><td>{state.data? state.data['3']: 0}</td></td>
            </tr>
            <tr>
                <td>Types of audiences supported by the student outreach and educators programs</td>
                <td>
                  <ul>
                    {state.data? state.data['4'].map((item, index) => {
                      return <li key={index}>{item}</li>
                    }): null}
                  </ul>
                </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>Last Updated AT</td>
              <td>{state.data? Date(state.data['5']).toString(): "No Time Stamp Found"}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
      {/* </div> */}
    
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

export default PeertoPeer;
