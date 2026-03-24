export default function SkillsSection() {
  return (
    <section
      id="skill_sec"
      className="col-lg-10 col-md-11 col-sm-11 center-div skills-wrap sec-pad-top sec-pad-bottom-xs"
    >
      <h6>technical skills</h6>

      <div className="section-intro-card wow fadeInUp" data-wow-duration=".4s">
        <p style={{ margin: 0 }}>
          As a QA Engineer with a background in Information Systems, I have developed
          expertise in both manual and automated testing methodologies. My experience
          spans across various testing tools, frameworks, and CI/CD pipelines. I leverage
          critical thinking and analytical skills to identify edge cases and deliver
          reliable, high-quality software products.
        </p>
      </div>

      <div className="row margin-top-40">
        <div className="col-sm-5 margin-bottom-sm">
          <span className="progress-cat">Selenium / Appium / Playwright</span>
          <div className="progress-bar-graph">
            <div className="progress-bar-wrap">
              <div className="bar-wrap">
                <span data-width="80">
                  <strong><i>80</i>%</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-offset-1 col-sm-5 margin-bottom-sm">
          <span className="progress-cat">Postman / REST API Testing</span>
          <div className="progress-bar-graph">
            <div className="progress-bar-wrap">
              <div className="bar-wrap">
                <span data-width="85">
                  <strong><i>85</i>%</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="clearfix"></div>
        <div className="col-sm-5 margin-bottom-sm">
          <span className="progress-cat">JIRA / Azure DevOps</span>
          <div className="progress-bar-graph">
            <div className="progress-bar-wrap">
              <div className="bar-wrap">
                <span data-width="85">
                  <strong><i>85</i>%</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-offset-1 col-sm-5 margin-bottom-sm">
          <span className="progress-cat">SQL Server / Database Testing</span>
          <div className="progress-bar-graph">
            <div className="progress-bar-wrap">
              <div className="bar-wrap">
                <span data-width="80">
                  <strong><i>80</i>%</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="clearfix"></div>
        <div className="col-sm-5 margin-bottom-sm">
          <span className="progress-cat">Test Case Design & Management</span>
          <div className="progress-bar-graph">
            <div className="progress-bar-wrap">
              <div className="bar-wrap">
                <span data-width="90">
                  <strong><i>90</i>%</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-offset-1 col-sm-5 margin-bottom-sm">
          <span className="progress-cat">C# / .NET Unit Testing</span>
          <div className="progress-bar-graph">
            <div className="progress-bar-wrap">
              <div className="bar-wrap">
                <span data-width="75">
                  <strong><i>75</i>%</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="clearfix"></div>
        <div className="col-sm-5 margin-bottom-sm">
          <span className="progress-cat">Performance & Load Testing</span>
          <div className="progress-bar-graph">
            <div className="progress-bar-wrap">
              <div className="bar-wrap">
                <span data-width="70">
                  <strong><i>70</i>%</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-offset-1 col-sm-5 margin-bottom-sm">
          <span className="progress-cat">CI/CD / Git / Jenkins</span>
          <div className="progress-bar-graph">
            <div className="progress-bar-wrap">
              <div className="bar-wrap">
                <span data-width="75">
                  <strong><i>75</i>%</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="clearfix"></div>
        <div className="col-sm-5 margin-bottom-sm">
          <span className="progress-cat">Agile / Scrum Methodology</span>
          <div className="progress-bar-graph">
            <div className="progress-bar-wrap">
              <div className="bar-wrap">
                <span data-width="85">
                  <strong><i>85</i>%</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-offset-1 col-sm-5 margin-bottom-sm">
          <span className="progress-cat">Bug Tracking & Reporting</span>
          <div className="progress-bar-graph">
            <div className="progress-bar-wrap">
              <div className="bar-wrap">
                <span data-width="90">
                  <strong><i>90</i>%</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="clearfix"></div>
      </div>

      {/* Tools Grid */}
      <div className="highlight-card wow fadeInUp" data-wow-duration=".6s">
        <h5>Tools & Technologies</h5>
        <div className="tool-grid">
          <div className="tool-item">
            <span className="tool-icon pe-7s-search"></span>
            Selenium
          </div>
          <div className="tool-item">
            <span className="tool-icon pe-7s-config"></span>
            Appium
          </div>
          <div className="tool-item">
            <span className="tool-icon pe-7s-rocket"></span>
            Postman
          </div>
          <div className="tool-item">
            <span className="tool-icon pe-7s-graph3"></span>
            JMeter
          </div>
          <div className="tool-item">.
            <span className="tool-icon pe-7s-note2"></span>
            JIRA
          </div>
          <div className="tool-item">
            <span className="tool-icon pe-7s-cloud"></span>
            Azure DevOps
          </div>
          <div className="tool-item">
            <span className="tool-icon pe-7s-tools"></span>
            Git
          </div>
          <div className="tool-item">
            <span className="tool-icon pe-7s-server"></span>
            SQL Server
          </div>
        </div>
      </div>
    </section>
  );
}
