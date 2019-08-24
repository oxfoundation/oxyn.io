import React, { Component } from "react";
import { Jumbotron, Container } from "reactstrap";
import DefaultTemplate from "../templates/Default";
import PageWrapper from "../components/PageWrapper";
import Accordion from "../components/Accordion";

export default class Contact extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <DefaultTemplate className="--white">
        <PageWrapper title="Contact">
          <p>
            <h5>In case of any questions please contact:</h5>
            <b>Email:</b>{" "}
            <a href="mailto:hello@oxyn.io">hello@oxyn.io</a>
            <br />
            <b>Phone:</b> (802) 431-6996
          </p>
        </PageWrapper>
      </DefaultTemplate>
    );
  }
}
