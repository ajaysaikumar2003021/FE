import React from "react";
import { Outlet, Link } from "react-router-dom";
const Header = (props) => {
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg header">
        <div className="container-fluid">
          <img
            className="navbar-brand logo"
            src="/assets/images/IHAPS-LOGO.png"
            href="#"
          />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="bi bi-list" style={{color:"black !important",fontSize:"25px"}}></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <span className="navbar-text">
              <ul
                className="navbar-nav me-auto mb-2
               mb-lg-0"
              >
                <li className="nav-item head-item">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                

                <li className="nav-item head-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Sustainability Forms
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <Link className="dropdown-item" to="/curriculum">
                        Curriculum
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/faculty">
                        Research and Scholarship
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/community-engagement"
                      >
                        Campus and Community Engagement
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/food">
                        Food and Waste
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/transportation">
                        Air and Transportation
                      </Link>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Other WorkGroups
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item head-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Reports & Data
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <Link className="dropdown-item" to="/report-academic-courses">
                      Sustainability Courses
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/report-academic-programs">
                      Sustainability Programs
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/report-campus-as-living-lab">
                        Applied Student Learning
                      </Link>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/report-faculty-research-service">
                        Faculty Sustainability Research and Service
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/report-peer-to-peer">
                        Peer-to-Peer Outreach
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item head-item">
                  <Link to="/about-ihaps" className="nav-link">
                    About us
                  </Link>
                </li>
                {/* <li className="nav-item head-item">
                  /* <Link className="nav-link" to="/executive-director"> 
                  <Link className="nav-link" to="#">
                  About SAC
                  </Link>
                </li> 
                */}
                
                {(props.token === null) ? null : (
                  <li className="nav-item head-item">
                  <Link className="nav-link" to= "/change-password">
                    Change Password
                  </Link>
                </li>
                )}
                
                <li className="nav-item head-item">
                  <Link className="nav-link" to={(props.token===null) ? "/login" : "/logout"}>
                    {(props.token===null) ? "Login" : "Logout"}
                  </Link>
                </li>
              </ul>
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
