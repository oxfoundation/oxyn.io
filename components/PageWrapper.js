import React, { Component } from "react";
import { Container } from "reactstrap";

export default class PageWrapper extends Component {
  render() {
    return (
      <div className="page-wrapper">
        <Container>
          <div className="page">
            <div className="page__title">{this.props.title}</div>
            <div className="page__content">{this.props.children}</div>
          </div>
        </Container>
      </div>
    );
  }
}
