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
      <span className="qa-badge">QA Automation Engineer</span>
      <h6 style={{ marginTop: '30px' }}>about</h6>
      <p className="pad-bottom-35 wow fadeInUp" data-wow-duration=".6s">
        I am a <strong style={{ color: 'var(--accent-soft)' }}>QA Automation Engineer</strong> who
        specializes in <strong style={{ color: 'var(--accent-soft)' }}>writing automation scripts
        with Selenium WebDriver and Appium</strong> to test web and mobile applications across
        iOS and Android. Over 3+ years I have built and maintained robust, page-object-based
        test frameworks — designing reusable scripts, data-driven test suites, and stable
        locators that survive real-world UI churn. My focus is turning manual regression cycles
        into fast, reliable automated runs wired into CI/CD.
      </p>
      <p className="wow fadeInUp" data-wow-duration=".4s">
        I write clean, maintainable test code, debug flaky tests, and validate APIs end to end.
        Find my automation work on&nbsp;
        <a href="https://github.com/AnhNguyen2580" className="goto-social">Github</a>.
        Connect with me on&nbsp;
        <a href="https://www.instagram.com/otis_21y/" className="goto-social">Instagram</a>
        &nbsp;&&nbsp;
        <a className="goto-social" href="https://www.facebook.com/tustes.tuans">Facebook</a>.
      </p>

      {/* Automation script showcase */}
      <div className="code-card wow fadeInUp" data-wow-duration=".6s">
        <div className="code-head">
          <span className="code-dot r"></span>
          <span className="code-dot y"></span>
          <span className="code-dot g"></span>
          <span className="code-file">login_test.py — Selenium &amp; Appium</span>
        </div>
        <pre><code><span className="c-com"># Web — Selenium WebDriver (Page Object Model)</span>{'\n'}
<span className="c-key">def</span> <span className="c-fn">test_login_web</span>(driver):{'\n'}
{'    '}page = <span className="c-fn">LoginPage</span>(driver){'\n'}
{'    '}page.<span className="c-fn">open</span>(<span className="c-str">"https://app.example.com"</span>){'\n'}
{'    '}page.<span className="c-fn">login</span>(<span className="c-str">"qa_user"</span>, <span className="c-str">"••••••••"</span>){'\n'}
{'    '}<span className="c-key">assert</span> page.<span className="c-fn">dashboard_is_visible</span>(){'\n'}
{'\n'}
<span className="c-com"># Mobile — Appium (iOS / Android)</span>{'\n'}
<span className="c-key">def</span> <span className="c-fn">test_login_app</span>(appium_driver):{'\n'}
{'    '}el = appium_driver.<span className="c-fn">find_element</span>(AppiumBy.ACCESSIBILITY_ID, <span className="c-str">"loginBtn"</span>){'\n'}
{'    '}<span className="c-fn">WebDriverWait</span>(appium_driver, <span className="c-num">10</span>).<span className="c-fn">until</span>(EC.element_to_be_clickable(el)){'\n'}
{'    '}el.<span className="c-fn">click</span>(){'\n'}
{'    '}<span className="c-key">assert</span> appium_driver.<span className="c-fn">find_element</span>(AppiumBy.ID, <span className="c-str">"home"</span>).is_displayed()</code></pre>
      </div>

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
