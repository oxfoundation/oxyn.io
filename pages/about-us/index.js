import React, { Component } from "react";
import { Jumbotron, Container } from "reactstrap";
import DefaultTemplate from "../../templates/Default";
import PageWrapper from "../../components/PageWrapper";
import Accordion from "../../components/Accordion";

export default class AboutUs extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <DefaultTemplate className="--white">
        <PageWrapper title="About Us">
          <p>About Us</p>
        </PageWrapper>
      </DefaultTemplate>
    );
  }
}
