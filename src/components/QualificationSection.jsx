export default function QualificationSection() {
  return (
    <section
      id="edu_sec"
      className="col-lg-10 col-md-11 col-sm-11 center-div education-wrap sec-pad"
    >
      <h6>education</h6>
      <div className="section-intro-card wow fadeInUp" data-wow-duration=".4s">
        <p style={{ margin: 0 }}>
          I spent 4 years learning Information Systems at the University of
          Information Technology (VNUHCM), which gave me a strong foundation in
          software development and quality assurance principles. My academic
          background combined with practical industry experience has equipped me
          with the analytical and technical skills essential for a QA Engineer role.
        </p>
      </div>
      <div className="qualfication-wrap">
        <div className="qualfication first-row wow fadeInUp" data-wow-duration=".4s">
          <div className="col-sm-2">
            <span className="row-count"><span>1</span></span>
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
            <span className="row-count"><span>2</span></span>
          </div>
          <div className="col-sm-2">
            <span className="yr-pers vertical-align-pad">2021-2022</span>
          </div>
          <div className="col-sm-5">
            <span className="insti vertical-align-pad">English center</span>
          </div>
          <div className="col-sm-3">
            <span className="design vertical-align-pad">IELTS 6.5</span>
          </div>
        </div>
        <div className="qualfication wow fadeInUp" data-wow-duration=".4s">
          <div className="col-sm-2">
            <span className="row-count"><span>3</span></span>
          </div>
          <div className="col-sm-2">
            <span className="yr-pers vertical-align-pad">2015-2018</span>
          </div>
          <div className="col-sm-5">
            <span className="insti vertical-align-pad">Le Loi High school</span>
          </div>
          <div className="col-sm-3">
            <span className="design vertical-align-pad">High school diploma</span>
          </div>
        </div>
      </div>
    </section>
  );
}
