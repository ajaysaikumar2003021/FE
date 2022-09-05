import React from "react";

const ExecutiveDirector = () => {
  return (
    <>
      <div className="container-fluid director-main">
        <h1 className="director-head">Executive Director</h1>
        <div className="container">
          <div className="row executive-main">
            <div className="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9">
              <h5 className="director-name">Megan Topham, Ph.D.</h5>
              <br />
              <p>
                Dr. Megan Topham is the Executive Director for the UHCL
                Institute for Human and Planetary Sustainability (IHAPS) and
                Clinical Assistant Professor of Management. She has a Ph.D. in
                Urban Planning with a concentration in Sustainability and a
                Master of Science in Information Systems from The University of
                Texas at Arlington. She has held previous positions with The
                University of Texas at Arlington, including Campus Director of
                UTA Fort Worth, a satellite campus in downtown Fort Worth, and
                Clinical Instructor in both the College of Business and School
                of Urban and Public Affairs, where she taught graduate courses
                in sustainability. Dr. Topham has extensive knowledge and
                experience developing and managing sustainable operations,
                innovative curriculum and programming, and strong community
                partnerships and advocates.
              </p>
              <p>
                Prior to joining UHCL in May 2021, Dr. Topham was an Assistant
                Professor in Public Administration and Real Estate Development
                in the Huizenga College of Business at Nova Southeastern
                University, where in addition to teaching undergraduate and
                graduate courses in the MPA, MS in Real Estate, and MS in
                Non-Profit Management programs, she created innovative student
                engagement and retention initiatives, streamlined the assurances
                of learning practices for the department, and facilitated the
                NASPAA accreditation process for their MPA program.
              </p>
              <p>
                In addition to holding the different administrative and academic
                positions, Dr. Topham demonstrated an entrepreneurial spirit by
                founding Good Karma Kitchen and Crazy Karma Commissary, a food
                truck and catering company and commercial commissary in Fort
                Worth, TX. She is a certified massage therapist, yoga
                instructor, and has a rank of second-degree black belt in
                aikido. Dr. Topham works to enhance the lives of others through
                her work with a myriad of community service organizations in
                which she has served over the years, including ARES, Meals on
                Wheels, Leadership Fort Worth, Texas Makers Guild, FWISD
                Education Foundation, Urban Theory, and the Fort Worth Chamber
                of Commerce.
              </p>
            </div>
            <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
              <div className="director-img">
                <img src="assets/images/megan-topham.jpg" alt="megan-topham" />
                <h6>Megan Topham, Ph.D.</h6>
                <br />
                <h6>
                  Email:<a href="mailto:topham@uhcl.edu">topham@uhcl.edu</a>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExecutiveDirector;
