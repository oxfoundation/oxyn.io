import React, { Component } from "react";
import { Row, Col, Input, Container } from "reactstrap";
import Link from "next/link";
import { FiLinkedin, FiTwitter, FiFacebook, FiLink, FiChevronRight} from 'react-icons/fi'

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
                  <FiChevronRight />
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
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Become a Merchant
                  </a>
                </li>
                <li>
                  <a href="mailto:hello@oxyn.io?subject=Become a Developer">
                    For Developers
                  </a>
                </li>

                <li>
                  <a href="mailto:hello@oxyn.io?subject=For Business Corporations">
                    For Business
                  </a>
                </li>
              </ul>
            </Col>
            <Col xs="12" md="3">
              <h5>Regulations</h5>
              <ul className="list-unstyled text-small">
                <li>
                  <a
                    href="https://www.oxyn.io/privacy"
                    arget="_blank"
                    rel="noopener noreferrer"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.oxyn.io/terms"
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
                  <FiTwitter size="1.3em" className="text-primary"/>
                </a>
                <a
                  className="icons__icon --facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/oxyncommunity/"
                >
                  <FiFacebook size="1.3em" className="text-primary"/>
                </a>
                {/* <a
                  className="icons__icon --youtube"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.youtube.com/channel/UCPM_UduhY6b_7WvSM7SSYIg"
                >
                  <Icon
                    icon={["fab", "youtube"]}
                    className="icons__icon-image"
                  />
                </a> */}
                <a
                  className="icons__icon --linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/company/ox-foundation/"
                >
                  <FiLinkedin size="1.3em" className="text-primary"/>
                </a>
                {/* <a
                  className="icons__icon --reddit"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://reddit.com/"
                >
                  <Icon
                    icon={["fab", "reddit-alien"]}
                    className="icons__icon-image"
                  />
                </a> */}
              </div>
            </Col>
          </Row>
          <div className="footer__copyright py-3 mt-3">
            <Row>
              <Col xs="12" md="6" className="text-center text-md-left">
                All rights reserved © 2019
              </Col>
              <Col xs="12" md="6" className="text-center text-md-right">
                developed by <b>OxFoundation</b>
              </Col>
            </Row>
          </div>
        </div>
      </footer>
    );
  }
}
