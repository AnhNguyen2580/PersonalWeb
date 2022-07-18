import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div>
        {/* <!--Header--> */}
        <header>
          <div className="header-wrap col-lg-10 center-div">
            <div className="float-left name">
              <a data-scroll href="#body">
                <h1 className="text-dark">NGUYEN TUAN ANH</h1>
              </a>
            </div>

            <div className="float-right social-download-wrap">
              <a href="/#" className="btn btn-default float-left">
                <span className="mask"></span>
                <span className="btn-label">
                  <b>Contact me</b>
                  <span className="icon pe-7s-download"></span>
                </span>
              </a>
            </div>
          </div>
          <div className="clearfix"></div>
        </header>
        {/* <!--/Header--> */}
      </div>
    );
  }
}
