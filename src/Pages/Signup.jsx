import React from "react";

const Signup = () => {
  return (
    <>
      <div className="container-fluid">
        <h2 className="curriculum-head">Signup</h2>
        <div className="container form-sign">
          <form className="row g-3">
            <div className="col-md-6">
              <label for="exampleInputEmail1" className="form-label fw-bold">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="col-md-6">
              <label for="exampleInputEmail1" className="form-label fw-bold">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="col-md-6">
              <label for="exampleInputEmail1" className="form-label fw-bold">
                Position
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="col-md-6">
              <label for="exampleInputEmail1" className="form-label fw-bold">
                UHCL Email
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="col-md-6">
              <label for="exampleInputPassword1" className="form-label fw-bold">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="col-md-6">
              <label for="exampleInputPassword1" className="form-label fw-bold">
                Retype Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary w-100">
                Signup
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
