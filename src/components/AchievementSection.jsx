export default function AchievementSection() {
  return (
    <section
      id="achivement_sec"
      className="col-lg-10 col-md-11 col-sm-11 center-div achivement-wrap sec-pad-top sec-pad-bottom-sm"
    >
      <h6>achievements</h6>
      <div className="section-intro-card wow fadeInUp" data-wow-duration=".4s">
        <p style={{ margin: 0 }}>
          Through dedication and continuous learning, I have achieved several
          milestones in my QA Engineering career. I have a solid work ethic and
          always strive to exceed expectations. I don't just want to meet deadlines
          — I prefer to deliver high-quality results well ahead of schedule while
          ensuring thorough test coverage.
        </p>
      </div>
      <div className="achivement-list-wrap margin-top-40">
        <ul className="row">
          <li className="col-sm-6">
            <ul>
              <li
                className="margin-bottom-xs wow fadeInUp"
                data-wow-duration=".4s"
                data-wow-delay="0s"
              >
                <span className="dash-pointer">-</span>
                <span className="achive-pts">
                  Codelearn - C++ for Beginners, Advanced C++
                </span>
              </li>
              <li
                className="margin-bottom-xs wow fadeInUp"
                data-wow-duration=".4s"
                data-wow-delay=".2s"
              >
                <span className="dash-pointer">-</span>
                <span className="achive-pts">
                  Codelearn - Data Structure and Algorithms (DS&A)
                </span>
              </li>
              <li
                className="margin-bottom-xs wow fadeInUp"
                data-wow-duration=".4s"
                data-wow-delay=".4s"
              >
                <span className="dash-pointer">-</span>
                <span className="achive-pts">
                  Complete ERP SIMULATION GAMES 2020 training (SAP S/4 HANA)
                </span>
              </li>
            </ul>
          </li>
          <li className="col-sm-6">
            <ul>
              <li
                className="margin-bottom-xs wow fadeInUp"
                data-wow-duration=".4s"
                data-wow-delay="0s"
              >
                <span className="dash-pointer">-</span>
                <span className="achive-pts">
                  Certificate of WordPress Programming
                </span>
              </li>
              <li
                className="margin-bottom-xs wow fadeInUp"
                data-wow-duration=".4s"
                data-wow-delay="0.2s"
              >
                <span className="dash-pointer">-</span>
                <span className="achive-pts">
                  Certificates of excellent students in study and training
                </span>
              </li>
              <li
                className="margin-bottom-xs wow fadeInUp"
                data-wow-duration=".4s"
                data-wow-delay=".4s"
              >
                <span className="dash-pointer">-</span>
                <span className="achive-pts">
                  ISTQB Foundation Level Certification (in progress)
                </span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
}
