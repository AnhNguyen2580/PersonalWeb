export default function ContactSection() {
  return (
    <section
      id="contact_sec"
      className="col-lg-10 col-md-11 col-sm-11 center-div contact-wrap sec-pad-top sec-pad-bottom-sm"
    >
      <h6 className="mb-4">contact</h6>
      <div className="align-center wow fadeInUp" data-wow-duration=".4s">
        <h3 className="text-white">
          Let's work together to build quality software.
        </h3>
        <p style={{ marginBottom: '40px' }}>
          Have a project that needs QA expertise? I'd love to hear from you.
        </p>
        <div>
          <form method="post" className="row form-horizontal">
            <div className="form-group input--hoshi col-sm-6">
              <div className="input-wrap">
                <input
                  autoComplete="off"
                  type="text"
                  className="form-control input__field input input__field--hoshi"
                  id="inputName"
                  name="inputName"
                  placeholder="Your Name"
                  required
                />
                <label className="input__label input__label--hoshi input__label--hoshi-color-1"></label>
              </div>
            </div>
            <div className="form-group input--hoshi col-sm-6">
              <div className="input-wrap">
                <input
                  autoComplete="off"
                  type="email"
                  className="form-control input input__field input__field--hoshi"
                  placeholder="Your Email"
                  id="inputEmail"
                  name="inputEmail"
                  required
                />
                <label className="input__label input__label--hoshi input__label--hoshi-color-1"></label>
              </div>
            </div>
            <div className="form-group input--hoshi col-sm-12">
              <div className="input-wrap">
                <textarea
                  className="form-control input input__field input__field--hoshi"
                  rows="4"
                  id="inputMessage"
                  name="inputMessage"
                  placeholder="Your Message"
                  required
                ></textarea>
                <label className="input__label input__label--hoshi input__label--hoshi-color-1"></label>
              </div>
            </div>
            <div className="form-group col-sm-12">
              <div className="align-center">
                <button type="submit" className="btn btn-default">
                  <span className="mask"></span>
                  <span>Send Message</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="email-direct">
        <p className="wow fadeInRight" data-wow-duration=".4s">
          Or simply email me at&nbsp;
          <a href="mailto:fulls.anhnt2805dt@gmail.com">anhnt2805dt@gmail.com</a>
        </p>
      </div>
    </section>
  );
}
