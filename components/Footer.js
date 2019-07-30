import React, { Component } from "react";
import { Row, Col, Input, Container } from "reactstrap";
import Link from "next/link";

// import iconFacebook from '../images/icon-facebook.svg';
// import iconTwitter from '../images/icon-twitter.svg';
// import iconYoutube from '../images/icon-youtube.svg';
// import iconMedium from '../images/icon-medium.svg';
// import iconLinkedin from '../images/icon-linkedin.svg'

import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container-small">
          <Row>
            <Col md="8">
              <h3 className="text-white text-uppercase">Join us</h3>
              <p className="text-white">Be part of our comunity</p>
            </Col>
            <Col md="4" className="align-self-center">
              <div className="subscribe">
                <Input placeholder="Enter your email" />
                <a className="subscribe__button">
                  <Icon
                    icon="chevron-circle-right"
                    className="subscribe__button-icon"
                  />
                </a>
              </div>
            </Col>
          </Row>
          <div className="footer__separator" />
          <Row className="text-center text-md-left">
            <Col xs="12" md="3">
              <h5>Features</h5>
              <ul className="list-unstyled text-small">
                <li>
                  <a
                    href="https://s3-us-west-1.amazonaws.com/files.oxyn.io/Oxyn_Greenpaper.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Green Paper
                  </a>
                </li>
                <li>
                  <a href="mailto:hello@oxyn.io?subject=Become a Merchant">
                    Become a Merchant
                  </a>
                </li>
                <li>
                  <a href="mailto:hello@oxyn.io?subject=Run a Green Node">
                    Run a Green Node
                  </a>
                </li>
                <li>
                  <a href="mailto:hello@oxyn.io?subject=For Business Corporations">
                    For Business Corporations
                  </a>
                </li>
              </ul>
            </Col>
            <Col xs="12" md="3">
              <h5>Regulations</h5>
              <ul className="list-unstyled text-small">
                <li>
                  <a
                    href="https://s3-us-west-1.amazonaws.com/files.oxyn.io/Privacy_Policy.pdf"
                    arget="_blank"
                    rel="noopener noreferrer"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="https://s3-us-west-1.amazonaws.com/files.oxyn.io/Terms_and_Conditions.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Terms and conditions
                  </a>
                </li>
              </ul>
            </Col>
            <Col xs="12" md="6" className="text-md-right">
              <h5>Contact us</h5>

              <p>
                <b>Phone number:</b> (802) 431-6996
                <br />
                <b>E-mail:</b> <a>hello@oxyn.io</a>
              </p>

              <div className="icons">
                <a
                  className="icons__icon --twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://twitter.com/oxyncommunity"
                >
                  <Icon
                    icon={["fab", "twitter"]}
                    className="icons__icon-image"
                  />
                </a>
                <a
                  className="icons__icon --facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/oxyncommunity/"
                >
                  <Icon
                    icon={["fab", "facebook"]}
                    className="icons__icon-image"
                  />
                </a>
                <a
                  className="icons__icon --youtube"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.youtube.com/channel/UCPM_UduhY6b_7WvSM7SSYIg"
                >
                  <Icon
                    icon={["fab", "youtube"]}
                    className="icons__icon-image"
                  />
                </a>
                <a
                  className="icons__icon --linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/company/ox-foundation/"
                >
                  <Icon
                    icon={["fab", "linkedin"]}
                    className="icons__icon-image"
                  />
                </a>
                <a
                  className="icons__icon --reddit"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://reddit.com/"
                >
                  <Icon
                    icon={["fab", "reddit-alien"]}
                    className="icons__icon-image"
                  />
                </a>
              </div>
            </Col>
          </Row>
          <div className="footer__copyright py-3 mt-3">
            <Row>
              <Col xs="12" md="6" className="text-center text-md-left">
                All rights reserved © 2018
              </Col>
              <Col xs="12" md="6" className="text-center text-md-right">
                developed by <b>Oxyn</b>
              </Col>
            </Row>
          </div>
        </div>
      </footer>
    );
  }
}
