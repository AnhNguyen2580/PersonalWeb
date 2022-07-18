import React, { Component } from "react";

export default class Introduction extends Component {
  render() {
    return (
      <div>
        {/* <!--Introduction Sec--> */}
        <section
          id="intro_content_sec"
          className="col-lg-10 col-md-11 col-sm-11 center-div intro-content-wrap sec-pad"
        >
          <div className="person-img margin-bottom-xs"></div>
          <h1 className="text-white">
            Hey!<span id="typed"></span>
          </h1>
          <h6>about</h6>
          <p className="pad-bottom-35 wow fadeInUp" data-wow-duration=".6s">
          With my efforts and will to strive in the university,
          I will constantly learn, try to develop my knowledge, 
          skills and experience to bring value to the company and
          help the company reach business goals in Microsoft .NET domain.
          I enjoy bringing clarity to complex problems with a people first approach.
          </p>
          <p className="wow fadeInUp" data-wow-duration=".4s">
            I am a complete social person. Find my work on
            &nbsp;
            <a href="https://github.com/AnhNguyen2580" className="goto-social">
              Github
            </a>
            . Experience my social networking activities on &nbsp;
            <a href="https://www.instagram.com/otis_21y/" className="goto-social">
              Instagram
            </a>
            &nbsp; & &nbsp;
            <a
              className="goto-social"
              href="https://www.facebook.com/tustes.tuans"
            >
              Facebook
            </a>
            .
          </p>
          <div
            className="per-signature margin-top-sm wow fadeInUp"
            data-wow-duration=".4s"
          >
            <img
              className="img-responsive"
              src="assets/img/signature.png"
              alt="signature"
            />
          </div>
        </section>
        {/* <!--/Introduction Sec--> */}
      </div>
    );
  }
}
