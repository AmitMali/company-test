import React, { Component } from "react";

export default class Services extends Component {
  render() {
    return (
      <>
        <div className="service">
          <h1 className="service-heading">Our Services</h1>
          <div className="container-fluid">
            <div className="row">
              <div className="col-4">
                <img
                  className="services-icon"
                  src="img/website.png"
                  alt="Web Desigin"
                />
                <h4 className="service-heading">Web Desigin</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quidem excepturi laboriosam facere libero
                </p>
              </div>
              <div className="col-4">
                <img
                  className="services-icon"
                  src="img/content-marketing.png"
                  alt="Digital Marketing"
                />
                <h4 className="service-heading">Digital Marketing</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quidem excepturi laboriosam facere libero
                </p>
              </div>
              <div className="col-4">
                <img
                  className="services-icon"
                  src="img/website-codes.png"
                  alt="Web Development"
                />
                <h4 className="service-heading">Web Development</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quidem excepturi laboriosam facere libero
                </p>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-4">
                <img
                  className="services-icon"
                  src="img/animation.png"
                  alt="Motion Design"
                />
                <h4 className="service-heading">Motion Design</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quidem excepturi laboriosam facere libero
                </p>
              </div>
              <div className="col-4">
                <img
                  className="services-icon"
                  src="img/mobile-app.png"
                  alt="App Development"
                />
                <h4 className="service-heading">App Development</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quidem excepturi laboriosam facere libero
                </p>
              </div>
              <div className="col-4">
                <img
                  className="services-icon"
                  src="img/creative.png"
                  alt="Creative Services"
                />
                <h4 className="service-heading">Creative Services</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quidem excepturi laboriosam facere libero
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
