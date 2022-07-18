import React, { Component } from "react";

export default class ExperienceSection extends Component {
  render() {
    return (
      <div>
        {/* <!--Experience Sec--> */}
        <section
          id="exp_sec"
          className="col-lg-10 col-md-11 col-sm-11 center-div experience-wrap  sec-pad"
        >
          <h6>experience</h6>
          <div className="exp-timeline-wrap">
            <div className="row exp-timeline timeline-active">
              <div className="col-xs-2">
                <div className="timeline-st"></div>
              </div>
              <div className="col-xs-10 exp-content-wrap">
                <div className="row">
                  <div
                    className="wow fadeInRight"
                    data-wow-duration=".4s"
                    data-wow-delay="0s"
                  >
                    <div className="col-sm-3 duration">
                      <span>Sep 2021 - present</span>
                    </div>
                    <div className="col-sm-9">
                      <span className="job-desn">Software Engineer</span>
                      <span className="job-loc">
                         Ho Chi Minh City, Viet Nam
                      </span>
                      <p className="job-summary p-small">
                        The Software Engineer (SE) is responsible to write
                        software programs from design specifications; plans,
                        execute and document unit tests; report status and
                        issues; document detailed designs; accountable for unit
                        test leakage. Write software programs from design
                        specifications that are in compliance with established
                        coding quality standard of the company; write unit tests
                        ;run through all the test cases for assigned tasks and
                        ensure all cases tested and passed before release for
                        testing. Follow the company software development
                        process.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row exp-timeline">
              <div className="col-xs-2">
                <div className="timeline-st"></div>
              </div>
              <div className="col-xs-10 exp-content-wrap">
                <div className="row">
                  <div
                    className="wow fadeInRight"
                    data-wow-duration=".4s"
                    data-wow-delay="0.2s"
                  >
                    <div className="col-sm-3 duration">
                      <span>Jun 2021 — Sep 2021</span>
                    </div>
                    <div className="col-sm-9">
                      <span className="job-desn">.NET Intern</span>
                      <span className="job-loc">
                         Ho Chi Minh City, Viet Nam
                      </span>
                      <p className="job-summary p-small">
                        Learning the knowledge of the .NET programming language.
                        With all knowledge of .NET Engineers:
                        <br></br>+ Web Basic & Tooling
                        <br></br>+ Database Fundamentals
                        <br></br>+ .NET, ASP.NET Core
                        <br></br>+ Unit Test
                        <br></br>+ Front-End: ReactJS
                        <br></br>+ Azure Fundamentals
                        <br></br>+ Practice in real project
                        <br></br>
                        <br></br>
                        Actual work involved:
                        <br></br>+ Take courses with both soft skills and
                        English
                        <br></br>+ Build Asset Management Website using ASP.NET
                        core, ReactJs and Redux and Oidc, Identity Server 4, MS
                        SQL server, Refit library (Service to Service
                        comunication) on Backend
                        <br></br>+ Role: Team leader (Support) - Developer
                        <br></br>+ Take the Speaking test at the end of the
                        practice course
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="row exp-timeline">
              <div className="col-xs-2">
                <div className="timeline-st"></div>
              </div>
              <div className="col-xs-10 exp-content-wrap">
                <div className="row">
                  <div
                    className="wow fadeInRight"
                    data-wow-duration=".4s"
                    data-wow-delay="0.4s"
                  >
                    <div className="col-sm-3 duration">
                      <span>Jan 2013 – Jul 2013</span>
                    </div>
                    <div className="col-sm-9">
                      <span className="job-desn">Web Publishing</span>
                      <span className="job-loc">Daisystreet, NYC</span>
                      <p className="job-summary p-small">
                        Being the first design agency in my career and being one
                        among the best in New York, I've learned to be
                        proficient in a fast-paced work environment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div className="row exp-timeline">
              <div className="col-xs-2">
                <div className="timeline-st"></div>
              </div>
              <div className="col-xs-10 exp-content-wrap">
                <div className="row">
                  <div
                    className="wow fadeInRight"
                    data-wow-duration=".4s"
                    data-wow-delay="0.6s"
                  >
                    <div className="col-sm-3 duration">
                      <span>Oct 2011 – Jan 2013</span>
                    </div>
                    <div className="col-sm-9">
                      <span className="job-desn">Intern Developer</span>
                      <span className="job-loc">Oxwalk Ducks, California</span>
                      <p className="job-summary p-small">
                        Create frameworks to guide critical thinking, to
                        streamline the ideation process and to visualize complex
                        concepts. Uses various graphic approaches to make
                        complex ideas more tangible.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </section>
        {/* <!--/Experience Sec--> */}
      </div>
    );
  }
}
