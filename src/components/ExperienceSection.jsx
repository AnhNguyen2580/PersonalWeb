export default function ExperienceSection() {
  return (
    <section
      id="exp_sec"
      className="col-lg-10 col-md-11 col-sm-11 center-div experience-wrap sec-pad"
    >
      <h6>experience</h6>
      <div className="exp-timeline-wrap">
        <div className="row exp-timeline timeline-active">
          <div className="col-xs-2">
            <div className="timeline-st"></div>
          </div>
          <div className="col-xs-10 exp-content-wrap">
            <div className="row">
              <div className="wow fadeInRight" data-wow-duration=".4s" data-wow-delay="0s">
                <div className="col-sm-3 duration">
                  <span>Sep 2021 - present</span>
                </div>
                <div className="col-sm-9">
                  <span className="job-desn">QA Engineer</span>
                  <span className="job-loc">Ho Chi Minh City, Viet Nam</span>
                  <p className="job-summary p-small">
                    Responsible for ensuring the quality and reliability of software products
                    throughout the development lifecycle:
                    <br /><br />
                    + Design, develop, and execute comprehensive test plans and test cases
                    <br />+ Perform manual and automated testing (functional, regression, integration, API)
                    <br />+ Identify, document, and track defects using JIRA and Azure DevOps
                    <br />+ Write and maintain automated test scripts using Selenium and Appium
                    <br />+ Conduct API testing using Postman and Swagger
                    <br />+ Perform database validation and SQL query testing, checking api response on mobile with Charles
                    <br />+ Participate in Agile/Scrum ceremonies
                    <br />+ Report test execution results and quality metrics to stakeholders
                  </p>
                  <div className="method-tags" style={{ marginTop: '15px' }}>
                    <span className="method-tag" style={{ fontSize: '10px', padding: '5px 12px' }}>Selenium</span>
                    <span className="method-tag" style={{ fontSize: '10px', padding: '5px 12px' }}>Appium</span>
                    <span className="method-tag" style={{ fontSize: '10px', padding: '5px 12px' }}>Postman</span>
                    <span className="method-tag" style={{ fontSize: '10px', padding: '5px 12px' }}>JIRA</span>
                    <span className="method-tag" style={{ fontSize: '10px', padding: '5px 12px' }}>Azure DevOps</span>
                    <span className="method-tag" style={{ fontSize: '10px', padding: '5px 12px' }}>SQL</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row exp-timeline" style={{ marginTop: '30px' }}>
          <div className="col-xs-2">
            <div className="timeline-st"></div>
          </div>
          <div className="col-xs-10 exp-content-wrap">
            <div className="row">
              <div className="wow fadeInRight" data-wow-duration=".4s" data-wow-delay="0.2s">
                <div className="col-sm-3 duration">
                  <span>Jun 2021 — Sep 2021</span>
                </div>
                <div className="col-sm-9">
                  <span className="job-desn">QA Intern</span>
                  <span className="job-loc">Ho Chi Minh City, Viet Nam</span>
                  <p className="job-summary p-small">
                    Learning the fundamentals of software quality assurance and testing:
                    <br /><br />
                    + Software Testing Fundamentals & SDLC
                    <br />+ Test Case Design Techniques (Equivalence Partitioning, Boundary Value Analysis)
                    <br />+ Database Fundamentals & SQL for Testers
                    <br />+ .NET, ASP.NET Core Application Testing
                    <br />+ Unit Testing & Integration Testing
                    <br />+ Azure DevOps & CI/CD Pipelines
                    <br /><br />
                    Actual work involved:
                    <br />+ Tested Asset Management Website (ASP.NET Core, ReactJS, Redux, MS SQL Server)
                    <br />+ Role: QA Team member - Test execution & bug reporting
                    <br />+ Created and maintained test documentation and test reports
                  </p>
                  <div className="method-tags" style={{ marginTop: '15px' }}>
                    <span className="method-tag" style={{ fontSize: '10px', padding: '5px 12px' }}>.NET Core</span>
                    <span className="method-tag" style={{ fontSize: '10px', padding: '5px 12px' }}>ReactJS</span>
                    <span className="method-tag" style={{ fontSize: '10px', padding: '5px 12px' }}>SQL Server</span>
                    <span className="method-tag" style={{ fontSize: '10px', padding: '5px 12px' }}>Azure</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
