import React, { Component } from 'react';

export default class LeftNavigation extends Component {
  render() {
    return (
      <div
        id="vertical_nav_wrap"
        className="col-lg-4 col-xs-12 pad-zero vertical-nav-wrap"
      >
        {/* <!--Navigation--> */}
        <nav className="navbar navbar-default vertical-nav" role="navigation">
          <div className="navbar-header">
            <button
              type="button"
              className="btn btn-default navbar-toggle"
              data-toggle="collapse"
              data-target="#navbar_collapse"
            >
              <span className="mask"></span>
              <span className="btn-label">
                <span className="pe-7s-menu"></span>
              </span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="navbar_collapse">
            <ul className="nav navbar-nav">
              <li>
                <a data-scroll href="#body">
                  {}
                </a>
                <span>about</span>
              </li>
              <li>
                <a data-scroll href="#services_sec">
                  {}
                </a>
                <span>services</span>
              </li>
              <li>
                <a data-scroll href="#skill_sec">
                  {}
                </a>
                <span>skills</span>
              </li>
              <li>
                <a data-scroll href="#work_sec">
                  {}
                </a>
                <span>work</span>
              </li>
              <li>
                <a data-scroll href="#edu_sec">
                  {}
                </a>
                <span>education</span>
              </li>
              <li>
                <a data-scroll href="#exp_sec">
                  {}
                </a>
                <span>experience</span>
              </li>
              <li>
                <a data-scroll href="#client_sec">
                  {}
                </a>
                <span>clients</span>
              </li>
              <li>
                <a data-scroll href="#achivement_sec">
                  {}
                </a>
                <span>achivements</span>
              </li>
              <li>
                <a data-scroll href="#contact_sec">
                  {}
                </a>
                <span>contact</span>
              </li>
            </ul>
          </div>
        </nav>
        {/* <!--/Navigation--> */}
      </div>
    );
  }
}
