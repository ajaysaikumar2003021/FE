import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import {URL_SERVER} from "../serverurl";



const Login = (props) => {
  const [state, setState] = useState(null);
  const [location, setLocation] = useState("/temp");
  // let history = useHistory()
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
    
    fetch(`${URL_SERVER}/usersauth/changepassword/${props.user.id}/`, {
        method: 'PUT',
        headers: {  
            'Content-Type': 'application/json',
            'Authorization': 'Token ' + props.token
        },
        body: JSON.stringify(state)
    })
    .then(res => {
      if(res.ok){
        // alert('Form Submitted Successfully!!')
        return res.json()
      }
      else{
        return res.text().then(text => { throw new Error(text) })
        // throw new Error(`Form Not Sumitted with Status Code: ${data.status}`)
      }
    })
    .then(data => {
      localStorage.removeItem("token")
      localStorage.removeItem("user")
      window.location.assign('/')
    })
    .catch(err => {
        alert(err)
        console.log(err)
    })
    
  }


  return (
    <>
      <div className="container-fluid">
        <h2 className="curriculum-head">Login</h2>
        <div className="container form-login">
          <form>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label fw-bold">
                Old Password*
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="old_password"
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label fw-bold">
                New Password*
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                name="new_password"
                onChange={handleInputChange}
              />
            </div>
            <button type="submit" className="btn btn-primary w-100" onClick={handleSubmit}>
              Change Password
            </button>
          </form>
          <br />
          {/* <Link className="nav-link text-center" to="/signup">
            Create an Account
          </Link> */}
        </div>
      </div>
     
    </>
  );
};

export default Login;
