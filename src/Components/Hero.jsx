import React from "react";
import TypeWriter from "typewriter-effect";

const Hero = () => {
  return (
    <div className="container-fluid">
      <div className="container hero-main">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 text-head">
            <div className="center-head">
              <div className="hero-text">
                <TypeWriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(
                        "<h1 class='text-center fw-bold' style='color:#047bad'>INSTITUTE FOR HUMAN AND PLANETARY SUSTAINABILITY</h1>"
                      )
                      .pauseFor(2500)
                      .start();
                  }}
                  options={{
                    cursor: null,
                    loop: true,
                  }}
                />
              </div>
              <div className="hero-caption">
                <p className="text-center">
                  Innovative Solutions for Sustainable Future
                </p>
              </div>  
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
            <img
              src="assets/images/homepageimage.png"
              alt="Home Page"
              className="hero-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
