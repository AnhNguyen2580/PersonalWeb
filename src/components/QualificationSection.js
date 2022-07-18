import React, { Component } from "react";

export default class QualificationSection extends Component {
  render() {
    return (
      <div>
        {/* <!--Qualfication Sec--> */}
        <section
          id="edu_sec"
          className="col-lg-10 col-md-11 col-sm-11 center-div education-wrap  sec-pad"
        >
          <h6>education</h6>
          <p className="wow fadeInUp text-justify" data-wow-duration=".4s">
            I spent 4 years learning Information System at University of
            Information Technology. Now, only 0.5 years left for me to get my
            Bachelor degree. Before I graduate from university, I hope that I
            will get an IELTS 7, a language degree that will give me a lot of
            potential to develop my career in the future. Now, I'm learning in
            class while taking knowledge from my work at NashTech. I think one
            should never stop learning and go through a process of acquiring
            knowledge.
          </p>
          <div className="qualfication-wrap">
            <div
              className="qualfication first-row wow fadeInUp"
              data-wow-duration=".4s"
            >
              <div className="col-sm-2">
                <span className="row-count">
                  <span>1</span>
                </span>
              </div>
              <div className="col-sm-2">
                <span className="yr-pers vertical-align-pad">2018-2022</span>
              </div>
              <div className="col-sm-5">
                <span className="insti vertical-align-pad">
                  University of Information Technology, VNUHCM
                </span>
              </div>
              <div className="col-sm-3">
                <span className="design vertical-align-pad">
                  Bachelor of Information System
                </span>
              </div>
            </div>
            <div className="qualfication wow fadeInUp" data-wow-duration=".4s">
              <div className="col-sm-2">
                <span className="row-count">
                  <span>2</span>
                </span>
              </div>
              <div className="col-sm-2">
                <span className="yr-pers vertical-align-pad">2021-2022</span>
              </div>
              <div className="col-sm-5">
                <span className="insti vertical-align-pad">English center</span>
              </div>
              <div className="col-sm-3">
                <span className="design vertical-align-pad">IELTS 7</span>
              </div>
            </div>
            <div className="qualfication wow fadeInUp" data-wow-duration=".4s">
              <div className="col-sm-2">
                <span className="row-count">
                  <span>3</span>
                </span>
              </div>
              <div className="col-sm-2">
                <span className="yr-pers vertical-align-pad">2015-2018</span>
              </div>
              <div className="col-sm-5">
                <span className="insti vertical-align-pad">
                  Le Loi High school
                </span>
              </div>
              <div className="col-sm-3">
                <span className="design vertical-align-pad">
                  High school diploma
                </span>
              </div>
            </div>
          </div>
        </section>
        {/* <!--/Qualfication Sec--> */}
      </div>
    );
  }
}
