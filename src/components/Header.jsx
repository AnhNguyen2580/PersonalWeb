export default function Header() {
  return (
    <header>
      <div className="header-wrap col-lg-10 center-div">
        <div className="float-left name">
          <a data-scroll href="#body">
            <h1 className="text-dark">NGUYEN TUAN ANH</h1>
            <span style={{ color: '#8DB393', fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 600 }}>
              QA Engineer
            </span>
          </a>
        </div>
        <div className="float-right social-download-wrap">
          <a href="#contact_sec" className="btn btn-default float-left">
            <span className="mask"></span>
            <span className="btn-label">
              <b>Contact me</b>
              <span className="icon pe-7s-mail"></span>
            </span>
          </a>
        </div>
      </div>
      <div className="clearfix"></div>
    </header>
  );
}
