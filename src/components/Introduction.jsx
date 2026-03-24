export default function Introduction() {
  return (
    <section
      id="intro_content_sec"
      className="col-lg-10 col-md-11 col-sm-11 center-div intro-content-wrap sec-pad"
    >
      <div className="person-img margin-bottom-xs pulse-glow"></div>
      <h1 className="text-white">
        Hey!<span id="typed"></span>
      </h1>
      <span className="qa-badge">QA Engineer</span>
      <h6 style={{ marginTop: '30px' }}>about</h6>
      <p className="pad-bottom-35 wow fadeInUp" data-wow-duration=".6s">
        I am a dedicated <strong style={{ color: '#8DB393' }}>QA Engineer</strong> with
        a strong passion for ensuring software quality and reliability. With a solid
        foundation in Information Systems from the University of Information Technology
        (VNUHCM), I bring a meticulous eye for detail and a systematic approach to testing.
        I constantly strive to develop my knowledge, skills, and experience to deliver
        high-quality products and help organizations achieve their business goals.
      </p>
      <p className="wow fadeInUp" data-wow-duration=".4s">
        I enjoy bringing clarity to complex problems with a quality-first approach.
        Find my work on&nbsp;
        <a href="https://github.com/AnhNguyen2580" className="goto-social">Github</a>.
        Experience my social networking activities on&nbsp;
        <a href="https://www.instagram.com/otis_21y/" className="goto-social">Instagram</a>
        &nbsp;&&nbsp;
        <a className="goto-social" href="https://www.facebook.com/tustes.tuans">Facebook</a>.
      </p>

      {/* Stats */}
      <div className="row" style={{ marginTop: '50px' }}>
        <div className="col-sm-3 col-xs-6">
          <div className="stat-card wow fadeInUp" data-wow-duration=".4s" data-wow-delay="0s">
            <span className="stat-number">3+</span>
            <span className="stat-label">Years Experience</span>
          </div>
        </div>
        <div className="col-sm-3 col-xs-6">
          <div className="stat-card wow fadeInUp" data-wow-duration=".4s" data-wow-delay=".1s">
            <span className="stat-number">500+</span>
            <span className="stat-label">Test Cases</span>
          </div>
        </div>
        <div className="col-sm-3 col-xs-6">
          <div className="stat-card wow fadeInUp" data-wow-duration=".4s" data-wow-delay=".2s">
            <span className="stat-number">50+</span>
            <span className="stat-label">Bugs Found</span>
          </div>
        </div>
        <div className="col-sm-3 col-xs-6">
          <div className="stat-card wow fadeInUp" data-wow-duration=".4s" data-wow-delay=".3s">
            <span className="stat-number">10+</span>
            <span className="stat-label">Projects</span>
          </div>
        </div>
      </div>

      <div
        className="per-signature margin-top-sm wow fadeInUp"
        data-wow-duration=".4s"
      >
        <img className="img-responsive" src="/assets/img/signature.png" alt="signature" />
      </div>
    </section>
  );
}
