export default function WorkSection() {
  return (
    <section
      id="work_sec"
      className="col-lg-10 col-md-11 col-sm-11 center-div skills-wrap sec-pad"
    >
      <h6>work traits</h6>
      <div id="portfolio-wrap" className="padding-sec-lg">
        <ul
          id="portfolio"
          className="auto-construct project-gallery"
          data-col="2"
        >
          <li
            className="item"
            data-src="/assets/img/Proactive.png"
            data-sub-html="<h6>PROACTIVE</h6><p>I take an active role in identifying and preventing defects before they reach production.</p>"
          >
            <a href="/#">
              <img className="img-responsive" src="/assets/img/Proactive.png" alt="Proactive" />
              <span className="hover-cap">Proactive</span>
            </a>
          </li>
          <li
            className="item"
            data-src="/assets/img/Effective.png"
            data-sub-html="<h6>EFFECTIVE</h6><p>I deliver thorough and effective testing results that ensure product quality and reliability.</p>"
          >
            <a href="/#">
              <img className="img-responsive" src="/assets/img/Effective.png" alt="Effective" />
              <span className="hover-cap">Effective</span>
            </a>
          </li>
          <li
            className="item"
            data-src="/assets/img/Progressive.png"
            data-sub-html="<h6>PROGRESSIVE</h6><p>I continuously learn new testing tools and methodologies to stay ahead in the QA field.</p>"
          >
            <a href="/#">
              <img className="img-responsive" src="/assets/img/Progressive.png" alt="Progressive" />
              <span className="hover-cap">Progressive</span>
            </a>
          </li>
          <li
            className="item"
            data-src="/assets/img/Optimistic.png"
            data-sub-html="<h6>OPTIMISTIC</h6><p>I believe every bug is an opportunity to improve the product and deliver a better user experience.</p>"
          >
            <a href="/#">
              <img className="img-responsive" src="/assets/img/Optimistic.png" alt="Optimistic" />
              <span className="hover-cap">Optimistic</span>
            </a>
          </li>
          <li
            className="item"
            data-src="/assets/img/Logic.png"
            data-sub-html="<h6>LOGIC THINKING</h6><p>I analyze requirements systematically to design comprehensive test cases covering all edge cases.</p>"
          >
            <a href="/#">
              <img className="img-responsive" src="/assets/img/Logic.png" alt="Logic Thinking" />
              <span className="hover-cap">Logic thinking</span>
            </a>
          </li>
          <li
            className="item"
            data-src="/assets/img/Creative.png"
            data-sub-html="<h6>CREATIVE</h6><p>I think outside the box to find hidden bugs and create innovative testing strategies.</p>"
          >
            <a href="/#">
              <img className="img-responsive" src="/assets/img/Creative.png" alt="Creative" />
              <span className="hover-cap">Creative</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
