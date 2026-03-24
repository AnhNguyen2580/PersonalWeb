export default function ServicesSection() {
  return (
    <section
      id="services_sec"
      className="col-lg-10 col-md-11 col-sm-11 center-div services-icon-wrap sec-pad-top sec-pad-bottom-xs"
    >
      <h6>what i do</h6>
      <div className="row" style={{ marginTop: '15px' }}>
        <div
          className="col-sm-3 col-xs-6 margin-bottom-sm icon-wrap wow fadeInLeft"
          data-wow-duration=".4s"
          data-wow-delay="0s"
        >
          <span className="icon pe-7s-search"></span>
          <span className="key-fact">Manual Testing</span>
        </div>
        <div
          className="col-sm-3 col-xs-6 margin-bottom-sm icon-wrap wow fadeInLeft"
          data-wow-duration=".4s"
          data-wow-delay=".1s"
        >
          <span className="icon pe-7s-config"></span>
          <span className="key-fact">Automation Testing</span>
        </div>
        <div
          className="col-sm-3 col-xs-6 margin-bottom-sm icon-wrap wow fadeInLeft"
          data-wow-duration=".4s"
          data-wow-delay=".2s"
        >
          <span className="icon pe-7s-graph3"></span>
          <span className="key-fact">API Testing</span>
        </div>
        <div
          className="col-sm-3 col-xs-6 margin-bottom-sm icon-wrap wow fadeInLeft"
          data-wow-duration=".4s"
          data-wow-delay=".3s"
        >
          <span className="icon pe-7s-note2"></span>
          <span className="key-fact">Test Documentation</span>
        </div>
      </div>

      {/* Methodology Tags */}
      <div className="method-tags wow fadeInUp" data-wow-duration=".6s">
        <span className="method-tag">Agile / Scrum</span>
        <span className="method-tag">Regression Testing</span>
        <span className="method-tag">Smoke Testing</span>
        <span className="method-tag">UAT</span>
        <span className="method-tag">Performance Testing</span>
        <span className="method-tag">Security Testing</span>
        <span className="method-tag">CI/CD Integration</span>
        <span className="method-tag">Cross-Browser Testing</span>
      </div>
    </section>
  );
}
