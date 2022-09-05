import React from "react";

const FourDimension = () => {
  return (
    <div className="container-fluid four-dimension">
      <h2 className="text-center dimension-head">
        The Four Dimensions of Sustainability
      </h2>
      <div className="container dimension-main">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          <div className="col">
            <div className="card h-100 dimension-card">
              <img
                src="assets/images/Icon-Social.png"
                className="card-img-top mx-auto d-block"
                alt="social-img"
              />
              <div className="card-body">
                <h5 className="card-title dimension-title">SOCIAL</h5>
                <p className="card-text text-center">
                  Creates diverse, equitable, and inclusive societies that enable
                  access, support wellness, improve quality of life, and
                  increase citizen engagement.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 dimension-card">
              <img
                src="assets/images/Icon-Economic.png"
                className="card-img-top mx-auto d-block"
                alt="economic-img"
              />
              <div className="card-body">
                <h5 className="card-title dimension-title">ECONOMIC</h5>
                <p className="card-text text-center">
                  Builds and supports long-term economic growth that optimizes
                  resources, improves productivity, and increases efficiencies
                  without negatively impacting the other dimensions.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 dimension-card">
              <img
                src="assets/images/Icon-Environmental.png"
                className="card-img-top mx-auto d-block"
                alt="environment-img"
              />
              <div className="card-body">
                <h5 className="card-title dimension-title">ENVIRONMENTAL</h5>
                <p className="card-text text-center">
                Protects, restores, and promotes ecosystems that prevent or mitigate vulnerabilities and harmful impacts to environmental resilience.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 dimension-card">
              <img
                src="assets/images/Icon-Educational.png"
                className="card-img-top mx-auto d-block"
                alt="education-img"
              />
              <div className="card-body">
                <h5 className="card-title dimension-title">EDUCATIONAL</h5>
                <p className="card-text text-center">
                Enhances the sharing and development of knowledge and experiences that support the other dimensions and creates a culture of continuous improvement, collaboration, and innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourDimension;
