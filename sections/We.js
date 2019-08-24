import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

import Section from '../components/Section';

export default class We extends Component {
  render() {
    return (
      <Section name="we" {...this.props}>
        <Container>
          <Row className={this.props.reverse? "flex-row-reverse":""}>
            <Col md="5" className="d-flex align-items-center">
              <img src={this.props.img} alt="Founders of OxFoundation" className="bordered-image"></img>
            </Col>
            <Col md="7">
              <div className="we__text">
                <div className="we__title">{this.props.title}</div>
                  {this.props.children}
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
    )
  }
}
