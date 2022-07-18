import React, { Component } from "react";

export default class WorkSection extends Component {
  render() {
    return (
      <div>
        {/* <!--Work Sec--> */}
        <section
          id="work_sec"
          className="col-lg-10 col-md-11 col-sm-11 center-div skills-wrap  sec-pad"
        >
          <h6>work</h6>

          <div id="portfolio-wrap" className="padding-sec-lg">
            <ul
              id="portfolio"
              className="auto-construct  project-gallery"
              data-col="2"
            >
              <li
                className="item"
                data-src="assets/img/Proactive.png"
                data-sub-html="<h6>PROACTIVE</h6><p>I take an active role in dealing with something before it needs to be taken care of.</p>"
              >
                <a href="/#">
                  <img
                    className="img-responsive"
                    src="assets/img/Proactive.png"
                    alt=" description"
                  />
                  <span className="hover-cap">Proactive</span>
                </a>
              </li>
              <li
                className="item"
                data-src="assets/img/Effective.png"
                //data-poster="assets/img/Effective.png"
                data-sub-html="<h6>EFFECTIVE</h6><p>I would like to have a particular role or result in practice, though not officially or in theory in the work which I do.</p>"
              >
                <a href="/#">
                  <img
                    className="img-responsive"
                    src="assets/img/Effective.png"
                    alt="description"
                  />
                  <span className="hover-cap">Effective</span>
                </a>
              </li>
              <li
                className="item"
                data-src="assets/img/Progressive.png"
                data-sub-html="<h6>PROGRESSIVE</h6><p>I have the spirit of always wanting to learn and accumulate for myself to improve and achieve many high achievements.</p>"
              >
                <a href="/#">
                  <img
                    className="img-responsive"
                    src="assets/img/Progressive.png"
                    alt=" description"
                  />
                  <span className="hover-cap">Progressive</span>
                </a>
              </li>
              <li
                className="item"
                data-src="assets/img/Optimistic.png"
                //data-poster="assets/img/Optimistic.png"
                data-sub-html="<h6>OPTIMISTIC</h6><p>I am an optimist who always wants to see things in a positive light. I believe that there is a way out of all difficulties if we are determined enough.</p>"
              >
                <a href="/#">
                  <img
                    className="img-responsive"
                    src="assets/img/Optimistic.png"
                    alt=" description"
                  />
                  <span className="hover-cap">Optimistic</span>
                </a>
              </li>

              <li
                className="item"
                data-src="assets/img/Logic.png"
                data-sub-html="<h6>LOGIC THINKING</h6><p>I complete my work by observing, analyzing, and reasoning to make decisions from primary data.</p>"
              >
                <a href="/#">
                  <img
                    className="img-responsive"
                    src="assets/img/Logic.png"
                    alt=" description"
                  />
                  <span className="hover-cap">Logic thinking</span>
                </a>
              </li>
              <li
                className="item"
                data-html="#video1"
                data-poster="assets/img/Creative.png"
                data-sub-html="<h6>CREATIVE</h6><p>I always would like to brainstorm to find new useful ideas and solutions to solve problems.</p>"
              >
                <a href="/#">
                  <img
                    className="img-responsive"
                    src="assets/img/Creative.png"
                    alt=" description"
                  />
                  <span className="hover-cap">Creative</span>
                </a>
              </li>
            </ul>
            {/* <!-- Hidden video div --> */}
            {/* <div style="display:none;" id="video1">
									<video className="lg-video-object lg-html5 video-js vjs-default-skin" controls preload="none">
										<source src="videos/video1.mp4" type="video/webm">
										<source src="videos/video1.webm" type="video/webm">
										 Your browser does not support HTML5 video.
									</video>
								</div> */}
          </div>
        </section>
        {/* <!--/Work Sec--> */}
      </div>
    );
  }
}
