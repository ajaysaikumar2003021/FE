import React, { useState, useEffect , useRef} from "react";
import { URL_SERVER } from "../serverurl";
import { useReactToPrint } from "react-to-print";
const AcademicPrograms = (props) => {
    const [state, setState] = useState({});
    useEffect(() => {

      fetch(`${URL_SERVER}/curriculum/apreport/`, {
          method: 'GET',
          headers: {  
            'Content-Type': 'application/json', 
            'Authorization': 'Token ' + props.token
          }
      })
      .then(res => {
        if(res.ok){
          return res.json()
        }
        else{
          return res.text().then(text => { throw new Error(text) })
          // throw new Error(`Form Not Sumitted with Status Code: ${data.status}`)
        }
      })
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
    <div className="container-fluid" ref={componentRef}>
      <h2 className="curriculum-head">Sustainability Programs Outcomes</h2>
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
              <td>Number of programs by level</td>
              <td>
              {
                state.data? Object.keys(state.data['1']).map((key, i) => {
                  return(
                    <dl>
                      <dt>{key}</dt>
                      <dd>{ state.data['1'][key] }</dd>
                    </dl>
                  )
              }): 0}
              </td>
            </tr>
            <tr>
            <td>Number of programs by type</td>
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
              <td>Name and brief description of the sustainability-focused program type</td>
              <td>
              {
                state.data? Object.keys(state.data['3']).map((key, i) => {
                  return(
                    <dl>
                      <dt>{key}</dt>
                      <dd>{ state.data['3'][key] }</dd>
                    </dl>
                  )
              }): 0}
              </td>
            </tr>
            <tr>
              <td>Number of Programs with one or more sustainability-focused learning outcomes</td>
              <td>{state.data? state.data['4']: 0}</td>
            </tr>
            <tr>
              <td>Sustainability-focused programs by department</td>
              {/* <td>{state.data? state.data['5']: 0}</td> */}
              <td>
              {
                state.data? Object.keys(state.data['5']).map((key, i) => {
                  return(
                    <dl>
                      <dt>{key}</dt>
                      <dd>{ state.data['5'][key] }</dd>
                    </dl>
                  )
              }): 0}
              </td>
            </tr>
            
          </tbody>
          <tfoot>
            <tr>
              <td>Last Updated AT</td>
              <td>{state.data? new Date(state.data['6']).toString(): "No Time Stamp Found"}</td>
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

export default AcademicPrograms;
