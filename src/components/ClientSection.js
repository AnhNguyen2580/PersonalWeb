import React, { Component } from 'react';

export default class ClientSection extends Component {
  render() {
    return (
      <div>
        {/* <!--Client Sec--> */}
        <section
          id="client_sec"
          className="col-lg-10 col-md-11 col-sm-11 center-div client-wrap  sec-pad wow bounceIn"
          data-wow-duration=".4s"
        >
          <h6>clients</h6>
          <div className="client-carousel">
            <img src="assets/img/client1.png" alt="client" />
            <img src="assets/img/client2.png" alt="client" />
            <img src="assets/img/client3.png" alt="client" />
            <img src="assets/img/client4.png" alt="client" />
            <img src="assets/img/client5.png" alt="client" />
            <img src="assets/img/client2.png" alt="client" />
          </div>
        </section>
        {/* <!--/Client Sec--> */}
      </div>
    );
  }
}
