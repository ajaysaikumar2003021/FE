import React, {useEffect} from "react";
import {useNavigate, Navigate} from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate()
  window.open(
    'https://www.uhcl.edu/sustainability/',
    // '_blank',
    // 'PopUp',
  );
  // window.location.assign('https://www.uhcl.edu/sustainability/');
  // navigate('/')
  // window.location.assign('/');
  return (
    <Navigate replace to="/" />
  )
  // return null;
  // return (
  //   <>
  //     <div className="container-fluid about-main">
  //       <div className="container">
  //         <h1 className="text-center head-about">About IHAPS</h1>
  //         <div className="m-4">
  //           <h3 className="objective-main">
  //             IHAPS Objectives: A Simple Breakdown
  //           </h3>
  //           <ul className="nav nav-tabs nav-fill tab-ihaps" id="myTab">
  //             <li className="nav-item">
  //               <a
  //                 href="#facility"
  //                 className="nav-link active"
  //                 data-bs-toggle="tab"
  //               >
  //                 Facilities and Operations
  //               </a>
  //             </li>
  //             <li className="nav-item">
  //               <a href="#Knowledge" className="nav-link" data-bs-toggle="tab">
  //                 Building Knowledge
  //               </a>
  //             </li>
  //             <li className="nav-item">
  //               <a href="#Leadership" className="nav-link" data-bs-toggle="tab">
  //                 Leadership & Organizational Structure
  //               </a>
  //             </li>
  //             <li className="nav-item">
  //               <a href="#Local" className="nav-link" data-bs-toggle="tab">
  //                 Local and Global Communities
  //               </a>
  //             </li>
  //           </ul>
  //           <div className="tab-content">
  //             <div className="tab-pane fade show active" id="facility">
  //               <ul className="item-ihaps">
  //                 <li>
  //                   To support students and faculty with sustainability facility
  //                   related projects - applied research and applications.
  //                 </li>

  //                 <li>
  //                   To develop and maintain a healthy, energy efficient, and
  //                   cost-effective environment while promoting sustainable
  //                   functions and operations in such areas as landscaping, land
  //                   use, buildings, infrastructure and energy efficient use,
  //                   water and waste management, purchasing, materials management
  //                   and recycling, dining services, transportation and power
  //                   equipment.
  //                 </li>

  //                 <li>
  //                   To make our campus a living laboratory for all interested in
  //                   participating in sustainability efforts that support the
  //                   purpose of the institute.
  //                 </li>
  //               </ul>
  //             </div>
  //             <div className="tab-pane fade" id="Knowledge">
  //               <ul className="item-ihaps">
  //                 <li>
  //                   To foster an understanding of sustainability issues through
  //                   education, training and communication by the dissemination
  //                   of pedagogical materials, discussion topics, case studies,
  //                   e-learning tools, and current and emerging technology.
  //                 </li>
  //                 <li>
  //                   To endorse a cross-faculty approach, to broaden the
  //                   curricula to include components of critical-ethical analysis
  //                   and systems thinking for sustainable development.
  //                 </li>
  //                 <li>
  //                   To support a student holistic learning approach by
  //                   integrating sustainability elements in degree programs,
  //                   resources, and exhibitions.
  //                 </li>
  //                 <li>
  //                   To focus faculty in research on sustainability challenges
  //                   with innovative solutions.
  //                 </li>
  //               </ul>
  //             </div>
  //             <div className="tab-pane fade" id="Leadership">
  //               <ul className="item-ihaps">
  //                 <li>
  //                   To improve organizational structures aimed to promote more
  //                   effective university-wide collaboration on sustainable
  //                   practices.
  //                 </li>
  //                 <li>
  //                   To support leadership activities that align with sustainable
  //                   practices within organizations.
  //                 </li>
  //               </ul>
  //             </div>
  //             <div className="tab-pane fade" id="Local">
  //               <ul className="item-ihaps">
  //                 <li>
  //                   To improve organizational structures aimed to promote more
  //                   effective university-wide collaboration on sustainable
  //                   practices.
  //                 </li>
  //                 <li>
  //                   To support leadership activities that align with sustainable
  //                   practices within organizations.
  //                 </li>
  //               </ul>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </>
  // );
};

export default AboutUs;
