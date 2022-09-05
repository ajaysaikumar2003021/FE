import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import {useState, useEffect} from "react";
import HomePage from "./Pages/HomePage";
import AboutUs from "./Pages/AboutUs";
import ExecutiveDirector from "./Pages/ExecutiveDirector";
import Curriculum from "./Pages/Curriculum";
import Faculty from "./Pages/Faculty";
import CommunityEngagement from "./Pages/CommunityEngagement";
import Food from "./Pages/Food";
import Transportation from "./Pages/Transportation";
import Login from "./Pages/Login";
import PasswordReset from "./Pages/PasswordReset";
import PasswordResetConfirm from "./Pages/PasswordResetConfirm";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Logout from "./Components/Logout";
import CampusAsLL from "./Reports/Campusaslivinglab";
import AcademicCourses from "./Reports/AcademicCourses";
import AcademicPrograms from "./Reports/AcademicPrograms";
import FacultyResearchService from "./Reports/FacultyResearchService";
import PeertoPeer from "./Reports/PeertoPeer";
import ChangePassword from "./Pages/ChangePassword";
import {URL_SERVER} from "./serverurl.js";



function App() {
  
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  
  const getUser = (token) =>{
    fetch(`${URL_SERVER}/usersauth/user/`, {
      method: 'GET',
      headers: {  
        'Content-Type': 'application/json', 
        'Authorization': 'Token ' + token
      }
  })
  .then(res => {
      return res.json()
  })
  .then(data => {
    console.log("to set user")
      setUser(data);
      console.log(data)
        // return data
      // if (user === null) {
      //   alert("user is null")
      // }
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(data));
      // console.log("localstorage", localStorage.getItem("token"))
  })
  .catch(err => console.log(err))
  }
  const authentication = (token) => {
    setToken(token);
    console.log("came to authentication", token);
    getUser(token)
  }
  return (
    <>
      <BrowserRouter>
        <Header token={token}/>
        <Routes>
          <Route 
            path="/admin"
          ></Route>
          <Route 
            exact path="/" 
            element={<HomePage />} 
          />
          <Route 
            path="/about-ihaps" 
            element={<AboutUs />} 
          />
           
          <Route path="/executive-director" element={<ExecutiveDirector />} />
          <Route 
            path="/curriculum" 
            element={(token!==null && user!==null 
                      && user.user_permissions?.includes('curriculum.add_academiccourse')
                      && user.user_permissions?.includes('curriculum.add_academicprogram')
                      && user.user_permissions?.includes('curriculum.add_campusaslivinglab'))
                      ? <Curriculum token={token}/>
                      : <Navigate replace to="/login" />
                    }  
          />
          <Route 
            path="/faculty" 
            element={(token!==null && user!==null 
                      && user.user_permissions?.includes('researchscholarship.add_facultysustresearchandservice'))
                      ? <Faculty token={token}/>
                      : <Navigate replace to="/login" />
                    }  
          />
          <Route
            path="/community-engagement"
            element={(token!==null && user!==null 
                      && user.user_permissions?.includes('campusandcommunity.add_communityeducationprogram')
                      && user.user_permissions?.includes('campusandcommunity.add_communitypartnership')
                      && user.user_permissions?.includes('campusandcommunity.add_continuingeducationcourse')
                      && user.user_permissions?.includes('campusandcommunity.add_peertopeeroutreach')
                      && user.user_permissions?.includes('campusandcommunity.add_staffprofessionaldevelopment')
                      && user.user_permissions?.includes('campusandcommunity.add_studentsustgrpproginitiative'))
                      ? <CommunityEngagement token={token}/>
                      : <Navigate replace to="/login" />
                    } 
          />
          <Route 
            path="/food"
            element={(token!==null && user!==null && user.user_permissions?.includes('foodandwaste.add_foodbeveragepurchasing'))
                      ? <Food token={token}/>
                      : <Navigate replace to="/login" />
                    }  
          />
          <Route 
            path="/transportation" 
            element={(token!==null && user!==null && user.user_permissions?.includes('airandtransportation.add_campusfleet'))
                      ? <Transportation token={token}/>
                      : <Navigate replace to="/login" />
                    } 
          />
          <Route 
            path="/report-academic-courses" 
            element={(token!==null && user!==null )
                      ? <AcademicCourses token={token} user={user} />
                      : <Navigate replace to="/login" />
                    }
          />
          <Route 
            path="/report-academic-programs" 
            element={(token!==null && user!==null ) 
                      ? <AcademicPrograms token={token} user={user} /> 
                      : <Navigate replace to="/login" 
                      />
                    }
          />
          <Route 
            path="/report-campus-as-living-lab" 
            element={(token!==null && user!==null ) 
                      ? <CampusAsLL token={token} user={user} /> 
                      : <Navigate replace to="/login" 
                      />
                    }
            />
          <Route 
            path="/report-faculty-research-service" 
            element={(token!==null && user!==null ) 
                      ? <FacultyResearchService token={token} user={user}/> 
                      : <Navigate replace to="/login" 
                      />
                    }
          />
          <Route 
            path="/report-peer-to-peer" 
            element={(token!==null && user!==null ) 
                      ? <PeertoPeer token={token} user={user}/> 
                      : <Navigate replace to="/login" 
                      />
                    }
          />

          <Route path="/login"
            element={(token!==null && user!==null ) 
                      ? <Navigate replace to="/" 
                      />
                      : <Login authentication={authentication} token={token}/>
                    }
          />
          <Route 
            path="/change-password" 
            element={(token!==null && user!==null ) 
                      ? <ChangePassword token={token} user={user}/> 
                      : <Navigate replace to="/login" 
                      />
                    }
          /> 
          <Route path="/logout"
            element={(token!==null && user!==null ) 
                      ? <Logout />
                      : <Navigate replace to="/" />
                    }
          /> 

          <Route path="/password_reset"
            element={(token!==null && user!==null ) 
                      ? <Navigate replace to="/" 
                      />
                      : <PasswordReset/>
                    }
          />

          <Route path="/password_reset_confirm"
            element={(token!==null && user!==null ) 
                      ? <Navigate replace to="/" 
                      />
                      : <PasswordResetConfirm/>
                    }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
