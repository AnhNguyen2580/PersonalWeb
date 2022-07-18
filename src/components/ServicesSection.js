import React, { Component } from "react";

export default class ServicesSection extends Component {
  render() {
    return (
      <div>
        {/* <!--WhatWeDo Sec--> */}
        <section
          id="services_sec"
          className="col-lg-10 col-md-11 col-sm-11 center-div services-icon-wrap  sec-pad-top sec-pad-bottom-xs"
        >
          <h6>what i do</h6>
          <div className="row">
            <div
              className="col-sm-3 col-xs-6 margin-bottom-sm icon-wrap wow fadeInLeft"
              data-wow-duration=".4s"
              data-wow-delay="0s"
            >
              <span className="icon pe-7s-graph3"></span>
              <span className="key-fact">FRONTEND-REACTJS</span>
            </div>
            <div
              className="col-sm-3 col-xs-6 margin-bottom-sm icon-wrap wow fadeInLeft"
              data-wow-duration=".4s"
              data-wow-delay=".1s"
            >
              <span className="icon pe-7s-browser"></span>
              <span className="key-fact">BACKEND-NODEJS</span>
            </div>
            <div
              className="col-sm-3 col-xs-6 margin-bottom-sm icon-wrap wow fadeInLeft"
              data-wow-duration=".4s"
              data-wow-delay=".2s"
            >
              <span className=" icon pe-7s-tools"></span>
              <span className="key-fact">DATABASE DESIGN</span>
            </div>
            <div
              className="col-sm-3 col-xs-6 margin-bottom-sm icon-wrap wow fadeInLeft"
              data-wow-duration=".4s"
              data-wow-delay=".3s"
            >
              <span className="icon pe-7s-note2"></span>
              <span className="key-fact">DOCUMENTATION</span>
            </div>
          </div>
        </section>
        {/* <!--/WhatWeDo Sec--> */}
      </div>
    );
  }
}
