import React, { Component } from "react";
import { Container, Row, Col, Button, Form, Input } from "reactstrap";
import BackgroundSlideshow from "react-background-slideshow";

import Section from "../components/Section";

export default class Intro extends Component {
  constructor(props) {
    super(props);


    this.state = {
      isAuthenticated: false,
      me: null,
      isOpen: false
    };
  }

  render() {
    return (
      <Section name="intro" >
        <BackgroundSlideshow
          images={this.props.images}
          startAt={2}
          animationDelay={3000}
        />

        <Container>
          <div className="intro__contents">
            <div className="intro__main-title">{this.props.title}</div>
            <div className="intro__sub-title">
              {this.props.subTitle}
              {/* Allow investors follow your startup and see progress in real time */}
            </div>
            <div className="intro__actions">
              <Row>
                <Col md="12">
                  <Form>
                    <Row>
                      <Col md={{ size: 6 }}>
                        <Button color="primary" block={true} >
                          Join Oxyn
                        </Button>
                        <div className="text-center mb-3 text-white">Download Mobile App for FREE</div>
                      </Col>
                      <Col md={{ size: 6 }}>
                        <Button
                          color="primary"
                          outline={true}
                          block={true}
                          className="mb-3"
                        >
                          Learn More
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </Section>
    );
  }
}
