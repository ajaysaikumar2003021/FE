import React from "react";
import {
  AiFillMail,
  AiFillLinkedin,
  AiOutlineTwitter,
  AiFillFacebook,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="container-fluid footer-ihaps">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <img
              src="/assets/images/IHAPS-LOGO.png"
              alt="logo"
              className="mx-auto d-block footer-logo"
            />
          </div>
          <div
            className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 right-foot"
            style={{ textAlign: "center" }}
          >
            <h4 className="fw-bold">University of Houston Clear Lake</h4>
            <p className="fw-bold">
              <a
                href="https://www.uhcl.edu/sustainability/"
                style={{ color: "#0078AE", textDecoration:"None" }}
              >
                Institute for Human and Planetary Sustainability
              </a>
            </p>

            <p className="fw-bold">Phone: 281-283-3062</p>
            <p className="fw-bold">Email: ihaps@uhcl.edu</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
